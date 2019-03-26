<template>
<span class="column is-main-content">
    <div
    class="hide-overflow"
    style="position: relative;"
  >
    <v-toolbar
      floating
      color="teal lighten-3"
      dark
      class="contentToolbar"
    >
      <v-avatar class="headerAvatar">
        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
      </v-avatar>
      <v-toolbar-title>Mtsui Akira</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="rightItemOfcontentToolbar">
      <v-btn icon>
        <v-icon>perm_identity</v-icon>
        <P>1</p>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      </div>
    </v-toolbar>
    <div
      class="scroll-y"
      style="max-height: 800px;"
    >
    <v-container style="height: 1000px;">
  
    <div class="contentControl">
    <div class="field is-grouped">
        <v-btn-toggle class="filterItemToggle"  v-model="toggle_exclusive">
        <v-btn class="filterItem" color="grey lighten-2" depressed>
        <v-icon>format_list_bulleted</v-icon>Lists</v-btn>
        <v-btn class="filterItem" color="grey lighten-2" depressed>
        <v-icon>format_align_left</v-icon>Gantt</v-btn>
        <v-btn class="filterItem" color="grey lighten-2" depressed>
        <v-icon>trending_down</v-icon>Graf</v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
    <v-flex xs3 sm2 d-flex>
        <v-select color="teal lighten-3" :items="items" label="Assigned" class="rightFilter" v-model="e1" ></v-select>
      </v-flex>
  </div>
    </div>
    <v-layout>
    <v-flex xs12>
      <v-card>
        <addTaskOnPeople />
      <v-subheader>All Tasks</v-subheader>
        <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item, index) in tasks"
      :key="item.title"
    >
      <template v-slot:header>
        <v-list two-line subheader>
          <v-list-tile
              ripple
              avatar
              @click="toggle(index)"
              >
          <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-flex xs7 sm10>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-flex>
              <v-spacer></v-spacer>
              <v-list-tile-action-text class="due">{{ item.action }}</v-list-tile-action-text>
          </v-list-tile>
        </v-list>
      </template>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-card>
    </v-flex>
  </v-layout>
    </v-container>
    </div>
  </div>
  </span>
</template>

<style>
.v-toolbar__content{
  width: 100%!important;
}

.contentToolbar{
  width: 100%!important;
}
.v-toolbar--floating{
  margin:0!important;
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

.rightFilter{
  margin: 0!important;
  padding: 0!important;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color:#1C1C1C!important;
}

.contentControl{
    height: 60px;
    width: 100%;
}
.filterItemToggle{
  background-color: initial!important;
  box-shadow:initial!important;
  -webkit-box-shadow:initial!important;
}
.filterItem{
    text-transform: none!important;
    margin-right: 0;
    float: left;
}
.filterItemActive{
  background-color: white;
}
</style>

<script>
import addTaskOnPeople from './addTaskOnPeople.vue'
  export default {
    components: {
    addTaskOnPeople,
  },
    data: () => ({
      toggle_exclusive: 0,
      dialog: false,
      e1: 'All',
      items: ['All', 'toMe','DueToday','Completed'],
      tasks: [
          {
            action: 'Feb 12th',
            headline: 'Use Vue.js',
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            title: 'Build people page',
            subtitle: "Could you check this UI compornemt?"
          },
          {
            action: 'Mar 22th',
            title: 'Solve select feature',
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            subtitle: "Did you push to github?"
          },
          {
            action: 'Mar 23th',
            headline: 'Add upload feature',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            title: 'Avatar feature',
          },
          {
            action: 'Mar 30th',
            headline: 'This is CV',
            title: '【Primaly】Feedback of Interview',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            subtitle: 'Could you update due?'
          },
          {
            action: 'Apr 1st',
            headline: 'Staf schedule is here',
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            title: 'TB scheduling'
          }
        ]
        
    }),
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }

</script>