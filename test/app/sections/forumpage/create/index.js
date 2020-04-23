import Amonite from "../../../../../module"
import Action from "../../../components/action"
import Popin from "../../../components/popin"
import translate from "../../../modules/translate"
import template from "./template.html"
import PopinView from "./validation-popin"

export default class ForumCreate extends Amonite.Component {
  template () {
    return template()
  }

  elements () {
    return {
      create: ".button-create"
    }
  }

  constructor () {
    super()
    this.fillComponent("create", new Action("Créer", this.onCreate.bind(this)))
  }

  onCreate (ev, btn) {
    Popin.getInstance().setPopin(new PopinView).setTitle(translate("page:forum:create:popin:title"))
    btn.rearm()
  }
}
