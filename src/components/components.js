import mp from "../mp"
import global from "./global"

if (global.components == undefined) {
    global.components = {}
}

class Components {

    static register(component) {
        component.beforeMount = function() {
            if(component.name != 'CalculatorApp'){
                global.components[component.name] = this
                mp.trigger("componentReady", component.name) // eslint-disable-line no-undef
            }
        }
        component.beforeDestroy = function() {
            delete global.components[component.name]
        }
        if (component.methods == undefined) {
            component.methods = {}
        }
        component.methods.trigger = function(eventName, ...eventArgs) {
            mp.trigger( // eslint-disable-line no-undef
                "componentEvent",
                component.name,
                eventName,
                ...eventArgs
            )
        }
        component.methods.triggerServer = function(eventName, ...eventArgs) {
            mp.trigger( // eslint-disable-line no-undef
                "componentTriggerServerEvent",
                component.name,
                eventName,
                ...eventArgs
            )
        }
        return component
    }
}

export default Components
