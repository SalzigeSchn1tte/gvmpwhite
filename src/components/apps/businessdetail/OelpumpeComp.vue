<template id="Oelpumpe">
    <div style="width:100%">
        <div class="shadow_businessdetail">
                <v-ons-row class="fRow_businessdetail">
                    <v-ons-col><h3>Ölpumpe</h3></v-ons-col>
                </v-ons-row>
                <v-ons-row class="fRow_businessdetail">
                    <v-ons-col>
                        Füllstand
                        <div class="pb_wrap">
                            <div class="pb_progress" :style="progress(data.amount)">{{ data.amount }}L</div>
                        </div>
                    </v-ons-col>
                </v-ons-row>
                <v-ons-row class="fRow_businessdetail">
                    Ereignisanzeige (Zeitverzögert)
                </v-ons-row>
                <v-ons-list>
                    <v-ons-list-item v-for="(r,i) in data.Log" :key="i">
                        {{r.name}} - {{r.amount}}L - {{getDate(r.date)}}
                    </v-ons-list-item>
                </v-ons-list>
            </div>
        </div>
</template>

<script>

  export default {
        template: "#Oelpumpe",
        data() {
            return {
            }
        },
        methods: {
            getDate(date) {
                var t = new Date(date);
                var hr = ("0" + t.getHours()).slice(-2);
                var min = ("0" + t.getMinutes()).slice(-2);
                var sec = ("0" + t.getSeconds()).slice(-2);
                return ("0" + t.getDate()).slice(-2) + "." + ("0" + (t.getMonth() + 1)).slice(-2) + "." + t.getFullYear() + "  " + hr + ":" + min + ":" + sec + " Uhr";
            },
            progress(amount) {
                var maxliter = 3000;
                var perc = Math.ceil((100 / maxliter) * amount);
                if (perc < 35) {
                    return "background-color:black;width:" + perc + "%";
                }
                if (perc >= 35 && perc < 50) {
                    return "color:black;background-color:yellow;width:" + perc + "%";
                }
                if (perc >= 50) {
                    return "color:white;background-color:green;width:" + perc + "%";
                }
            }
        },
        mounted() {

        },
        props: ['data', 'secdata']
  };
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

    .pointerClass {
        cursor: pointer;
    }
    .pb_wrap {
        background-color: lightgray;
        border: 1px solid black;
        width: 100%;
    }

    .pb_progress {
        text-align: center;
        color: white;
    }
  
</style>