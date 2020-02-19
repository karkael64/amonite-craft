import EventTarget from "./libs/layout/event-target";
import Component from "./libs/layout/component";
import Section from "./libs/layout/section";
import Page from "./libs/layout/page";
import { define, CustomHTMLElement } from "./libs/layout/define";

import ajax from "./libs/request/ajax";
import Resource from "./libs/request/resource";

import Router from "./libs/router/router";
import Route from "./libs/router/route";

function init (then) {
  if (typeof then === "function") {
    if (document.readyState === "complete") {
      then();
    } else {
      window.addEventListener("load", then);
    }
  }
}

function initAll (then) {
  init(() => {
    Page.setContainer();
    Router.listenPopstate();
    if (typeof then === "function") {
      then();
    }
  })
}

const Amonite = {
  Component,
  Section,
  Page,
  define,
  CustomHTMLElement,

  ajax,
  Resource,

  Router,
  Route,

  init,
  initAll
};

export {
  EventTarget,
  Component,
  Section,
  Page,
  define,
  CustomHTMLElement,

  ajax,
  Resource,

  Router,
  Route,

  init,
  initAll,

  Amonite as default
};
