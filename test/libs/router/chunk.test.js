import "babel-polyfill"
import Chunk from "../../../libs/router/chunk"

async function sleep(delay = 1000) {
  const start = Date.now()
  return new Promise((resolve) => {
    if (Date.now() > start+delay) {
      resolve()
    }
  })
}

describe("Test class Chunk", function () {
  describe("Create a Chunk from string", function () {
    describe("Chunk format", function () {
      const chunk = new Chunk("hello")
      expectEquiv(chunk.extractArgs("hello"), {value: "hello"}, "chunk match hello only")
      expectThrow(() => chunk.extractArgs("hi"), "chunk does not match hi")
      expectThrow(() => chunk.extractArgs("helloo"), "chunk does not match helloo")
      await sleep(3000)
    })

    describe("Key:type format", function () {
      const chunk = new Chunk("hello:string")
      expectEquiv(chunk.extractArgs("hello:you"), {key: "hello", type: "string", value: "you"}, "chunk match hello:you")
      expectEquiv(chunk.extractArgs("hello:"), {key: "hello", type: "string", value: ""}, "chunk match hello:")
      expectEquiv(chunk.extractArgs("hello::you"), {key: "hello", type: "string", value: ":you"}, "chunk match hello::you")
      expectThrow(() => chunk.extractArgs("hello"), "chunk does not match hello")
    })

    describe("Star chunk", function () {
      const chunk = new Chunk("*")
      expectEquiv(chunk.extractArgs("anything"), {value: "anything"}, "chunk match anything")
      expectEquiv(chunk.extractArgs("any:thing"), {value: "any:thing"}, "chunk match any:thing")
    })

    describe("Type format", function () {
      const chunk = new Chunk(":json")
      expectEquiv(chunk.extractArgs('{"hello":"world"}'), {value: {hello: "world"}, type: "json"}, "chunk match object")
      expectEquiv(chunk.extractArgs('[true, 3.14]'), {value: [true, 3.14], type: "json"}, "chunk match object")
      expectThrow(() => chunk.extractArgs(''), "chunk should not match empty string")
    })
  })

  describe("Create a Chunk from RegExp", function () {
    const r = /a[bc]d:\db/
    const chunk = new Chunk(r)
    expectEquiv(chunk.extractArgs("abd:1b"), {regexp: r, value: "abd:1b"}, "chunk match abd:1b")
    expectEquiv(chunk.extractArgs("acd:7b"), {regexp: r, value: "acd:7b"}, "chunk match acd:7b")
    expectEquiv(chunk.extractArgs("any$acd:0b"), {regexp: r, value: "any$acd:0b"}, "chunk match any$acd:0b, because regexp doesn't verify start and end of string")
    expectThrow(() => chunk.extractArgs("add:0b"), "chunk does not match add:0b")
  })

  describe("Create a Chunk from function", function () {
    const country = function (result) {
      const chunk = result.original
      if (chunk.length < 3) throw new Error("Should be 3 characters at least.")
      else return {value: chunk.substr(0,3).toUpperCase(), original: chunk}
    }
    const chunk = new Chunk(country)
    expectEquiv(chunk.extractArgs("bref"), {value: "BRE", original: "bref"}, "chunk match bref")
    expectEquiv(chunk.extractArgs("a:b"), {value: "A:B", original: "a:b"}, "chunk match a:b")
    expectThrow(() => chunk.extractArgs(""), "chunk should length 3 at least")
  })

  describe("Create a Chunk from object", function () {
    describe("Chunk format", function () {
      const chunk = new Chunk({value: "hello:number"})
      expectEquiv(chunk.extractArgs("hello:number"), {value: "hello:number"}, "chunk match hello:number")
      expectThrow(() => chunk.extractArgs("hello:10"), "chunk does not match hello:10")
    })

    describe("Key:type format", function () {
      const chunk = new Chunk({key: "hello", type: "number"})
      expectEquiv(chunk.extractArgs("hello:10"), {key: "hello", type: "number", value: 10}, "chunk match hello:10")
      expectThrow(() => chunk.extractArgs("hello:world"), "chunk does not match hello:world")
      expectThrow(() => chunk.extractArgs("hello:"), "chunk does not match hello:")
      expectThrow(() => chunk.extractArgs("hello"), "chunk does not match hello")
    })

    describe("RegExp format", function () {
      const r = /a[bc]d:\db/
      const chunk = new Chunk({regexp: r})
      expectEquiv(chunk.extractArgs("abd:1b"), {regexp: r, value: "abd:1b"}, "chunk match abd:1b")
      expectEquiv(chunk.extractArgs("acd:7b"), {regexp: r, value: "acd:7b"}, "chunk match acd:7b")
      expectEquiv(chunk.extractArgs("any$acd:0b"), {regexp: r, value: "any$acd:0b"}, "chunk match any$acd:0b, because regexp doesn't verify start and end of string")
      expectThrow(() => chunk.extractArgs("add:0b"), "chunk does not match add:0b")
    })

    describe("Key:RegExp format", function () {
      const r = /^\d{4}-\d{2}-\d{2}$/
      const chunk = new Chunk({key: "hello", regexp: r})
      expectEquiv(chunk.extractArgs("hello:2000-01-01"), {key: "hello", value: "2000-01-01", regexp: r}, "chunk match hello:2000-01-01")
      expectThrow(() => chunk.extractArgs("hello:2000-1-1"), "chunk does not match hello:2000-1-1")
      expectThrow(() => chunk.extractArgs("hello:222000-01-0001"), "chunk does not match hello:222000-01-0001")
      expectThrow(() => chunk.extractArgs("hello:"), "chunk does not match hello:")
      expectThrow(() => chunk.extractArgs("hello"), "chunk does not match hello")
    })

    describe("Execute format", function () {
      const fn = (function myDate(data) {
        const found = data.original.match(/(\d{2})-([a-z]{3})-(\d{4})/)
        if (found) {
          return {
            date: found[0],
            day: parseInt(found[1]),
            month: found[2],
            year: parseInt(found[3]),
            original: data.original
          }
        } else {
          throw new Error("Does not match myDate format")
        }
      });
      const chunk = new Chunk({transform: fn})
      expectEquiv(chunk.extractArgs("this is 12-feb-2020"), {date: "12-feb-2020", day: 12, month: "feb", year: 2020, original: "this is 12-feb-2020"}, "chunk \"this is 12-feb-2020\" matches")
      expectThrow(() => chunk.extractArgs("01-01-2019"), "chunk 01-01-2019 does not match")
      expectThrow(() => chunk.extractArgs("2019-feb-12"), "chunk 2019-feb-12 does not match")
      expectThrow(() => chunk.extractArgs(""), "empty chunk does not match")
    })

    describe("Matchers format", function () {
      const matchers = ["red", "green", "blue"]
      const chunk = new Chunk({match: matchers})

      expectEquiv(chunk.extractArgs("green"), {value: "green", index: "1"}, "chunk green matches")
      expectThrow(()=>chunk.extractArgs("greened"), "chunk greened does not match")
      expectThrow(()=>chunk.extractArgs("gre"), "chunk gre does not match")
      expectThrow(()=>chunk.extractArgs("1"), "chunk 1 does not match")
      expectThrow(() => chunk.extractArgs(""), "empty chunk does not match")
    })

    describe("RegExp matchers format", function () {
      const matchers = ["2018", "2019", "2020"]
      const rx = /\d{4}/
      const chunk = new Chunk({regexp: rx, match: matchers})

      expectEquiv(chunk.extractArgs("year 2019 ?"), {value: "year 2019 ?", regexp: rx, index: "1"}, "chunk match \"year 2019 ?\"")
      expectEquiv(chunk.extractArgs("2018"), {value: "2018", regexp: rx, index: "0"}, "chunk match 2018")
      expectThrow(()=>chunk.extractArgs("year 1999 ?"), "chunk does not match \"year 1999 !\"")
      expectThrow(()=>chunk.extractArgs("2021"), "chunk does not match 2021")
    })

    describe("Empty object chunk", function () {
      const chunk = new Chunk({})
      expectEquiv(chunk.extractArgs("anything"), {value: "anything"}, "chunk match anything")
      expectEquiv(chunk.extractArgs("any:thing"), {value: "any:thing"}, "chunk match any:thing")
    })
  })
})
