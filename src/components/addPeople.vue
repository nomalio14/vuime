<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600px" lazy>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" flat icon color="grey darken-2">
              <v-icon medium>person_add</v-icon>
            </v-btn>
      </template>
      <template>
      <div>
      <v-tabs
      dark
      >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
    <v-tab ripple :key="0">
        Add contact
    </v-tab>
    <v-tab ripple :key="1">
        Approve
    </v-tab>
    <v-tab ripple :key="2">
        All contacts
    </v-tab>
    <v-tab-item
      :key="0"
      >
      <v-card class="contents">
        <v-card-title>
          <span class="headline">Add contact</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12>
                        <v-text-field
                        label="User mail Address"
                        color="teal lighten-3"
                        class="search"
                        single-line
                        outline
                        type="search"
                        @keydown.enter="enterKey()"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                    <div class="text-xs-center">
                      <v-progress-circular
                      v-if="progress"
                      :size="50"
                      color="grey lighten-1"
                      indeterminate
                      class="progress"
                      ></v-progress-circular>
                    </div>
                    <section v-if="show" transition="scale-transition" class="foundSection">
                    <v-flex xs12>
                      <v-avatar size="100">
                        <img :src="foundPeople.avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12>
                      <div class="headline peopleName">{{foundPeople.name}}</div>
                      <div class="grey--text">{{foundPeople.email}}</div>
                    </v-flex>
                    <v-flex xs12>
                    <v-btn class="applyButton" depressed color="teal lighten-3" dark @click="addRequest">add</v-btn>
                    </v-flex>
                    </section>
                    <section v-if="noFound" class="foundSection">
                    <v-flex xs12>
                      <v-avatar>
                        <v-icon x-large>error_outline</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs12>
                      <div class="headline">No data...</div>
                    </v-flex>
                    </section>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item
      :key="1">
      <approveRequest/>
    </v-tab-item>
    <v-tab-item
      :key="2">
      <allContact/>
    </v-tab-item>
    </v-tabs>
      </div>
      </template>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      color="grey darken-3"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
    </v-snackbar>
  </v-layout>
</template>

<script>
import axios from 'axios'
import approveRequest from './approveRequest.vue'
import allContact from './allContact.vue'

export default {
    components: {
    approveRequest,
    allContact
  },
    data() {
      return {
      dialog: false,
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 2000,
      text: 'Sent add request',
      show: false,
      noFound: false,
      foundPeople: {
          name:'',
          avatar:'',
          email:''
      },
      progress: false,
    }
    },
    methods: {
        enterKey() {
            this.show = false
            this.noFound = false
            this.progress = true
            axios
            .get('http://127.0.0.1:4321/findpeople_wait')
            .then(response => (
              this.foundPeople = response.data,
              this.progress = false,
              this.show = true
            ))
            .catch(
                error => (
                console.log(error),
                this.progress = false,
                this.noFound = true
                )
            )
        },
        addRequest() {
          this.snackbar = true
          this.show = false
        }
    },
    mounted() {
       
    }
}
</script>
<style>
.peopleName {
    text-align: center!important;
    margin-top: 30px!important;
}
.applyButton {
    margin-top: 30px!important;
}
.contents {
    min-height: 490px!important;
}
.progress {
}
.foundSection {
}
</style>