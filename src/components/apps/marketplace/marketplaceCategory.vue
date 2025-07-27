<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button>
                    <v-ons-back-button class="pointerClass"></v-ons-back-button>
                </v-ons-toolbar-button>
            </div>
            <div class="center">GeBay Kleinanzeigen // {{category.name}}</div>
            <div class="right pointerClass" @click="createOffer(category.id, category.name)" style="margin-right:1rem;">{{category.name}} hinzufuegen</div>
        </v-ons-toolbar>
        <v-ons-row class="fRow">
            <v-ons-col><h3>{{category.name}}</h3></v-ons-col>
        </v-ons-row>
        <v-ons-row class="fRow">
            <v-ons-col width="25%" v-for="offer in offers" :key="offer.id" @click="showOffer(offer)">
                <v-ons-card class="mittig appBox pointerClass">
                    <img v-bind:src="getImageLoader(category.icon_path)" style="width: 45%;">
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
                        </v-ons-list>
                    </div>
                </v-ons-card>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
    import Apps from "../../apps"
    import MarketplaceOffer from "./marketplaceOffer"
    import MarketplaceShowOffer from "./marketplaceShowOffer"

    export default Apps.register({
        name: "MarketplaceCategory",
        data() {
            return {
                category: [],
                offers: []
            }
        },
        methods: {
            responseMarketPlaceOffers(response) {
                this.offers = JSON.parse(response)
            },
            createOffer(catId, catName) {
                this.pageStack.push({ extends: MarketplaceOffer, data() { return { inputCategoryId: catId, inputCategoryName: catName } } })
            },
            showOffer(selectedOffer) {
                this.pageStack.push({ extends: MarketplaceShowOffer, data() { return { selectedOffer: selectedOffer } } })
            },
            formatPrice(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            getImageLoader(image) {
                return require('@/assets/gebay/' + image)
            }
        },
        mounted() {
            this.triggerServer('requestMarketPlaceOffers', this.category.id)
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
    .mittig {
        text-align: center;
    }
</style>