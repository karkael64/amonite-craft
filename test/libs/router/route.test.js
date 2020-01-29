import Route from "../../../libs/router/route"

describe("Test Class Route", function () {
  global.window = { location: { hash: "" } }
  global.window.window = global.window

  expect(!!Route, true, "First expect in class Route")
  expect(!!(new Route("", ()=>{})), true, "Can instanciate class Route")

  describe("Create a Route from a string", function () {
    let count_controller = 0
    const fn = function () { count_controller++ }
    const route = new Route("/hello/world:string/test:/:integer", fn)

    describe("Match", function () {
      const hash = "#/hello/world:any/test:yep-123/42"
      Route.setBrowserRequest("#/hello/world:any/test:yep-123/42")
      expect(hash, window.location.hash, "window location hash has changed")
      expect(hash.substr(1), Route.getBrowserRequest(), "recover hash without #")
      expect(route.isMatch(), true, "route matches")

      const args = route.getArgs()
      expect(args.length, 5, "route matchs and returns 5 computed chunks")
      expectEquiv(args[0], {value: ""}, "first chunk matches (empty)")
      expectEquiv(args[1], {value: "hello"}, "second chunk matches (simple)")
      expectEquiv(args[2], {value: "any", type: "string", key: "world"}, "third chunk matches (key:type)")
      expectEquiv(args[3], {value: "yep-123", type: "", key: "test"}, "fourth chunk matches (key:)")
      expectEquiv(args[4], {value: 42, type: "integer"}, "fifth chunk matches (:type)")

      expect(count_controller, 0, "controller not called yet")
      route.run(args)
      expect(count_controller, 1, "controller first call")

      expect("#" + route.createPath(args), window.location.hash, "can recreate path from args")
      expect("#" + route.createPath(args.map(obj => obj.value)), window.location.hash, "can recreate path from args values")
    })

    describe("Don't match", function () {
      Route.setBrowserRequest("")
      expect(route.isMatch(), false, "should not match empty")
      Route.setBrowserRequest("#")
      expect(route.isMatch(), false, "should not match empty")
      Route.setBrowserRequest("#/hello/world:something/test:123/")
      expect(route.isMatch(), false, "should match every chunk")
      Route.setBrowserRequest("#/hello/world:something/test/123")
      expect(route.isMatch(), false, "need \":\" even for empty chunk")
    })
  })

  describe("Create a Route from a list of string", function () {
    const route = new Route(["what", "is:", ":time"], function () {})
    Route.setBrowserRequest("#what/is:your/23:59:59")
    expect(route.isMatch(), true, "route matches")
  })

  describe("Create a Route from a list of objects", function () {
    const r = /^\d{4}-\d{2}-\d{2}$/
    const route = new Route([{value: ""}, {key: "hello", regexp: r}], function () {})
    Route.setBrowserRequest("#/hello:2019-01-01")
    expect(route.isMatch(), true, "route matches")
  })

  describe("Create a Route with a star", function () {
    describe("Create a Route with a single star", function () {
      const route = new Route("*", function () {})
      Route.setBrowserRequest("")
      expect(route.isMatch(), true, "route matches all (4)")
      Route.setBrowserRequest("#")
      expect(route.isMatch(), true, "route matches all (1)")
      Route.setBrowserRequest("#aze")
      expect(route.isMatch(), true, "route matches all (2)")
      Route.setBrowserRequest("#ljn/4567&éiujhz&é\"\"/aze\"")
      expect(route.isMatch(), true, "route matches all (3)")

      expectEquiv(route.getArgs(), [{value: "ljn/4567&éiujhz&é\"\"/aze\""}], "extracted args")
    })

    describe("Create a Route with a star at the end", function () {
      const route = new Route("/hello/*", function () {})
      Route.setBrowserRequest("#/hello/")
      expect(route.isMatch(), true, "route matches all")
      Route.setBrowserRequest("#/hello/aze")
      expect(route.isMatch(), true, "route matches all")
      Route.setBrowserRequest("#/hello/aze/123")
      expect(route.isMatch(), true, "route matches all")

      expectEquiv(route.getArgs(), [{value: ""}, {value: "hello"}, {value: "aze/123"}], "extracted args")
    })
  })

  describe("Create a Route with a star within", function () {
    const route = new Route("/hello/*/other", function () {})

    Route.setBrowserRequest("#/hello/you_and/other")
    expect(route.isMatch(), true, "route matches")

    Route.setBrowserRequest("#/hello/you/and/other")
    expect(route.isMatch(), false, "route does not match")
  })
})
