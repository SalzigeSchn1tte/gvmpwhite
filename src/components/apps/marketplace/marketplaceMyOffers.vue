<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button>
                    <v-ons-back-button class="pointerClass"></v-ons-back-button>
                </v-ons-toolbar-button>
            </div>
            <div class="center">GeBay Kleinanzeigen // Meine Angebote</div>
        </v-ons-toolbar>
        <v-ons-card style="margin: 2rem auto;">
            <v-ons-row class="fRow">
                <v-ons-col width="25%" v-for="offer in offers" :key="offer.id">
                    <v-ons-card class="mittig appBox pointerClass">
                        <div class="title">
                            <h3>
                                {{offer.name}}
                                <br>
                                <small>{{ offer.search ? 'Suche' : 'Angebot' }}</small>
                            </h3>
                        </div>
                        <div class="content">
                            <v-ons-list>
                                <v-ons-list-item class="small">Tel: {{offer.phone}}</v-ons-list-item>
                                <v-ons-list-item class="small">Preis: {{formatPrice(offer.price)}}</v-ons-list-item>
                                <v-ons-list-item class="small">{{offer.description}}</v-ons-list-item>
                                <v-ons-list-item class="small pointerClass" style="color:red;" @click="deleteOffer(offer)">Angebot loeschen</v-ons-list-item>
                            </v-ons-list>
                        </div>
                    </v-ons-card>
                </v-ons-col>
            </v-ons-row>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import Apps from "../../apps"

    export default Apps.register({
        name: "MarketplaceMyOffers",
        data() {
            return {
                offers: []
            }
        },
        methods: {
            responseMyOffers(offers) {
                this.offers = JSON.parse(offers)
            },
            deleteOffer(offer) {
                this.triggerServer("deleteOffer", offer.id)
            },
            formatPrice(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
        },
        mounted() {
            this.triggerServer('requestMyOffers')
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
    .pointerClass {
        cursor: pointer;
    }
</style>