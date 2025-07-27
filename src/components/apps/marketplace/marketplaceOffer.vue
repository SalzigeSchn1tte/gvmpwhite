<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button>
                    <v-ons-back-button class="pointerClass"></v-ons-back-button>
                </v-ons-toolbar-button>
            </div>
            <div class="center">GeBay Kleinanzeigen // Angebot hinzufuegen</div>
        </v-ons-toolbar>
        <v-ons-card style="width:60%;margin: 2rem auto;">
            <v-ons-row class="fRow" style="padding-top: 0;">
                <v-ons-col>
                    <h2>Angebot erstellen - Kategorie: {{inputCategoryName}}</h2>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <h3>{{ inputSearch ? 'Suche' : 'Angebot' }}</h3>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <ons-list-item>
                        <label class="left" for="search">
                            Angebot oder Suchanfrage?
                        </label>
                        <div class="right">
                            <v-ons-switch input-id="search" v-model="inputSearch">
                        </v-ons-switch>
                        </div>
                    </ons-list-item>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <h3>Name</h3>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        <v-ons-input style="width: 100%;" placeholder="Produktname" v-model="inputName"></v-ons-input>
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col><h3>Price</h3></v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        <v-ons-input style="width: 100%;" placeholder="Produktpreis" type="number" v-model="inputPrice"></v-ons-input>
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col><h3>Beschreibung</h3></v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow">
                <v-ons-col>
                    <div class="center">
                        <v-ons-input style="width: 100%;" placeholder="Produktbeschreibung" v-model="inputDesc"></v-ons-input>
                    </div>
                </v-ons-col>
            </v-ons-row>
            <v-ons-row class="fRow" style="margin-top:2rem;">
                <v-ons-col>
                    <v-ons-button modifier="large" style="margin: 6px 0" class="pointerClass" @click="createOffer">Angebot erstellen!</v-ons-button>
                </v-ons-col>
            </v-ons-row>
        </v-ons-card>
    </v-ons-page>
</template>

<script>
    import Apps from "../../apps"

    export default Apps.register({
        name: "MarketplaceOffer",
        data() {
            return {
                inputCategoryId: null,
                inputCategoryName: "",
                inputName: "",
                inputPrice: 0,
                inputDesc: "",
                inputSearch: false,
                newMessage: ''
            }
        },
        methods: {
            createOffer() {
                if (this.inputCategoryId == null && this.inputName == "" && this.inputPrice == 0 && this.inputDesc == "") return
                this.inputName = this.checkInput(this.inputName)
                this.inputDesc = this.checkInput(this.inputDesc)
                this.triggerServer("addOffer", this.inputCategoryId, this.inputName, this.inputPrice, this.inputDesc, this.inputSearch)
            },
            checkInput(checkstring){
                this.newMessage = ""
                for (this.charAmount = 0; this.charAmount < checkstring.length; this.charAmount++) { 
                    if([' ','ä','ö','ü','ß','a',"b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9',',','.','-','_','|','§','$','%','&','#',':','*','+','?','!','='].indexOf(checkstring[this.charAmount].toLowerCase()) == -1){
                    this.newMessage += '�'
                    } else {
                    this.newMessage += checkstring[this.charAmount]
                    }                  
                }
                return checkstring;
            }
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