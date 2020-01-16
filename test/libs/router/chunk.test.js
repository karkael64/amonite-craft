import "babel-polyfill"
import Chunk from "../../../libs/router/chunk"


function deepEqualObject (obj1, obj2) {
  const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false
  return !keys1.find((key1) => {
    if (!keys2.includes(key1)) return true
    const
      val1 = obj1[key1],
      val2 = obj2[key1],
      type1 = typeof val1,
      type2 = typeof val2;
    if (type1 !== type2) return true
    if (type1 === "object") return !deepEqualObject(val1, val2)
    if (type1 === "function") return type1.toString() !== type2.toString()
    if (val1 !== val2) return true
    return false
  })
}

function shouldThrow (fn) {
  try {
    fn()
    return false
  } catch (e) {
    return true
  }
}

function sleep (millisecond = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond)
  })
}


describe("Test class Chunk", function () {
  describe("Create a Chunk from string", function () {
    describe("Chunk format", function () {
      const chunk = new Chunk("hello")
      expect(deepEqualObject(chunk.extractArgs("hello"), {value: "hello"}), true, "chunk match hello only")
      expect(shouldThrow(() => chunk.extractArgs("hi")), true, "chunk does not match hi")
      expect(shouldThrow(() => chunk.extractArgs("helloo")), true, "chunk does not match helloo")
    })

    describe("Key:type format", async function () {
      const chunk = new Chunk("hello:string")
      expect(deepEqualObject(chunk.extractArgs("hello:you"), {key: "hello", type: "string", value: "you"}), true, "chunk match hello:you")
      expect(deepEqualObject(chunk.extractArgs("hello:"), {key: "hello", type: "string", value: ""}), true, "chunk match hello:")
      expect(deepEqualObject(chunk.extractArgs("hello::you"), {key: "hello", type: "string", value: ":you"}), true, "chunk match hello::you")
      expect(shouldThrow(() => chunk.extractArgs("hello")), true, "chunk does not match hello")
    })

    describe("Star chunk", function () {
      const chunk = new Chunk("*")
      expect(deepEqualObject(chunk.extractArgs("anything"), {value: "anything"}), true, "chunk match anything")
      expect(deepEqualObject(chunk.extractArgs("any:thing"), {value: "any:thing"}), true, "chunk match any:thing")
    })

    describe("Type format", function () {
      const chunk = new Chunk(":json")
      expect(deepEqualObject(chunk.extractArgs('{"hello":"world"}'), {value: {hello: "world"}, type: "json"}), true, "chunk match object")
      expect(deepEqualObject(chunk.extractArgs('[true, 3.14]'), {value: [true, 3.14], type: "json"}), true, "chunk match object")
      expect(shouldThrow(() => chunk.extractArgs('')), true, "chunk should not match empty string")
    })
  })

  describe("Create a Chunk from RegExp", function () {
    const r = /a[bc]d:\db/
    const chunk = new Chunk(r)
    expect(deepEqualObject(chunk.extractArgs("abd:1b"), {regexp: r, value: "abd:1b"}), true, "chunk match abd:1b")
    expect(deepEqualObject(chunk.extractArgs("acd:7b"), {regexp: r, value: "acd:7b"}), true, "chunk match acd:7b")
    expect(deepEqualObject(chunk.extractArgs("any$acd:0b"), {regexp: r, value: "any$acd:0b"}), true, "chunk match any$acd:0b, because regexp doesn't verify start and end of string")
    expect(shouldThrow(() => chunk.extractArgs("add:0b")), true, "chunk does not match add:0b")
  })

  describe("Create a Chunk from function", function () {
    const country = function (result) {
      const chunk = result.original
      if (chunk.length < 3) throw new Error("Should be 3 characters at least.")
      else return {value: chunk.substr(0,3).toUpperCase(), original: chunk}
    }
    const chunk = new Chunk(country)
    expect(deepEqualObject(chunk.extractArgs("bref"), {value: "BRE", original: "bref"}), true, "chunk match bref")
    expect(deepEqualObject(chunk.extractArgs("a:b"), {value: "A:B", original: "a:b"}), true, "chunk match a:b")
    expect(shouldThrow(() => chunk.extractArgs("")), true, "chunk should length 3 at least")
  })

  describe("Create a Chunk from object", function () {
    describe("Chunk format", function () {
      const chunk = new Chunk({value: "hello:number"})
      expect(deepEqualObject(chunk.extractArgs("hello:number"), {value: "hello:number"}), true, "chunk match hello:number")
      expect(shouldThrow(() => chunk.extractArgs("hello:10")), true, "chunk does not match hello:10")
    })

    describe("Key:type format", function () {
      const chunk = new Chunk({key: "hello", type: "number"})
      expect(deepEqualObject(chunk.extractArgs("hello:10"), {key: "hello", type: "number", value: 10}), true, "chunk match hello:10")
      expect(shouldThrow(() => chunk.extractArgs("hello:world")), true, "chunk does not match hello:world")
      expect(shouldThrow(() => chunk.extractArgs("hello:")), true, "chunk does not match hello:")
      expect(shouldThrow(() => chunk.extractArgs("hello")), true, "chunk does not match hello")
    })

    describe("RegExp format", function () {
      const r = /a[bc]d:\db/
      const chunk = new Chunk({regexp: r})
      expect(deepEqualObject(chunk.extractArgs("abd:1b"), {regexp: r, value: "abd:1b"}), true, "chunk match abd:1b")
      expect(deepEqualObject(chunk.extractArgs("acd:7b"), {regexp: r, value: "acd:7b"}), true, "chunk match acd:7b")
      expect(deepEqualObject(chunk.extractArgs("any$acd:0b"), {regexp: r, value: "any$acd:0b"}), true, "chunk match any$acd:0b, because regexp doesn't verify start and end of string")
      expect(shouldThrow(() => chunk.extractArgs("add:0b")), true, "chunk does not match add:0b")
    })

    describe("Key:RegExp format", function () {
      const r = /^\d{4}-\d{2}-\d{2}$/
      const chunk = new Chunk({key: "hello", regexp: r})
      expect(deepEqualObject(chunk.extractArgs("hello:2000-01-01"), {key: "hello", value: "2000-01-01", regexp: r}), true, "chunk match hello:2000-01-01")
      expect(shouldThrow(() => chunk.extractArgs("hello:2000-1-1")), true, "chunk does not match hello:2000-1-1")
      expect(shouldThrow(() => chunk.extractArgs("hello:222000-01-0001")), true, "chunk does not match hello:222000-01-0001")
      expect(shouldThrow(() => chunk.extractArgs("hello:")), true, "chunk does not match hello:")
      expect(shouldThrow(() => chunk.extractArgs("hello")), true, "chunk does not match hello")
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
      expect(deepEqualObject(chunk.extractArgs("this is 12-feb-2020"), {date: "12-feb-2020", day: 12, month: "feb", year: 2020, original: "this is 12-feb-2020"}), true, "chunk \"this is 12-feb-2020\" matches")
      expect(shouldThrow(() => chunk.extractArgs("01-01-2019")), true, "chunk 01-01-2019 does not match")
      expect(shouldThrow(() => chunk.extractArgs("2019-feb-12")), true, "chunk 2019-feb-12 does not match")
      expect(shouldThrow(() => chunk.extractArgs("")), true, "empty chunk does not match")
    })

    describe("Matchers format", function () {
      const matchers = ["red", "green", "blue"]
      const chunk = new Chunk({match: matchers})

      expect(deepEqualObject(chunk.extractArgs("green"), {value: "green", index: "1"}), true, "chunk green matches")
      expect(shouldThrow(()=>chunk.extractArgs("greened")), true, "chunk greened does not match")
      expect(shouldThrow(()=>chunk.extractArgs("gre")), true, "chunk gre does not match")
      expect(shouldThrow(()=>chunk.extractArgs("1")), true, "chunk 1 does not match")
      expect(shouldThrow(() => chunk.extractArgs("")), true, "empty chunk does not match")
    })

    describe("RegExp matchers format", function () {
      const matchers = ["2018", "2019", "2020"]
      const rx = /\d{4}/
      const chunk = new Chunk({regexp: rx, match: matchers})

      expect(deepEqualObject(chunk.extractArgs("year 2019 ?"), {value: "year 2019 ?", regexp: rx, index: "1"}), true, "chunk match \"year 2019 ?\"")
      expect(deepEqualObject(chunk.extractArgs("2018"), {value: "2018", regexp: rx, index: "0"}), true, "chunk match 2018")
      expect(shouldThrow(()=>chunk.extractArgs("year 1999 ?")), true, "chunk does not match \"year 1999 !\"")
      expect(shouldThrow(()=>chunk.extractArgs("2021")), true, "chunk does not match 2021")
    })

    describe("Empty object chunk", function () {
      const chunk = new Chunk({})
      expect(deepEqualObject(chunk.extractArgs("anything"), {value: "anything"}), true, "chunk match anything")
      expect(deepEqualObject(chunk.extractArgs("any:thing"), {value: "any:thing"}), true, "chunk match any:thing")
    })
  })
})
