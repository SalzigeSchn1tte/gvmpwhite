<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button>
                    <v-ons-back-button></v-ons-back-button>
                </v-ons-toolbar-button>
            </div>
            <div class="center">Einstellungen</div>
        </v-ons-toolbar>
        <ons-list>
            <ons-list-item>
                <label class="center" for="flugmodusStatus">
                    Flugmodus
                </label>
                <div class="right">
                    <v-ons-switch input-id="flugmodusStatus" v-model="flugmodusStatus"></v-ons-switch>
                </div>
            </ons-list-item>
            <ons-list-item>
                <label class="center" for="lautlosStatus">
                    Stummschalten
                </label>
                <div class="right">
                    <v-ons-switch input-id="lautlosStatus" v-model="lautlosStatus"></v-ons-switch>
                </div>
            </ons-list-item>
            <ons-list-item>
                <label class="center" for="anrufeAblehnen">
                    Anrufe ablehnen
                </label>
                <div class="right">
                    <v-ons-switch input-id="anrufeAblehnen" v-model="anrufAblehnen"></v-ons-switch>
                </div>
            </ons-list-item>
            <v-ons-list-item modifier="chevron" tappable @click="editRingtones">Klingeltöne</v-ons-list-item>
            <v-ons-list-item modifier="chevron" tappable @click="editWallpaper">Hintergrundbild</v-ons-list-item>
            <v-ons-fab modifier="mini" position='bottom right' v-on:click="saveSettings">
                <ons-icon icon="fa-floppy-o"></ons-icon>
            </v-ons-fab>
        </ons-list>
    </v-ons-page>
</template>

<script>
    import Apps from "../../apps"
    import SettingsEditRingtonesApp from "./SettingsEditRingtonesApp"
    import SettingsEditWallpaperApp from "./SettingsEditWallpaperApp"

    export default Apps.register({
        name: "SettingsApp",
        data() {
            return {
                flugmodusStatus: false,
                lautlosStatus: false,
                flugmodusStatus2: false,
                lautlosStatus2: false,
                anrufAblehnen: false,
                anrufAblehnen2: false,
            }
        },
        methods: {
            responsePhoneSettings(flugmodus, lautlosStatus, anrufAblehnen) {
                if (flugmodus == "true") {
                    this.flugmodusStatus = true
                    this.flugmodusStatus2 = true
                } else {
                    this.flugmodusStatus = false
                    this.flugmodusStatus2 = false
                }
                if (lautlosStatus == "true") {
                    this.lautlosStatus = true
                    this.lautlosStatus2 = true
                } else {
                    this.lautlosStatus = false
                    this.lautlosStatus2 = false
                }
                if (anrufAblehnen == "true") {
                    this.anrufAblehnen = true
                    this.anrufAblehnen2 = true
                } else {
                    this.anrufAblehnen = false
                    this.anrufAblehnen2 = false
                }
            },
            editRingtones() {
                this.pageStack.push({ extends: SettingsEditRingtonesApp })
            },
            editWallpaper() {
                this.pageStack.push({ extends: SettingsEditWallpaperApp })
            },
            saveSettings() {
                if(this.lautlosStatus != this.lautlosStatus2){
                    this.trigger("lautlosStatus",JSON.stringify({ status: this.lautlosStatus}))
                }
                if (this.flugmodusStatus != this.flugmodusStatus2) {
                    this.trigger("flyStatus",JSON.stringify({ status: this.flugmodusStatus}))
                }
                if(this.anrufAblehnen != this.anrufAblehnen2){
                    this.trigger("anrufAblehnen",JSON.stringify({ status: this.anrufAblehnen}))
                }
                this.triggerServer("savePhoneSettings", this.flugmodusStatus, this.lautlosStatus, this.anrufAblehnen)
                this.pageStack.pop()
                this.triggerServer("requestApps")
            }
        },
        mounted() {
            this.triggerServer("requestPhoneSettings")
        },
        props: ['pageStack']
    })
</script>

<style lang="scss" scoped>
    section {
        margin: 20px;
    }
</style>