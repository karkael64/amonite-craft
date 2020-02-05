# Amonite-Craft

Amonite is a Web Front JavaScript library that let's you improving your
Craftmanship skills. It means _you don't have to use a framework which limit
developer skills_, you just have to call the tool you need when you want: show
a page, show a section of your page, create HTML custom elements, listen browser and route user, create endpoint with back-end API.

Your application goal is reached by you, the developer: welcome to the Craftmanship
world!


## Table of Contents

1. Installation
    1. Install in your browser as a library
    2. Import sources
    3. Browserify with Gulp
    4. Custom streaming build system
2. Amonite-Craft contents
3. Simple usage
4. Documentation


## Installation
### Install in your browser as a library

You can load files directly in your window by adding this file in your script: `/esm.js`. Then you can use it like this : `<script src="/scripts/esm.js"></script>`.


### Import sources

Needs:
* NodeJS v11,
* ECMAScript6 syntax and
* `import` keyword for package management.

You can add this package with `npm install amonite-craft`.


### Browserify with Gulp

Copy here the folder `builder/gulp` and its entry point `builder/gulp.js` to get a working Gulp streaming build system.


### Custom streaming build system

In order to improve systems and do custom unit tests, I use my own `babel-unifyer` and `base-test-files` to create a single script for each test files.

* [babel-unifyer](https://github.com/karkael64/babel-unifyer)
* [base-test-files](https://github.com/karkael64/base-test-files)

Copy here the folder `builder/factory` and its entry points `builder/dev.js` and `builder/prod.js` to get a working & lightweight & customizable streaming build system.


## Amonite-Craft contents

### Components

* A `Component` is a defined HTML node with a template, methods, events scoped.
* A `Section` is a component which fill a page: there is only one section in a page.
* A `Page` is the component structuring HTML document inserted in body: there is
only one page opened at time and only one section in the page.

For examples:
1. A very simple page with few information like a login, sign in or logout
would expect the same light design (where light design is set by Page and where
login, sign up and logout are Sections);
2. A commercial prospecting page, an informative page or a statistic page
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
function atFirstCallOnly() {
  // helps to prepare a page or a section, for example
  // ...
}

const router = new Router("/market", atFirstCallOnly)
const list = router.add("/", () => (new MarketListSection()).setSection())
const item = router.add("/item/:integer", (args) => {
  const id = args[2].value
  return (new MarketItemSection(id)).setSection();
})

function error404() {
  // may be a redirection
  // ...
}
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
import { Resource } from "amonite-craft"

class MarketItemRequest extends Resource {
  constructor () {
    this.items = []
  }

  fetch (id) {
    const prom = Resource.request("GET", "//your.api.site/item/" + id)
    const self = this
    prom.then((xhr) => {
      self.updateItem(JSON.parse(xhr.responseText))
    })
    return prom
  }

  list (first = 0, max = 30) { // pagination
    const prom = Resource.request("POST", "//your.api.site/list", {first, max})
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

### Custom HTML Elements

Following [Mozilla recommendations for HTML Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), Amonite declares its own Polyfill for defining Custom HTML Elements. Browsers does not all supports this function and its third parameter, so there is not the third parameter for `define()`.

```js
import { define, CustomHTMLElement } from "amonite-craft"

class PopupInfoHTMLElement extends CustomHTMLElement () {
  constructor (node) {
    super()
    this.addEventListener("load", this.load.bind(this))
  }

  load () {
    // when children are all loaded
  }
}
define("popup-info", PopupInfoHTMLElement)
```

Then just insert HTML element in your template

```html
<html>
  <body>
    <popup-info></popup-info>
  </body>
</html>
```

Or with JavaScript common functions

```js
document.body.appendChild(document.createElement("popup-info"))
```

My library has a strong improvement: the new custom element trigger the event `load` only when all of its children are loaded. It is useful when you create child custom elements into your custom element.

```js
import { define, CustomHTMLElement } from "amonite-craft"

class PopupInfoHTMLElement extends CustomHTMLElement {
  constructor (node) {
    super()
    this.node = node
    this.addEventListener("load", node.load.bind(this))
    node.appendChild(this.text = document.createElement("popup-text"))
    node.appendChild(this.close = document.createElement("popup-close"))

    this.close.getAttribute("icon") // is null
  }

  load () {
    // when children are all loaded
    this.node.children // contains popup-text and popup-close loaded
    this.close.getAttribute("icon") // is "close"
  }
}

class PopupTextHTMLElement extends CustomHTMLElement {}

class PopupCloseHTMLElement extends CustomHTMLElement {
  constructor (node) {
    super()
    node.setAttribute("icon", "close")
    node.addEventListener("click", this.click.bind(this))
  }

  click () {
    // do your thing
  }
}

define("popup-info", PopupInfoHTMLElement)
define("popup-text", PopupTextHTMLElement)
define("popup-close", PopupCloseHTMLElement)
```

The constructor is executed only when inserted in DOM, and only one time.


## Simple usage

### Start

Amonite contains a router and a page builder, you can register manually the page container and URL hash changes, or initialize it with `Amonite.initAll()`.

``` js
import Amonite from "amonite-craft" // or
const Amonite = require("amonite-craft") // please note library files uses "import" keyword

Amonite.initAll() // or
Amonite.init(() => {
  Amonite.Page.setContainer(document.body)
  Amonite.Router.listenPopstate()
})
```

Callback `cb` is called in code `init(cb)` when window is loaded, or the
callback is called in code `initAll(cb)` when Page container is set by default
on `document.body` and the Router start listening registered routes.

If you want to load a section with a route when the user has loaded his window,
then you should first register components, sections, pages and routes before
calling `Amonite.init(cb)` or `Amonite.initAll(cb)`.

## Use library ESM

Download and insert `esm.js` in your project !

## Feel free to improve!

1.  Send me a message or push a commit,
2.  Use, deform and transform this library in your project.
