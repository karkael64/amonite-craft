# Amonite-Craft

Amonite is a Web Front JavaScript library that let's you improving your
Craftmanship skills. It means _you don't have to use a framework which limit
developer skills_, you just have to call the tool you need when you want: show
a page, show a section of your page, listen browser and route user, create
endpoint with back-end API.

The website goal is reaching by you, the developer: welcome to the Craftmanship
world!

## Simple use

``` js
import Amonite from "amonite" // or
const Amonite = require("amonite") // please note library files uses "import" keyword
```

Callback `cb` is called in code `init(cb)` when window is loaded, or the
callback is called in code `initAll(cb)` when Page container is set by default
on `document.body` and the Router start listening registered routes.

``` js
Amonite.initAll() // or
Amonite.init(() => {
  Amonite.Page.setContainer(document.body)
  Amonite.Router.listenPopstate()
})
```

If you want to load a section with a route when the user has loaded his window,
then you should first register components, sections, pages and routes before
calling `Amonite.init(cb)` or `Amonite.initAll(cb)`.


### Components

* A `Component` is a defined HTML node with a template, methods, events scoped.
* A `Section` is a component which fill a page: there is only one section in a page.
* A `Page` is the component structuring HTML document inserted in body: there is
only one page opened at time and only one section in the page.

For examples:
1.  A very simple page with few information like a login, sign in or logout
would expect the same light design (where light design is set by Page and where
login, sign up and logout are Sections);
2.  A commercial prospecting page, an informative page or a statistic page
would expect the same heavy design (where heavy design is set by Page and where
prospecting, informative and statistic are Sections).

You can create a Page, a Section or a Component as easy as this (here 1 page, 2
sections):

``` js
//  pages have same structure
class MarketPage extends Amonite.Page {
  template () {
    return `<main></main>`
  }

  elements () {
    return {
      section: "main"
    }
  }
}

//  abstracted: all market sections are existing in a MarketPage structure
class MarketSection extends Amonite.Section {
  wrapper () {
    return MarketPage
  }
}

//  list items in this section
class MarketListSection extends MarketSection {
  template () {
    return `<ul>
      <li></li>
      <li></li>
    </ul>`
  }
}

//  show item in this section
class MarketItemSection extends MarketSection {
  template (item) {
    const addLabel = "Add to cart"
    return `<div class="item">
      <p>${item.name}</p>
      <p>${item.description}</p>
      <button>${addLabel}</button>
    </div>`
  }
}
```

### Routes

The webapp can have many routes in many routers, there is no problem. Just keep
in mind there is just one controller when no other route match (it could be a
404 error?).

``` js
function atFirstCallOnly() {}
const router = new Router("/market", atFirstCallOnly)
const list = router.add("/", () => (new MarketListSection()).setSection())
const item = router.add("/item/:id", (id) => (new MarketItemSection(id)).setSection())

function error404() {}
Router.setDefault(error404)
```

In this example :
* The function `atFirstCallOnly()` is called one time in all the
window session. You can use it if you want to improve your website performance
and do the necessary calculations.
* The function `Section.prototype.setSection()` replaces the current section
with this section (important: if the current page is different than this
section's page, then the page is also replaced!).
* The function `router.add("route", function exec(args) {})` create a route registered in this router. In the above section, the route `list` matches when URL path is `/market` or `/market/` (last slash is optional), and the route `item` matches when URL path is `/market/item/123aze` (or anything else than "123aze"). The arguments `args` are extracted from URL (ie: `{"id": "123aze"}`).

### API requests

There is three common ways to send an AJAX request: with collection/model system, with resource/promise system, or with AJAX self configuration. You can use each of them, but they are not developed to be mixed with each others. I prefer resource/promise system :

``` js
class MarketItemRequest extends Amonite.Resource {
  constructor () {
    this.items = []
  }

  fetch (id) {
    const prom = Amonite.Resource.request("GET", "//your.api.site/item/" + id)
    const self = this
    prom.then((xhr) => {
      self.updateItem(JSON.parse(xhr.responseText))
    })
    return prom
  }

  list (first = 0, max = 30) { // pagination
    const prom = Amonite.Resource.request("POST", "//your.api.site/list", {first, max})
    const self = this
    prom.then((xhr) => {
      JSON.parse(xhr.responseText).forEach(self.updateItem.bind(self))
    })
    return prom
  }

  updateItem (data) {
    const item = this.items.find((i) => i.id === data.id)
    if (!item) this.items.push(item = {})
    Object.assign(item, data)
  }
}

const req = new MarketItemRequest()
req.list().then((xhr) => {})
```

## Focus

Amonite does not need any library to work. Now you are free!

## Use library files uncompressed

Just be aware code uses NodeJS v11.x.x, ECMAScript6 and `import` keyword for
package management.

## Use library ESM

You can load files directly in your window by adding this file in your script: `/esm.js`. Then you can use it like this : `<script src="/scripts/esm.js"></script>`

## Feel free to improve!

1.  Send me a message or push a commit,
2.  Use, deform and transform this library in your project.
