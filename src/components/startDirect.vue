<template>
  <v-dialog v-model="dialog" max-width="600px" lazy>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="sideAddButton" flat icon>
        <v-icon class="sideAddIcon">add_circle_outline</v-icon>
      </v-btn>
    </template>
    <allContact />
  </v-dialog>
</template>

<script>
import allContact from './allContact.vue'

export default {
  components: {
    allContact
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style>
.applyButton {
  margin-top: 30px !important;
}
.contents {
  min-height: 490px !important;
  max-height: 490px !important;
}
.sideAddButton {
  color: #dbdbdb !important;
  margin: 0 0 0 0 !important;
  width: 25px !important;
  height: 25px !important;
  font-size: 20px !important;
  float: right;
}
</style>
