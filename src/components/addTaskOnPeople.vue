<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <v-btn color="pink" dark fixed bottom right fab v-on="on">
        <v-icon>add</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline" primary-title>
        Create Task
      </v-card-title>
      <div class="container">
        <v-form ref="form">
        <v-text-field
          label="Task name"
          :rules="rules.name"
          color="teal lighten-3"
          v-model="createList.title"
          id="title"
        ></v-text-field>
        <v-textarea
          box
          label="Description"
          rows="1"
          color="teal lighten-3"
          v-model="createList.description"
          id="description"
        ></v-textarea>
        </v-form>
        <v-combobox
          v-model="chips"
          :items="items"
          label="Assigned to"
          chips
          :rules="rules.name"
          color="teal lighten-3"
          clearable
          multiple
        >
          <template v-slot:selection="data">
            <v-chip :selected="data.selected" close @input="remove(data.item)">
              <strong>{{ data.item }}</strong
              >&nbsp;
            </v-chip>
          </template>
        </v-combobox>
        <v-layout row wrap>
          <v-flex xs5 sm5 md5>
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="startDate"
                  label="Start date"
                  readonly
                  v-on="on"
                  color="teal lighten-3"
                ></v-text-field>
              </template>
              <v-date-picker
                color="teal lighten-3"
                v-model="startDate"
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs5 sm5 md5>
            <v-menu
              class="endDate"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="endDate"
                  label="Due date"
                  readonly
                  v-on="on"
                  color="teal lighten-3"
                ></v-text-field>
              </template>
              <v-date-picker
                color="teal lighten-3"
                v-model="endDate"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </div>
      <div class="container">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="teal lighten-3" dark depressed @click="addTask()">
            Create
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>
<style>
.endDate {
  float: right !important;
}
</style>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      first: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      chips: ['Mtsui Akira'],
      items: ['Noma Yuma', 'Mtsui Akira'],
      rules: {
        name: [val => (val || '').length > 0 || 'This field is required']
      },
      dialog: false,
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      createList: {
        title: "",
        description: ""
      },
    }
  },
  props: {
    taskArray: Array,
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    addTask(){
      const title = this.createList.title
      const description = this.createList.description
      const assignee = this.chips
      const startDate = this.startDate
      const endDate = this.endDate
      //新しいIDの生成
      const tasksLength = this.taskArray.length;
      const endIndex = tasksLength - 1
      const endId = this.taskArray[endIndex].id
      const newId = endId + 1
      //新しいリストの生成
      const newList = {
                id: newId,
                done: false,
                startDate: startDate,
                due: endDate,
                createdAt: new Date(),
                descrtiption: description,
                asignedAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                assignee: assignee,
                createrName: 'Noma Yuma',
                createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                title: title
              }
      this.$emit('add-list', newList)
      this.dialog = false
      this.$refs.form.reset()
      this.chips = ['Mtsui Akira']
      }
    }
  }
</script>
