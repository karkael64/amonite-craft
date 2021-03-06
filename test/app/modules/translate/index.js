import FR from "../../../i18n/fr.po"
import EN from "../../../i18n/en.po"
const FILES = {
  "en": EN,
  "fr": FR
}
const LANGUAGES = Object.keys(FILES)


/**
 * @function <translate> search field in json files and if it matches execute
 *    it with other arguments in parameters.
 * @param {String} field
 * @param {Object} options sent in string template
 * @return {String}
 */

function translate (field, options) {
  const text = FILES[translate.language][field] || ""
  const fn = eval("(function (options) { return `" + text + "` })")
  if (typeof options !== "object") {
    options = {}
  }
  return fn(options)
}

function userLanguage (language) {
  if (LANGUAGES.indexOf(language) !== -1) {
    translate.language = language
    to.language = language
  }
  return translate
}

function to (language) {
  if (LANGUAGES.indexOf(language) !== -1) {
    to.language = translate.language
    translate.language = language
  }
  return translate
}

function resolve () {
  const switcher = to.language
  to.language = translate.language
  translate.language = switcher
  return translate
}

translate.userLanguage = userLanguage
translate.to = to
translate.resolve = resolve

userLanguage(LANGUAGES[0])
userLanguage((navigator.language || navigator.userLanguage || "").substr(0, 2).toLowerCase())

export { translate as default, translate, userLanguage, to, resolve }
