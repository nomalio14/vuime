<template>
<v-card class="contents">
        <v-card-title>
          <span class="headline">Request list</span>
        </v-card-title>
        <v-list>
          <template v-for="(item, index) in approveRequest">
          <v-list-tile
            :key="item.id"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-flex xs4 sm7>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.name"></v-list-tile-title>
            </v-list-tile-content>
            </v-flex>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-btn class="buttons" @click="confirmRequest(item.userId)" depressed dark small color="teal lighten-3">Confirm</v-btn>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn class="buttons" @click="removeRequest(item.userId)" depressed small>Delete</v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider
          v-if="index < approveRequest.length"
          :key="index"
          ></v-divider>
          </template>
        </v-list>
      </v-card>
    </template>

<script>
import { mapState } from 'vuex';

  export default {
    data () {
      return {

      }
    },
    methods: {
        removeRequest(id) {
            const idArray = this.approveRequest.map(elm => elm.userId)
            const deleteIndex = idArray.indexOf(id)
            this.approveRequest.splice(deleteIndex, 1)
            this.$store.commit('updateApproveRequest', this.approveRequest);
        },
        confirmRequest(id) {
            const idArray = this.approveRequest.map(elm => elm.userId)
            const deleteIndex = idArray.indexOf(id)
            this.approveRequest.splice(deleteIndex, 1)
            this.$store.commit('updateApproveRequest', this.approveRequest);
        },

    },
    mounted () {
    this.$store.dispatch('loadApproveRequest')
    },
    computed: {
    ...mapState({
    approveRequest: state => state.approveRequest,
    }),
    }
  }
</script>

<style>
.contents {
    min-height: 490px!important;
    max-height: 490px!important;
}

.buttons {
    text-transform: none !important;
}

</style>