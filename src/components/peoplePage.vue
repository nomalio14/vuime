<template>
  <div class="column is-main-content" id="mainContent">
    <v-toolbar color="teal lighten-3" dark class="contentToolbar">
      <v-avatar class="headerAvatar">
        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
      </v-avatar>
      <v-toolbar-title>Mtsui Akira</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="rightItemOfcontentToolbar">
        <v-btn icon>
          <v-icon>perm_identity</v-icon>
          <P>1</P>
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>
          <v-list>
              <v-list-tile
                @click="clickChannelItem(item, index)"
                v-for="(item, index) in channelItem"
                :key="index"
              >
                <v-list-tile-title class="caption">{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      </div>
    </v-toolbar>
    <div>
      <v-container style="margin-top:64px;" class="mainContentsContainer">
        <div class="contentControl">
          <div class="field is-grouped">
            <v-btn-toggle class="filterItemToggle" v-model="toggle_exclusive">
              <v-btn class="filterItem" color="grey lighten-2" depressed>
                <v-icon>format_list_bulleted</v-icon>Lists</v-btn
              >
              <v-btn class="filterItem" color="grey lighten-2" depressed>
                <v-icon>format_align_left</v-icon>Gantt</v-btn
              >
              <v-btn class="filterItem" color="grey lighten-2" depressed>
                <v-icon>trending_down</v-icon>Graf</v-btn
              >
            </v-btn-toggle>
            <v-spacer></v-spacer>
            <v-flex xs3 sm2>
              <v-select
                color="teal lighten-3"
                :items="items"
                class="rightFilter"
                v-model="filter"
                @change="changeFilter"
              ></v-select>
            </v-flex>
          </div>
        </div>
        <taskListOnPeople v-bind:filter-type="filter" />
      </v-container>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Are you sure you want to delete this channel?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            flat="flat"
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            depressed
            color="error"
            @click="dialog = false"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.rightItemOfcontentToolbar {
  margin-right: 250px !important;
}
#mainContent {
  margin-left: 250px;
}
.v-toolbar__content {
  width: 100% !important;
}

.contentToolbar {
  position: fixed !important;
  width: 100% !important;
  z-index: 100 !important;
}
.v-toolbar--floating {
  margin: 0 !important;
}

.rightFilter {
  margin: 0 !important;
  padding: 0 !important;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #1c1c1c !important;
}

.contentControl {
  height: 60px;
  width: 100%;
}
.filterItemToggle {
  background-color: initial !important;
  box-shadow: initial !important;
  -webkit-box-shadow: initial !important;
}
.filterItem {
  text-transform: none !important;
  margin-right: 0;
  float: left;
}
.filterItemActive {
  background-color: white;
}
@media screen and (max-width: 1090px) {
  .mainContentsContainer {
    margin-left: 7px !important;
  }

  #mainContent {
    margin: 0 !important;
  }
  .rightItemOfcontentToolbar {
    margin-right: 0 !important;
  }
  .contentToolbar {
    margin-left: 10px;
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
    channelItem: [{ title: 'Delete' }],
    dialog: false,
    filter: 'All open',
    items: ['All open', 'To me', 'Due today', 'Completed', 'All']
  }),
  methods: {
    changeFilter: function() {
      console.log(this.filter)
    },
    clickChannelItem(item, index) {
      if(item.title = "Delete") {
        console.log("Clicked Delete")
        this.dialog = true
      }
    },
  }
}
</script>
