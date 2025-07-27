import Components from "./components"
import mp from "../mp"

class Windows extends Components {
  static register(component) {
    component = Components.register(component)
    component.methods.dismiss = function() {
      this.$parent.show(null)
      mp.trigger("onWindowClosed", component.name)
    }
    return component
  }
}

export default Windows
