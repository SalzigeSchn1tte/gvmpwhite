<template>

<div class="playerInfo" style="text-align: right">
    <span style="margin-right: 10px"> {{timestamp}} {{playerId}} | TS-Nr: 569</span>
        
    </div>
   
</template>

<script>
    import Components from '../components'

    export default Components.register({
        name: "PlayerInfo",
                       data() {
            return {
                    timestamp: "",
                        playerId: 197224,
                        voiceHash: "0",
                        time: ""
            }
        },
                                    created: function() {
                    setInterval(this.getNow, 1e3), setInterval(this.changeclock, 1e3)
                },
                methods: {

                    getNow: function() {
                        var A = new Date,
                            B = A.getDate() + "." + (A.getMonth() + 1) + "." + A.getFullYear(),
                            g = this.time,
                            V = B + " " + g;
                        this.timestamp = V
                    },
                    changeclock: function() {
                        this.time = new Date, this.time.setHours(this.time.getHours()), this.time.getHours() < 10 && parseInt(this.time.getMinutes()) > 9 ? this.time = "0" + this.time.getHours() + ":" + this.time.getMinutes() : this.time.getHours() > 9 && this.time.getMinutes() < 10 ? this.time = this.time.getHours() + ":0" + this.time.getMinutes() : this.time.getHours() < 10 && this.time.getMinutes() < 10 ? this.time = "0" + this.time.getHours() + ":0" + this.time.getMinutes() : this.time = this.time.getHours() + ":" + this.time.getMinutes()
                    },
                    setPlayerId: function(A) {
                        this.playerId = A
                    },
                    setVoiceHash: function(A) {
                        this.voiceHash = A
                    }
                }
    })
</script>

<style lang="scss" scoped>
   .playerInfo{
	margin-right: 1vh;
	color: #000;
	font-size: 15px;
	text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
	opacity: .8
}
</style>
