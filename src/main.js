import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import App from './App.vue'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'


let options = {
    elem: document.documentElement,
    src : '//cdnjs.cloudflare.com/ajax/libs/flexibility/2.0.1/flexibility.js',
}

let flexPolyfill = require('flex-polyfill')
flexPolyfill(options)

VueOnsen.platform.select('android')

Vue.config.productionTip = false

Vue.use(VueOnsen)

new Vue({
    render: h => h(App),
    beforeCreate () {
        // Shortcut for Material Design
        Vue.prototype.md = this.$ons.platform.isAndroid()
    },
}).$mount('#app')
