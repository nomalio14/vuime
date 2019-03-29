<template>
<div class="column is-main-content" id="mainContent">
    <v-toolbar
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
    <div>
    <v-container style="margin-top:64px;" class="mainContentsContainer">
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
    <v-flex xs3 sm2>
        <v-select color="teal lighten-3" :items="items" label="Assigned" class="rightFilter" v-model="Assigned" ></v-select>
      </v-flex>
  </div>
    </div>
    <taskListOnPeople />
    </v-container>
    </div>
  </div>
</template>

<style>
.rightItemOfcontentToolbar {
  margin-right: 250px!important;
}
#mainContent {
  margin-left: 250px;
}
.v-toolbar__content{
  width: 100%!important;
}

.contentToolbar{
  position: fixed!important;
  width: 100%!important;
  z-index: 100!important;
}
.v-toolbar--floating{
  margin:0!important;
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
@media screen and (max-width:1090px) {
.mainContentsContainer{
  margin-left:7px!important;
}

#mainContent{
  margin:0!important;
}
.rightItemOfcontentToolbar {
  margin-right: 0!important;
}
.contentToolbar {
  margin-left:10px;
}
  }
</style>

<script>
import taskListOnPeople from './taskListOnPeople.vue'
  export default {
    components: {
    taskListOnPeople
  },
    data: () => ({
      toggle_exclusive: 0,
      dialog: false,
      Assigned: 'All',
      items: ['All', 'toMe','DueToday','Completed'],
    }),
    methods: {
      
    }
  }

</script>