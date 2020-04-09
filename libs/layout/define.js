function getCustomChildren (node) {
  return [...node.querySelectorAll(Object.keys(DEFINES).join(",").toUpperCase())]
}

function test (node) {
  const Def = DEFINES[node.nodeName.toUpperCase()]
  if (DEFINED.indexOf(node) !== -1) {
    return
  }
  else if (Def) {
    new Def(node) // eslint-disable-line no-new
    const children = getCustomChildren(node)
    if (children.length) {
      children.forEach((child) => {
        child.addEventListener("load", () => {
          if (!children.filter((_child) => { return DEFINED.indexOf(_child) === -1 }).length) {
            DEFINED.push(node)
            node.dispatchEvent(new Event("load"))
          }
        })
      })
    }
    else {
      DEFINED.push(node)
      node.dispatchEvent(new Event("load"))
    }
  }

  if (node.childNodes.length) {
    node.childNodes.forEach(test)
  }
}

function onload () {
  const mo = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach(test)
    })
  })

  const cnf = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }

  mo.observe(document.querySelector("html"), cnf)
}

try {
  window.addEventListener("load", onload)
  if (window.document.readyState === "complete") {
    onload()
  }  
} catch (e) {}

const DEFINES = {}
const DEFINED = []

/**
 * @function <define> run a function ${builder} each ${nodeName} first insertion
 *    in current HTML Document.
 * @param {String} nodeName is the nodeName of your HTMLElement, please use correct spelling
 * @param {Function} builder is the function run when an HTMLElement that match
 *    nodeName is inserted in current HTML Document/
 */

function define (nodeName, builder) {
  if (typeof nodeName !== "string")
    throw new Error("First parameter should be a string (to select items by node name in dom tree)")
  if (typeof builder !== "function")
    throw new Error("Second parameter should be a class or a function (to construct item)")
  DEFINES[nodeName.toUpperCase()] = builder;
  [...document.querySelectorAll(nodeName.toUpperCase())].forEach(test)
}


/**
 * @class <CustomHTMLElement> is an abstract class for helping dev
 */

class CustomHTMLElement {
}

export { define as default, define, CustomHTMLElement }
