import Amonite from "../../../module"
import Route from "../../../libs/router/route"

Amonite.define('a', function (node) {
  node.addEventListener('click', (ev) => {
    if (node.hasAttribute('push')) {
      ev.preventDefault();

      const to = node.getAttribute('push')
      if (to.length) {
        Route.setBrowserRequest(to);
      } else {
        Route.setBrowserRequest(node.getAttribute('href'))
      }
    }
  })
})
