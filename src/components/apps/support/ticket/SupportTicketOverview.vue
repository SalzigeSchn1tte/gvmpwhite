<template>
   <v-ons-page>
      <v-ons-toolbar>
         <div class="left">
            <v-ons-toolbar-button>
               <v-ons-back-button></v-ons-back-button>
            </v-ons-toolbar-button>
         </div>
         <div class="center">Ticket Übersicht</div>
      </v-ons-toolbar>

      <v-ons-list>
         <v-ons-list-header>Ticket Übersicht</v-ons-list-header>

         <v-ons-list-item modifier="longdivider">
            <div class="center">
                <span class="list-list-item__subtitle size">Ticket Ersteller ID: {{ ticket.id }}</span>
            </div>
         </v-ons-list-item>

         <v-ons-list-item modifier="longdivider">
            <div class="center">
                <span class="list-list-item__subtitle size">Ticket Ersteller Name: {{ ticket.creator }}</span>
            </div>
         </v-ons-list-item>

         <v-ons-list-item modifier="longdivider">
            <div class="center">
                <span class="list-list-item__subtitle size">Ticket Beschreibung: {{ ticket.text }}</span>
            </div>
         </v-ons-list-item>

         <v-ons-list-item modifier="longdivider">
            <div class="center">
                <span class="list-list-item__subtitle size">Ticket erstellt am: {{ formatDateTimeString(ticket.created_at) }}</span>
            </div>
         </v-ons-list-item>

         <v-ons-list-item modifier="longdivider">
            <v-ons-button class="pointer" style="width: 30%; margin-right: 4%;" modifier="large" @click="requestTeleport">Teleportieren</v-ons-button>
            <v-ons-button class="pointer color-background green" style="width: 30%; margin-right: 4%;" modifier="large" @click="revivePlayer">Revive</v-ons-button>
            <v-ons-button class="pointer color-background red" style="width: 30%;" modifier="large" @click="closeTicket">Schliessen</v-ons-button>
         </v-ons-list-item>

         <v-ons-list-item modifier="longdivider">
            <v-ons-button class="pointer color-background purple" style="width: 30%;" modifier="large" @click="respawnPlayer">Respawn</v-ons-button>
            <v-ons-button class="pointer color-background red" style="width: 30%;" modifier="large" @click="banPlayer">Bannen</v-ons-button>
         </v-ons-list-item>

      </v-ons-list>
   </v-ons-page>
</template>

<script>
   import Apps from "../../../apps"
   import SupportKonversation from "./SupportKonversation"

   export default Apps.register({
      name: "SupportTicketOverview",
      data() {
         return {
            ticket: []
         }
      },
      methods: {
         requestTeleport() {
            this.triggerServer("supportTeleportToPlayer", this.ticket.creator)
         },
         closeTicket() {
            this.triggerServer("closeTicket", this.ticket.creator)
            this.pageStack.pop()
            this.pageStack.pop()
         },
         revivePlayer() {
            this.triggerServer("revivePlayer", this.ticket.creator)
         },
         respawnPlayer() {
            this.triggerServer("respawnPlayer", this.ticket.creator)
         },
         banPlayer() {
            this.triggerServer("banPlayer", this.ticket.creator)
         },
         formatDateTimeString(dateTime) {
            return new Date(dateTime).toLocaleString()
         }
      },
      props: ['pageStack']
   })
</script>

<style>
   .pointer {
      cursor: pointer !important;
   }

   .size {
      font-size: 15px;
   }

   .pointer {
      cursor: pointer;
   }
</style>