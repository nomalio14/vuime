<template>
<v-layout>
    <v-flex xs12>
      <v-card>
        <addTaskOnPeople />
      <v-subheader class="subHeader">
        <span>All Tasks</span>
      <v-spacer></v-spacer>
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="grey darken-3" dark v-on="on" flat icon small>
          <v-icon>filter_list</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in sort"
          :key="index"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
      </v-menu>

      </v-subheader>
        <v-expansion-panel popout>
    <v-expansion-panel-content
      v-for="(item) in tasks"
      :key="item.title"
    >
      <template v-slot:header>
        <v-list two-line subheader>
          <v-list-tile
              ripple
              avatar
              @click=""
              >
          <v-list-tile-avatar>
            <v-btn icon @click.native.stop="">
                <v-icon medium color="grey lighten-1">
                  check_circle_outline
                </v-icon>
                </v-btn>
              </v-list-tile-avatar>
              <v-flex xs7 sm10>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.descrtiption }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-flex>
              <v-flex xs5 sm2>
              <div class="listRightItems">
              <v-list-tile-avatar size="30px">
              <img :src="item.asignedAvatar">
              </v-list-tile-avatar>
              <v-list-tile-action-text class="due">{{ item.due }}</v-list-tile-action-text>
              </div>
              </v-flex>
          </v-list-tile>
        </v-list>
      </template>
      <!--TaskDetail-->
      <v-divider></v-divider>
      <v-container fluid grid-list-md class="detailContainer">
        <v-layout row wrap>
        <v-flex d-flex xs12 sm12 md12>
        <v-card flat>
        <v-subheader>
        <span>Created by</span>
        <v-list-tile-avatar class="createdAvatar" size="25px">
          <img :src="item.createdAvatar">
        </v-list-tile-avatar>
        <span class="detailHeadName">{{ item.createrName }}</span>
        <span class="createdAvatar createdTimeAt">at</span>
        <span class="detailHeadName">{{ item.createdAt }}</span>
        </v-subheader>
        </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md3>
        <v-card flat>
      <section>
      <v-layout row wrap>
      <v-flex xs5 sm12 md12 class="detailLeftItems">
      <v-menu
        :v-model="item.startDateMenu"
        :close-on-content-click="true"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date3"
            class="calendarOnDetail"
            label="Start date"
            readonly
            v-on="on"
            prepend-icon="event"
            color="teal lighten-3"
          ></v-text-field>
        </template>
        <v-date-picker color="teal lighten-3" no-title v-model="date3"></v-date-picker>
      </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs5 sm12 md12 class="detailLeftItems">
      <v-menu class="endDate"
        :v-model="item.endDateMenu"
        :close-on-content-click="true"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date4"
            class="calendarOnDetail"
            label="Due date"
            readonly
            v-on="on"
            prepend-icon="event"
            color="teal lighten-3"
          ></v-text-field>
        </template>
        <v-date-picker class="date4" color="teal lighten-3" no-title v-model="date4"></v-date-picker>
      </v-menu>
      </v-flex>
      </v-layout>
      </section>
      <v-combobox
            v-model="chips"
            prepend-icon="people"
            :items="items"
            label="Assigned to"
            chips
            :rules="rules.name"
            color="teal lighten-3"
            multiple
            class="detailLeftItems"
        >
        <template v-slot:selection="data">
        <v-chip
            :selected="data.selected"
            close
            @input="remove(data.item)"
        >
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
  <v-text-field
            class="shareUrl detailLeftItems"
            value="http://...."
            label="Share"
            prepend-icon="share"
            box
            color="teal lighten-3"
            readonly
          ></v-text-field>
        <v-layout row wrap>
        <v-flex xs6 text-xs-center>
        <v-btn flat class="DetailButtons">Delete</v-btn>
        </v-flex>
        <v-flex xs6 text-xs-center>
        <v-btn depressed dark class="DetailButtons" color="teal lighten-3">Complete</v-btn>
        </v-flex>
        </v-layout>
        </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm9 md9>
        <v-card class="note">
        <v-subheader>
        <v-icon>speaker_notes
        </v-icon>
        <span>Note</span>
        </v-subheader>
        <div class="noteContents"></div>
        <b-field class="commentInput">
            <b-input placeholder="Comment..."
                type="text"
                expanded>
            </b-input>
            <p class="control">
                <button class="button sendButton is-success">Send</button>
            </p>
        </b-field>
        </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-card>
    </v-flex>
  </v-layout>
  </template>

  <style>
  .detailLeftItems{
    max-width: 90%!important;
  }
  .shareUrl{
    font-size:13px!important;
  }
  .calendarOnDetail{
    font-size: 13px!important;
  }

  .noteContents{
    height: 300px;
  }
  .sendButton{
    background-color: #80CBC4!important;
    color:white!important;
  }
  .note{
    position: relative!important;
  }
  .commentInput{
    width: 100%;
    padding:0 16px;
    position: absolute!important;
	  bottom: 0!important;
  }
  .DetailButtons{
    text-transform: none!important;
  }
  .detailHeadName{
    color: #212121!important;
  }

  .detailContainer{
    padding: 0 24px!important;
    padding-bottom: 10px!important;
  }
  .createdAvatar{
    min-width: 40px!important;
    padding: 0px 7px!important;
  }
  .createdTimeAt{
    text-align: center;
  }
  
  .taskDetailHead{
    background-color: #B2DFDB;
    width: 100%;
    color: white;
  }

  .taskDetail {
    position: relative;
    margin:auto;
    max-width: 82%;
  }
  .listRightItems {
    float: right!important;
  }
  .v-list {
    padding:0!important;
  }
  .subHeader{
    height: 30px!important;
  }

  .v-expansion-panel__header{
  display: initial!important;
  display: -webkit-box!important;
  display: -ms-flexbox!important;
  padding: 0px 15px!important;
}
.due{
  text-align: center!important;
}
hr {
  margin: 0!important;
}

