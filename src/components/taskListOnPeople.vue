<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <addTaskOnPeople
          ref="addTask"
          v-bind:task-array="tasks"
          v-bind:users-array="users"
          @add-list="getList"
        />
        <!--TaskMain-->
        <v-subheader class="subHeader">
          <span>tasks list</span>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="grey darken-3" dark v-on="on" flat icon small>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </template>
            <!--Sort freature-->
            <v-list>
              <v-list-tile
                @click="changeSort(item, index)"
                v-for="(item, index) in sort"
                :key="index"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-subheader>
        <v-progress-linear
          :indeterminate="true"
          v-if="progress"
          class="progressLinear"
          height="5"
          color="teal lighten-4"
        ></v-progress-linear>
        <v-alert
          :value="true"
          type="error"
          color="grey lighten-1"
          class="errorAlert"
          v-if="progresserror"
        >
          Unable to load the required file.
        </v-alert>
        <!--Task list-->
        <v-expansion-panel v-model="panel">
          <v-expansion-panel-content
            v-for="item in filteredTasks"
            :key="item.index"
          >
            <template v-slot:header>
              <v-list class="taskLists">
                <v-list-tile ripple avatar>
                  <v-list-tile-avatar>
                    <v-btn icon @click.native.stop="taskDoneToggle(item.id)">
                      <v-icon v-if="!item.done" medium color="grey lighten-1">
                        check_circle_outline
                      </v-icon>
                      <v-icon v-if="item.done" medium color="teal lighten-3">
                        check_circle_outline
                      </v-icon>
                    </v-btn>
                  </v-list-tile-avatar>
                  <v-flex xs6 sm8>
                    <v-list-tile-content>
                      <v-list-tile-title v-if="!item.isEdit">{{
                        item.title
                      }}</v-list-tile-title>
                      <v-text-field
                        v-bind:style="editStyle"
                        v-on="titleInput(item.id)"
                        prepend-inner-icon="edit"
                        :rules="rules.name"
                        color="teal lighten-3"
                        class="editTitle"
                        single-line
                        label="Task name"
                        @click.stop=""
                        v-if="item.isEdit"
                        v-model="item.title"
                      ></v-text-field>
                      <span
                        ref="hidden"
                        v-bind:id="'edit-id' + item.id"
                        class="checkEditWidth"
                        >{{ item.title }}</span
                      >
                    </v-list-tile-content>
                  </v-flex>
                  <v-flex xs4 sm4>
                    <div class="dueBox">
                      <span class="due">{{ item.due | duedateFormat }}</span>
                    </div>
                    <div class="listRightItems">
                      <v-avatar size="30px" class="listAvatar">
                        <img :src="item.asignedAvatar" />
                      </v-avatar>
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
                      <!--TaskDetail Head-->
                      <span>Created by</span>
                      <v-list-tile-avatar class="createdAvatar" size="25px">
                        <img :src="item.createdAvatar" />
                      </v-list-tile-avatar>
                      <span class="detailHeadName">{{ item.createrName }}</span>
                      <span class="createdAvatar createdTimeAt">at</span>
                      <span class="detailHeadName">{{
                        item.createdAt.toLocaleString() | duedateFormat
                      }}</span>
                    </v-subheader>
                  </v-card>
                </v-flex>
                <!--TaskDetail Body-->
                <v-flex d-flex xs12 sm3 md3>
                  <v-card flat>
                    <section>
                      <v-layout row wrap>
                        <!--detailLeftItems-->
                        <v-flex xs5 sm12 md12 class="detailLeftItems">
                          <v-menu
                            :v-model="item.startDate"
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
                                v-model="item.startDate"
                                class="calendarOnDetail"
                                label="Start date"
                                readonly
                                v-on="on"
                                prepend-icon="event"
                                color="teal lighten-3"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              color="teal lighten-3"
                              no-title
                              v-model="item.startDate"
                              @input="inputedStartDate(item.id)"
                            ></v-date-picker>
                          </v-menu>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs5 sm12 md12 class="detailLeftItems">
                          <v-menu
                            class="endDate"
                            :v-model="item.due"
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
                                v-model="item.due"
                                class="calendarOnDetail"
                                label="Due date"
                                readonly
                                v-on="on"
                                prepend-icon="event"
                                color="teal lighten-3"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              :show-current="false"
                              :min="item.startDate"
                              class="date4"
                              color="teal lighten-3"
                              no-title
                              v-model="item.due"
                            ></v-date-picker>
                          </v-menu>
                        </v-flex>
                      </v-layout>
                    </section>
                    <v-autocomplete
                      v-model="item.assignee"
                      prepend-icon="people"
                      :items="users"
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
                          class="chip--select-multi"
                          @input="remove(data.item, item.id)"
                        >
                          {{ data.item }}
                        </v-chip>
                      </template>
                    </v-autocomplete>
                    <v-text-field
                      class="shareUrl detailLeftItems"
                      value="http://...."
                      label="Share"
                      prepend-icon="share"
                      box
                      color="teal lighten-3"
                      readonly
                    ></v-text-field>
                    <!--Button group-->
                    <v-layout row wrap>
                      <v-flex xs6 text-xs-center>
                        <v-btn
                          flat
                          class="DetailButtons"
                          @click="deleteTask(item.id)"
                          >Delete</v-btn
                        >
                      </v-flex>
                      <v-flex xs6 text-xs-center>
                        <v-btn
                          v-if="!item.done"
                          depressed
                          dark
                          class="DetailButtons"
                          color="teal lighten-3"
                          @click="taskDoneByCompleteButton(item.id)"
                          >Complete</v-btn
                        >
                        <v-btn
                          v-if="item.done"
                          depressed
                          dark
                          class="DetailButtons"
                          color="grey darken-2"
                          @click="taskDoneToggle(item.id)"
                          >Open again</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm9 md9>
                  <Note />
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
.checkEditWidth {
  visibility: hidden;
  position: fixed;
  white-space: nowrap;
}
.v-list__tile--avatar {
  height: 45px !important;
}
.editTitle {
  min-width: 120px !important;
}
.errorAlert {
  margin: 0 !important;
}
.progressLinear {
  margin: 5px 0 0 0 !important;
}
.taskLists {
  height: 45px !important;
  margin-top: 3px !important;
}
.detailLeftItems {
  max-width: 90% !important;
}
.shareUrl {
  font-size: 13px !important;
}
.calendarOnDetail {
  font-size: 13px !important;
}
.noteContents {
  height: 300px;
}
.sendButton {
  background-color: #80cbc4 !important;
  color: white !important;
}
.note {
  position: relative !important;
}
.commentInput {
  width: 100%;
  padding: 0 16px;
  position: absolute !important;
  bottom: 0 !important;
}
.DetailButtons {
  text-transform: none !important;
}
.detailHeadName {
  color: #212121 !important;
}
.detailContainer {
  padding: 0 24px !important;
  padding-bottom: 10px !important;
}
.createdAvatar {
  min-width: 40px !important;
  padding: 0px 7px !important;
}
.createdTimeAt {
  text-align: center;
}
.taskDetailHead {
  background-color: #b2dfdb;
  width: 100%;
  color: white;
}
.taskDetail {
  position: relative;
  margin: auto;
  max-width: 82%;
}
.listRightItems {
  float: right !important;
}
.v-list {
  padding: 0 !important;
}
.subHeader {
  height: 30px !important;
}
.v-expansion-panel__header {
  display: initial !important;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  padding: 0px 15px !important;
}
.due {
  text-align: center !important;
  font-size: 13px !important;
  color: #424242 !important;
  width: 30% !important;
}
.dueBox {
  float: right !important;
  width: 56px;
}
.listAvatar {
  margin-right: 10px;
}
hr {
  margin: 0 !important;
}
@media screen and (max-width: 1090px) {
  .detailLeftItems {
    max-width: 100% !important;
  }
  .editTitle {
    max-width: 100% !important;
  }
}
</style>
<script>
import addTaskOnPeople from './addTaskOnPeople.vue'
import Note from './Note.vue'
import moment from 'moment'
import axios from 'axios'
import { setTimeout } from 'timers'
export default {
  components: {
    addTaskOnPeople,
    Note
  },
  data: () => ({
    isEdit: false,
    editStyle: '',
    panel: [],
    date3: new Date().toISOString().substr(0, 10),
    date4: new Date().toISOString().substr(0, 10),
    menu3: false,
    menu4: false,
    sort: [{ title: 'Newest' }, { title: 'Due' }],
    sortKey: '',
    chips: '',
    users: [],
    rules: {
      name: [val => (val || '').length > 0 || '']
    },
    tasks: [],
    progress: true,
    progresserror: false
  }),
  props: {
    filterType: String
  },
  filters: {
    duedateFormat: function(date) {
      return moment(date).format('MMM Do')
    }
  },
  computed: {
    // existing values
    // items: ['All open', 'To me', 'Due today', 'Completed', 'All']
    filteredTasks: function() {
      switch (this.filterType) {
        case 'All open':
          return this.tasks.filter(task => {
            return task.done !== true
          }, this)
          break
        case 'Completed':
          return this.tasks.filter(task => {
            return task.done === true
          }, this)
          break
        case 'All':
          return this.tasks
          break
        // Others
        default:
          return this.tasks
      }
    }
  },
  methods: {
    //タイトル入力フォームサイズ可変長
    titleInput(e) {
      const targetEl = document.getElementById('edit-id' + e)
      this.editStyle = `width: ${targetEl.clientWidth + 50}px;!important`
    },
    remove(item, id) {
      const idArray = this.tasks.map(elm => elm.id)
      const removeIndex = idArray.indexOf(id)
      this.tasks[removeIndex].assignee.splice(
        this.tasks[removeIndex].assignee.indexOf(item),
        1
      )
      this.tasks[removeIndex].assignee = [...this.tasks[removeIndex].assignee]
    },
    taskDoneToggle(id) {
      this.tasks[id].done = !this.tasks[id].done
      this.panel = null
    },
    taskDoneByCompleteButton(id) {
      this.panel = null
      setTimeout(this.taskDoneToggle(id), 1000)
    },
    deleteTask(id) {
      const idArray = this.tasks.map(elm => elm.id)
      const deleteIndex = idArray.indexOf(id)
      this.tasks.splice(deleteIndex, 1)
      this.panel = null
    },
    changeSort(item, index) {
      console.log(index)
    },
    getList(newList) {
      //console.log(newList)
      this.tasks.push(newList)
    },
    inputedStartDate(id) {
      const idArray = this.tasks.map(elm => elm.id)
      const inputedIndex = idArray.indexOf(id)
      if (this.tasks[inputedIndex].startDate > this.tasks[inputedIndex].due) {
        this.tasks[inputedIndex].due = this.tasks[inputedIndex].startDate
      }
    }
  },
  watch: {
    panel: function() {
      const panelId = this.panel
      if (panelId == null) {
        this.tasks.forEach(elm => (elm.isEdit = false))
      } else {
        this.tasks.forEach(elm => (elm.isEdit = false))
        const targetTaskId = this.filteredTasks[panelId].id
        const idArray = this.tasks.map(elm => elm.id)
        const editIndex = idArray.indexOf(targetTaskId)
        this.tasks[editIndex].isEdit = true
      }
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:4321/taskList_wait')
      .then(response => ((this.tasks = response.data), (this.progress = false)))
      .catch(error => (console.log(error), (this.progresserror = true)))
      .then(() => (this.progress = false)),
      axios
        .get('http://127.0.0.1:4321/users')
        .then(response => (this.users = response.data))
        .catch(error => console.log(error))
        .then(() => this.$refs.addTask.synUsers())
  }
}
</script>
