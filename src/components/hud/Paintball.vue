<template>

    <div class="vehicleHud" v-show="activeScore" style="color:white;     text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;
">
        <span><i class="fa fa-crosshairs" style="font-size:30px"></i>  {{kills}}</span>
        <span style="margin-left:15px"><i class="fas fa-skull" style="font-size:25px"></i>  {{deaths}}</span>
        <span style="margin-left:15px"><i class="fas fa-bomb" style="font-size:30px"></i>  {{ks}}</span>
    </div>
</template>

<script>
    import Components from '../components'

    export default Components.register({
        name: "Paintball",
        data() {
            return {
                activeScore: false,
                kills: 0,
                deaths: 0,
                ks:0
            }
        },
        methods: {
            finishPaintball() {
                this.activeScore = false
            },
            initializePaintball() {
                this.activeScore = true;
                this.ks = 0;
                this.deaths = 0;
                this.kills = 0;
                
            },
            updatePaintballScore(kills, deaths, ks) {
                this.ks = ks;
                this.deaths = deaths;
                this.kills = kills;
            }
        },
        mounted() {
        }
    })
</script>

<style lang="scss" id="keyframes" scoped>

</style>