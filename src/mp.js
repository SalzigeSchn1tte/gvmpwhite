class MP {
    /*static trigger(eventName, ...args) {
    // eslint-disable-line no-unused-vars
    try {
      mp.trigger(eventName, args) // eslint-disable-line no-undef
    } catch (e) {
      console.log(`mp.trigger(${eventName}, ${args})`)
    }
  }*/
    static trigger = MP.getTrigger()

    static getTrigger() {
        try {
            return mp.trigger // eslint-disable-line no-undef
        } catch (e) {
            console.log("enabled-dummy-trigger")
        }
        return MP.triggerDummy
    }

    static triggerDummy(eventName, ...args) {
        console.log(`mp.trigger(${eventName}, ${args})`)
    }
}

export default MP
