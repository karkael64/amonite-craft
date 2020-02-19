import Component from "../../../../libs/layout/component"
import template from "./template.html"

export default class Input extends Component {
  template (options) {
    return template({
      name: options.name,
      type: options.type || "text",
      defaultValue: options.defaultValue || "",
      placeholder: options.placeholder || ""
    })
  }

  elements () {
    return {
      input: "input",
      removeContent: ".remove-content",
      showPassword: ".show-password",
      errorMessage: ".error-message"
    }
  }

  events () {
    return {
      "input @focus": "hideErrors",
      "input @change": "verifyErrors",
      "input @input": "showIcons",
      "removeContent @click": "removeContent",
      "showPassword @click": "showPassword"
    }
  }

  constructor (name, type, defaultValue, placeholder, errorFunction) {
    if (typeof name !== "string") {
      throw new TypeError("Input name should be a string")
    }

    type = type || "text"

    super({
      name,
      type,
      defaultValue,
      placeholder
    })

    this.originalType = type
    const [$error, $input] = [this.elements.errorMessage[0], this.elements.input[0]]
    Object.assign(this, { $error, $input })

    if (typeof errorFunction === "function") {
      this.errorFunction = errorFunction
    }

    this.showIcons()
  }

  get name () {
    return this.$input.name
  }

  get type () {
    return this.originalType
  }

  get value () {
    return this.$input.value
  }

  set value (value) {
    this.$input.value = value
    this.showIcons()
    return this
  }

  hideErrors () {
    this.$error.classList.add("hidden")
    return this
  }

  verifyErrors () {
    if (this.errorFunction) {
      let err
      try {
        err = this.errorFunction(this.value)
      }
      catch (e) {
        err = e
      }
      if (err) {
        this.$error.classList.remove("hidden")
        if (typeof err === "number") {
          this.$error.textContent = `Error #${err}`
        }
        else if (err.message) {
          this.$error.textContent = err.message
        }
        else {
          this.$error.textContent = "" + err // eslint-disable-line no-implicit-coercion
        }
        return err
      }
      else {
        this.$error.classList.add("hidden")
        return false
      }
    }
  }

  showIcons () {
    this.elements.removeContent[0].classList.remove("show")
    this.elements.showPassword[0].classList.remove("show")

    if ((this.originalType === "text") && (this.value.length)) {
      this.elements.removeContent[0].classList.add("show")
    }
    if (this.originalType === "password") {
      this.elements.showPassword[0].classList.add("show")
    }
    return this
  }

  removeContent () {
    this.value = ""
    this.showIcons()
    return this
  }

  showPassword () {
    if (this.originalType === "password") {
      this.$input.type = this.$input.type === "text" ? "password" : "text"
    }
    return this
  }
}
