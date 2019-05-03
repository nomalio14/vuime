<template>
  <div>
    <hr />
    <div v-for="note in notes">
      <v-card flat>
        <v-card-title>
          <div>
            <v-avatar size="30px" class="listAvatar">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
            <span class="grey--text">{{ note.createdAt | dateFormat }}</span
            ><br />
            <div v-html="compiledMarkdown(note.body)"></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn small flat>Edit</v-btn>
          <v-btn small flat>Delete</v-btn>
        </v-card-actions>
      </v-card>
      <hr />
    </div>
    <v-textarea
      name="input-7-1"
      label="Note"
      v-model="newNote"
      value=""
      hint="Markdown available"
      background-color="grey lighten-3"
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
        createdAt: moment().format()
      })
      this.newNote = ''
    },
    compiledMarkdown(text) {
      return marked(text, { sanitize: true })
    }
  },
  filters: {
    dateFormat: function(date) {
      return moment(date).format('MMM Do HH:mm:ss')
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: initial;
}
h2 {
  font-size: 18px;
  font-weight: initial;
}
ul {
  font-size: initial;
  list-style-type: initial;
  list-style-image: initial;
  list-style-position: initial;
}
table {
  border-collapse: initial;
  border-spacing: initial;
  border-width: initial;
  border-color: initial;
}
tr {
  border-bottom: initial;
}
td {
  vertical-align: initial;
  padding: initial;
}
</style>
