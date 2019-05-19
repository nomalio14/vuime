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
            :error-messages="titleErrors"
            label="Task name"
            color="teal lighten-3"
            v-model="title"
            id="title"
            @input="$v.title.$touch()"
            @blur="$v.title.$touch()"
            required
          ></v-text-field>
        </v-form>
        <v-autocomplete
          :error-messages="assignErrors"
          @input="$v.chips.$touch()"
          @blur="$v.chips.$touch()"
          required
          v-model="chips"
          :items="users"
          item-text="name"
          item-value="userId"
          label="Assign to"
          chips
          color="teal lighten-3"
          clearable
          multiple
        >
          <template v-slot:selection="data">
            <v-chip :selected="data.selected" close @input="remove(data.item.userId)">
              <strong>{{ data.item.name }}</strong
              >&nbsp;
            </v-chip>
          </template>
        </v-autocomplete>
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
                @input="
                  menu1 = false
                  endDate = startDate
                "
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
                :show-current="false"
                :min="startDate"
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
          <v-btn flat @click="createCancel()">
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
  mixins: [validationMixin],
  validations: {
    title: { required },
    chips: { required }
  },

  data() {
    const defaultForm = Object.freeze({
      first: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      chips: '',
      users: [],
      chipsUsersIdIndex: [],
      rules: {
        name: [val => (val || '').length > 0 || 'This field is required']
      },
      dialog: false,
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      title: ''
    }
  },
  props: {
    taskArray: Array,
    usersArray: Array
  },
  computed: {
    titleErrors() {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.required && errors.push('This field is required.')
      return errors
    },
    assignErrors() {
      const errors = []
      if (!this.$v.chips.$dirty) return errors
      !this.$v.chips.required && errors.push('This field is required.')
      return errors
    },
    ...mapState({
      userInfo: state => state.app.userData
    })
  },
  methods: {
    synUsers() {
      this.users = this.usersArray
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    createCancel() {
      this.dialog = false
      this.$refs.form.reset()
      this.$v.$reset()
      this.chips = ''
      this.startDate = new Date().toISOString().substr(0, 10)
      this.endDate = new Date().toISOString().substr(0, 10)
    },
    addTask() {
      this.$v.$touch()
      if (this.$v.$invalid) {
      } else {
        const title = this.title
        const assignee = this.chips
        const startDate = this.startDate
        const endDate = this.endDate
        const chipsUserIdArray = this.chips.map(id => id.userId)
        const chipsUserAvatarArray = this.chips.map(elm => elm.avatar)
        //新しいIDの生成
        const tasksLength = this.taskArray.length
        const endIndex = tasksLength - 1
        const endId = this.taskArray[endIndex].id
        const newId = endId + 1
        //現在時間の取得
        const date = new Date()
        const UTCdate = date.toUTCString()
        //新しいリストの生成
        const newList = {
          id: newId,
          isEdit: false,
          done: false,
          startDate: startDate,
          due: endDate,
          createdAt: UTCdate,
          asignedAvatar: chipsUserAvatarArray,
          assignee: assignee,
          createrName: this.userInfo.name,
          createdAvatar: this.userInfo.avatar,
          title: title
        }
        this.$emit('add-list', newList)
        console.log(chipsUserIdArray)
        console.log(chipsUserAvatarArray)
        this.dialog = false
        this.$refs.form.reset()
        this.$v.$reset()
        this.chips = ''
        this.startDate = new Date().toISOString().substr(0, 10)
        this.endDate = new Date().toISOString().substr(0, 10)
      }
    }
  },
  mounted() {},
  watch: {
    dialog(val) {
      !val && this.createCancel()
    }
  },
  filters: {}
}
</script>