@media screen and (max-width:1090px) {
  .detailLeftItems{
    max-width: 100%!important;
  }
  }
  </style>
  <script>
import addTaskOnPeople from './addTaskOnPeople.vue'
export default {
    components: {
    addTaskOnPeople,
  },
    data: () => ({
      date3: new Date().toISOString().substr(0, 10),
      date4: new Date().toISOString().substr(0, 10),
      menu3: false,
      menu4: false,
      sort: [{ title: 'Newest' },{ title: 'Due' }],
      chips: ['Mtsui Akira'],
      items: ['Noma Yuma','Mtsui Akira' ],
      rules: {
            name: [val => (val || '').length > 0 || 'This field is required']
        },
      tasks: [
          {
            startDateMenu:'st1',
            endDateMenu:'en1',
            due: 'Feb 12th',
            createdAt:'Feb 3th',
            descrtiption: 'Use Vue.js',
            asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            assignee:'',
            createrName: 'Noma Yuma',
            createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            title: 'Build people page',
            subtitle: "Could you check this UI compornemt?"
          },
          {
            startDateMenu:'st2',
            endDateMenu:'en2',
            due: 'Mar 22th',
            createdAt:'Feb 5th',
            title: 'Solve select feature',
            asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            assignee:'',
            createrName: 'Noma Yuma',
            createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            subtitle: "Did you push to github?"
          },
          {
            startDateMenu:'st3',
            endDateMenu:'en3',
            due: 'Mar 23th',
            createdAt:'Feb 10th',
            descrtiption: 'Add upload feature',
            asignedAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            assignee:'',
            createrName: 'Matsui Akira',
            createdAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            title: 'Avatar feature',
          },
          {
            startDateMenu:'st4',
            endDateMenu:'en4',
            due: 'Mar 30th',
            createdAt:'Feb 21th',
            descrtiption: 'This is CV',
            title: '【Primaly】Feedback of Interview',
            asignedAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            assignee:'',
            createrName: 'Matsui Akira',
            createdAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            subtitle: 'Could you update due?'
          },
          {
            startDateMenu:'st5',
            endDateMenu:'en5',
            due: 'Apr 1st',
            createdAt:'Feb 25th',
            descrtiption: 'staff schedule is here',
            asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            assignee:'',
            createrName: 'Noma Yuma',
            createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            title: 'TB scheduling'
          }
        ]
        
    }),
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
  </script>