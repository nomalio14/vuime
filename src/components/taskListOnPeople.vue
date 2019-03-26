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
        <v-expansion-panel>
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
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-flex>
              <v-flex xs5 sm2>
              <div class="listRightItems">
              <v-list-tile-avatar size="30px">
              <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-action-text class="due">{{ item.due }}</v-list-tile-action-text>
              </div>
              </v-flex>
          </v-list-tile>
        </v-list>
      </template>
      <v-card class="taskDetail">
        <v-flex xs8 sm8>
        <v-textarea
          color="teal lighten-3"
          outline
          label="Comment"
        ></v-textarea>
        </v-flex>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-card>
    </v-flex>
  </v-layout>
  </template>

  <style>
  .taskDetail {
    position: relative;
    margin:auto;
    max-width: 87%;
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
  </style>
  <script>
import addTaskOnPeople from './addTaskOnPeople.vue'
export default {
    components: {
    addTaskOnPeople,
  },
    data: () => ({
      sort: [{ title: 'Newest' },{ title: 'Due' }],
      tasks: [
          {
            due: 'Feb 12th',
            headline: 'Use Vue.js',
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            title: 'Build people page',
            subtitle: "Could you check this UI compornemt?"
          },
          {
            due: 'Mar 22th',
            title: 'Solve select feature',
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            subtitle: "Did you push to github?"
          },
          {
            due: 'Mar 23th',
            headline: 'Add upload feature',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            title: 'Avatar feature',
          },
          {
            due: 'Mar 30th',
            headline: 'This is CV',
            title: '【Primaly】Feedback of Interview',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            subtitle: 'Could you update due?'
          },
          {
            due: 'Apr 1st',
            headline: 'Staf schedule is here',
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            title: 'TB scheduling'
          }
        ]
        
    }),
    methods: {
      
    }
  }
  </script>