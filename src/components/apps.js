import Components from "./components"

class Apps extends Components {
    static register(component) {
        component = Components.register(component)
        component.methods.close = function() {
            this.$parent.app = null
        }
        component.methods.open = function(appName) {
            this.$parent.app = appName
        }
        component.methods.back = function() {
            this.$parent.app = "HomeApp"
        }
        return component
    }
}

export default Apps
