# Amonite-Craft Documentation

1. [MVC](#mvc)
    1. class EventTarget
    2. class Component
    3. class Section
    4. class Page
2. [Custom elements](#custom-elements)
    1. define
    2. class CustomHTMLElement
3. [API](#api)
    1. Router
    2. Route
4. [Configuration](#configuration)
    1. init
    2. initAll
    3. Amonite


## MVC
### class EventTarget

#### Constructor `const target = new EventTarget`
Create an object that can trigger functions when events happens. The object can listen, dispatch and stop to listen events.

Parameter: none

Returns: `{EventTarget}` new instance.


#### Method `target.listen(eventName, fn)`
Start to listen event `eventName` and trigger `fn` when event happens.

Parameters:
* `{array.[{string}...]|String} eventName` The event name or list of event names listened ;
* `{array[{function}...]|function} fn` The function or list of functions executed when event happens.

Returns: `{EventTarget}` self instance.


#### Method `target.dispatch(eventName, args)`
Trigger event `eventName`, with optional list of arguments `args` sent in the functions.

Parameters:
* `{array.[{string}...]|String} eventName` The event to trigger ;
* `{array[*]|null} args` The optional & additional parameters.

Returns: `{EventTarget}` self instance.


#### Method `target.detach(eventName, fn)`
Stop listening at event `eventName` for function `fn`, or for all function if `fn` is not filled.

Parameters:
* `{array.[{string}...]|String} eventName` The event to stop to listen at ;
* `{array[{function}...]|function|*} fn` The targeted function. If not filled, stop every functions of event `eventName`.

Returns: `{EventTarget}` self instance.


#### Method `target.listenOnce(eventName, fn)`
Listen event `eventName` for once and trigger `fn` when happens.

Parameters:
* `{array.[{string}...]|String} eventName` The event to listen one time ;
* `{array[{function}...]|function} fn` The function executed when event happens.

Returns: `{EventTarget}` self instance.


### class Component

Extends: `EventTarget`

#### Constructor `const component = new Component(...arguments)`
Create an object for handling an HTMLElement and its DOM. A component generate the HTMLElement, manage its children elements and their events. A component can be inserted in another component.

Parameters: `...{*} arguments` a list of arguments sent in `template`, `elements`, `events` and `container` at component constructing.

Returns: `{Component}` new instance.

#### Attribute `component.container`
The value returned by function `container` after component construction. It should be an HTMLElement. The container should wrap the component in browser document DOM.

Type: `{HTMLElement|null}`

#### Attribute `component.template`
The value returned by function `template` after component construction. It should be an HTMLElement. This is the DOM managed by this component.

Type: `{HTMLElement|null}`

#### Attribute `component.elements`
The value returned by function `elements` after component construction. It should be an object where each field is an element name associated to a list of matching HTMLElement. The elements are in the template context at load (before editing the DOM).

Type: `{Object.<{array.[...{HTMLElement}]} elementName>}`

#### Attribute `component.events`
The value returned by function `events` after component construction. It should be a nested object where itself and children objects are targeting event names, select DOM elements and register functions.

Type: `{object}`

* Example 1 : `{"div#login @click": "onClick"}`
* Example 2 : `{"@click div#login": "onClick"}`
* Example 3 : `{"div#login": {"@click": "onClick"}}`
* Example 4 : `{"@click": {"div#login": "onClick"}}`
* Example 5 : `{"div#login p,element1 @click,dblclick": "prepareClick,onClick"}`
* Example 6 : `{"div#login p": {"@click": ["prepareClick", {"element1 @dblclick": "onClick"}]}}`

The sixth example will do:
1. For matching element `"div#login p"` on `"click"`, do `"prepareClick"` function of component ;
2. For matching element `"div#login p"` and `"element1"` on `"click"` or `"dblclick"`, do `"onClick"` function of component.


#### Method `component.setTemplate({HTMLElement|Function|String} dom, ...arguments)`

#### Method `component.setContainer({HTMLElement|Function|String} dom)`

#### Method `component.clearElement({String} elementName)`

#### Method `component.appendComponent({String} elementName, {Component} sub_component)`

#### Method `component.fillComponent({String} elementName, {Component} sub_component)`


### class Section
Extends: `Component`

#### Method `section.setSection()`
Display this section in its `Page` returned by `section.wrapper`

Parameter: none

Returns: `{Section}` self instance


### class Page
Extends: `Component`

#### Method `page.setSection(section)`
Display section `section` in this instance of `Page`. Do not force displaying this instance in the application body.

Parameter:
* `{Section} section` the section displayed

Returns: `{Page}` self instance

#### Method `page.setPage(section)`
Display this `Page` instance with `section` section.

Parameter:
* `{Section} section` the section displayed

Returns: `{Page}` self instance

## Custom elements
### define
### class CustomHTMLElement

## API
### ajax
### Resource

## Routing
### Router
### Route

## Configuration
### init
### initAll
### Amonite
