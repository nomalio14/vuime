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
      <section>
        <v-btn small class="filiterItem" color="grey lighten-2" depressed>
        <v-icon>format_list_bulleted</v-icon>Lists</v-btn>
        <v-btn small class="filiterItem" color="grey lighten-2" depressed>
        <v-icon>format_align_left</v-icon>Gantt</v-btn>
        <v-btn small class="filiterItem" color="grey lighten-2" depressed>
        <v-icon>trending_down</v-icon>Graf</v-btn>
        <v-btn small class="filiterItem" color="grey lighten-2" depressed>
        <v-icon>check_circle_outline</v-icon>Completed</v-btn>
  </section>
  </div>
    </div>
    
    </v-container>
    </div>
  </div>
  </span>
</template>

<style>
.toolbarTitle {
    color: #757575;
}

.contentControl{
    margin-top: 50px;
    height: 60px;
    width: 100%;
}
.filiterItem{
    text-transform: none!important;
    margin-right: 0;
    float: left;
    color: #6E6E6E !important;
}

</style>
