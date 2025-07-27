<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button>
                    <v-ons-back-button class="pointerClass"></v-ons-back-button>
                </v-ons-toolbar-button>
            </div>
            <div class="center">GeBay Kleinanzeigen // Angebot</div>
        </v-ons-toolbar>
        <v-ons-card style="width:60%;margin: 2rem auto;">
            <v-ons-row class="fRow">
                <v-ons-col>
                   <h3>{{ selectedOffer.search ? 'Suche' : 'Angebot' }}</h3>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col><h3>Name</h3></v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        {{selectedOffer.name}}
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col><h3>Telefon</h3></v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        {{selectedOffer.phone}}
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col><h3>Preis</h3></v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        {{formatPrice(selectedOffer.price)}}
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col><h3>Beschreibung</h3></v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        {{selectedOffer.description}}
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow" style="margin-top:2rem;">
                <v-ons-col>
                    <v-ons-button modifier="small" class="pointerClass" @click="callUser">Anbieter anrufen</v-ons-button>
                    <v-ons-button modifier="small" style="margin: 0 1rem" class="pointerClass" @click="messageUser(selectedOffer.phone)">Anbieter SMS schreiben</v-ons-button>
                </v-ons-col>
            </v-ons-row>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import Apps from "../../apps"
    import MessengerMessageApp from "../messenger/MessengerMessageApp"

    export default Apps.register({
        name: "MarketplaceShowOffer",
        data() {
            return {
                selectedOffer: []
            }
        },
        methods: {
            formatPrice(x) {
                if (this.selectedOffer.length == 0 || this.selectedOffer.price == null) return
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            callUser() {
                if (this.selectedOffer.phone == null) return
                this.triggerServer("callUserPhone", this.selectedOffer.phone)
            },
            messageUser(number) {
                if (this.selectedOffer.phone == null) return
                this.pageStack.push({ extends: MessengerMessageApp, data() { return { receiver: number } } })
            }
        },
        mounted() {
            
        },
        props: ['pageStack']
    })
</script>

<style lang="scss" scoped>
    section {
        margin: 20px;
    }
    .fRow {
        padding: 1rem 0 0 1rem;
    }
</style>