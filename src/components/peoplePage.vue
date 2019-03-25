<template>
<span class="column is-main-content">
    <div
    class="hide-overflow"
    style="position: relative;"
  >
    <v-toolbar
      absolute
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques"
    >
      <v-avatar class="headerAvatar">
        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
      </v-avatar>
      <v-toolbar-title>Mtsui Akira</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>perm_identity</v-icon>
        <P>1</p>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <div
      id="scrolling-techniques"
      class="scroll-y"
      style="max-height: 600px;"
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
        <v-list two-line subheader>
          <v-subheader>All Tasks</v-subheader>
          <template v-for="(item, index) in tasks">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click="toggle(index)"
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-flex xs4 sm7>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-flex>
              <v-spacer></v-spacer>
              <v-list-tile-content>
                <v-list-tile-title class="due">{{ item.action }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >
                  check_circle_outline
                </v-icon>

                <v-icon
                  v-else
                  color="teal lighten-3"
                >
                  check_circle
                </v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

    
    </v-container>
    </div>
  </div>
  </span>
</template>

<style>
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
    margin-top: 60px;
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
  export default {
    data: () => ({
      toggle_exclusive: 0,
      e1: 'All',
      items: ['All', 'toMe','DueToday','Completed'],
      selected: [2],
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