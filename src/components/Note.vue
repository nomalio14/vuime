<template>
  <div>
    <div class="notesSection" id="notesSection">
    <hr />
    <div v-for="note in notes">
      <v-hover>
      <v-card flat slot-scope="{ hover }"> 
          <div>
            <v-avatar size="30px" class="listAvatar">
              <img
                :src="note.createdAvater"
              />
            </v-avatar>
            <span class="grey--text">{{ note.createdAt | dateFormat }}</span
            ><br />
            <div class="withinNote" v-html="compiledMarkdown(note.body)"></div>
          </div>
        <v-expand-transition>
        <div class="actionButtons">
        <v-card-actions v-if="hover">
          <v-btn small flat icon color="grey darken-2"><v-icon small>edit</v-icon></v-btn>
          <v-btn small flat icon color="grey darken-2"><v-icon small>delete</v-icon></v-btn>
        </v-card-actions>
        </div>
        </v-expand-transition>
      </v-card>
      </v-hover>
      <hr />
    </div>
    </div>
    <v-textarea
      name="input-7-1"
      label="Note"
      v-model="newNote"
      value=""
      hint="Markdown available/ ⌘ + Enter to save"
      color="teal lighten-3"
      background-color="grey lighten-3"
      @keydown.meta.enter="saveNote"
      @keydown.ctrl.enter="saveNote"
    ></v-textarea>
    <v-btn
      depressed
      dark
      small
      class="DetailButtons"
      color="teal lighten-3"
      @click="saveNote"
      >Save</v-btn
    >
  </div>
</template>

<script>
import moment from 'moment'
import marked from 'marked'
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      notes: [],
      newNote: '',
      input: '# hello\n * goo\n * goo'
    }
  },
  methods: {
    saveNote() {
      this.notes.push({
        body: this.newNote,
        createdAt: moment().format(),
        createdAvater: this.userInfo.avatar
      })
      this.newNote = ''
      document.getElementById("notesSection").scrollTop = 0
    },
    compiledMarkdown(text) {
      return marked(text, { sanitize: true })
    }
  },
  filters: {
    dateFormat: function(date) {
      return moment(date).format('MMM Do HH:mm:ss')
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.app.userData
    })
  }
}
</script>

<style>
.actionButtons {
  height: 40px!important;
}
.notesSection {
  max-height: 300px!important;
  overflow: scroll !important;
}
.withinNote > p {
  margin: 0!important;
}
.withinNote > h1 {
  font-size: 24px!important;
  font-weight: initial!important;
}
.withinNote > h2 {
  font-size: 18px!important;
  font-weight: initial!important;
}
.withinNote > ul {
  font-size: initial!important;
  list-style-type: initial!important;
  list-style-image: initial!important;
  list-style-position: initial!important;
}
.withinNote > table {
  border-collapse: initial!important;
  border-spacing: initial!important;
  border-width: initial!important;
  border-color: initial!important;
}
.withinNote > tr {
  border-bottom: initial!important;
}
.withinNote > td {
  vertical-align: initial!important;
  padding: initial!important;
}
</style>
