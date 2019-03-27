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
        <v-text-field
            label="Task name"
            :rules="rules.name"
            color="teal lighten-3"
          ></v-text-field>
          <v-textarea
          box
          label="Description"
          rows="1"
          color="teal lighten-3"
        ></v-textarea>
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
        <v-chip
            :selected="data.selected"
            close
            @input="remove(data.item)"
        >
        <strong>{{ data.item }}</strong>&nbsp;
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
        <v-date-picker color="teal lighten-3" v-model="startDate" @input="menu1 = false"></v-date-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs5 sm5 md5>
      <v-menu class="endDate"
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
        <v-date-picker color="teal lighten-3" v-model="endDate" @input="menu2 = false"></v-date-picker>
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
        <v-btn color="teal lighten-3" dark depressed @click="dialog = false">
            Create
        </v-btn>
        </v-card-actions>
        </div>
    </v-card>
</v-dialog>
</template>
<style>
    .endDate {
        float: right!important;
    }
</style>

<script>
  export default {
    data () {
    const defaultForm = Object.freeze({
    first: '',
    
      })
      return {
        form: Object.assign({}, defaultForm),
        chips: ['Mtsui Akira'],
        items: ['Noma Yuma','Mtsui Akira' ],
        rules: {
            name: [val => (val || '').length > 0 || 'This field is required']
        },
        dialog: false,
        startDate: new Date().toISOString().substr(0, 10),
        endDate: new Date().toISOString().substr(0, 10),
        menu1: false,
        menu2: false
      }
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    },
  }
</script>