<template>
<v-app>
  <div id="app">
    <nav class="navbar headerNav is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand column is-2-desktop" >
        <a v-on:click="on = !on" v-if="!on" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <a v-on:click="fire" v-if="on" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <a class="navbar-item is-hidden-touch" href="/">
          <img src="./assets/vuiMeLogo.png" width="112" height="28">
        </a>
        <a class="navbar-item is-hidden-desktop" href="/" id="mobileLogo">
          <img src="./assets/vuiMeLogo.png" width="112" height="28">
        </a>
      </div>
          <div class="navbar-item column is-7-desktop pSearchForm" expanded>
          <v-text-field box label="Search..." prepend-inner-icon="search" color="teal lighten-3"></v-text-field>
        </div>
          <div class="navbar-item column is-3 is-hidden-touch">
            <div class="buttons is-hidden-touch" id="rightItemOfHeader">
              <v-btn flat icon color="teal lighten-3">
              <v-icon medium>add_circle_outline</v-icon>
              </v-btn>
              <v-btn flat icon color="pink">
              <v-icon >notifications</v-icon>
              </v-btn>
              <a>
                <v-avatar class="headerAvatar">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                </v-avatar>
              </a>
        </div>
      </div>
    </nav>
    <body>
    <div class="columns is-fullheight" v-on:click="close">
    <div class="column is-2-desktop is-sidebar-menu is-hidden-touch">
    <sideMenu />
    </div>
    <transition name="show">
    <div class="column is-2-desktop is-sidebar-menu is-hidden-desktop" v-if="on">
    <sideMenu />
    </div>
  </transition>
  <router-view></router-view>
</div>
</body>
</div>
</v-app>
</template>

<script>
import sideMenu from './components/sideMenu.vue'
export default {
  name: 'app',
  components: {
    sideMenu,
  },
  data () {
    return {
      isActive: true,
      on:false
    }
  },
  methods: {
    fire:function(){
      this.on = !this.on;
    },
    close:function(){
      this.on = false;
    }
  }
}
</script>
<style>
@media screen and (max-width:1090px) {
.is-fullheight{
  padding-top: 47px;
}
  }
.application--wrap{
  background-color: #DFE0E0;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#rightItemOfHeader{
  float: right;
  margin-right: 20px;
} 
.is-sidebar-menu.is-hidden-touch{
  width: 250px;
}
.is-sidebar-menu {
  position: fixed;
  z-index: 1;
  min-height: calc(100vh - ( 3.25rem - .75rem ) );
  max-height: calc(100vh - ( 3.25rem - .75rem ) );
  height: calc(100vh - ( 3.25rem - .75rem ) );
  padding: 2.5rem;
  background: #4a4a4a;
}
.navbar-burger:hover{
  background-color: rgba(0, 0, 0, 0.0);
}
.navbar-burger{
  color:#2c3e50;
}


.is-sidebar-menu li a {
  text-align: left;
  color: white;
}
.columns.is-fullheight {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  position: sticky;
}

.columns.is-fullheight .is-hidden-touch {
  overflow-y: auto;
}
.columns.is-fullheight .is-hidden-desktop {
  position: absolute;
  overflow-y: auto;
  z-index: 99;
    width:80%;
    height:100%;
  -webkit-overflow-scrolling: touch;
}
.is-main-content {
  width: 100%;
  padding: 0;
  background: #E0E0E0;
  display: block;
}
.menu-list a.is-active {
  background-color: #80CBC4;
}
.menu-label{
  text-align: left;
  color: #dbdbdb;
  border-bottom: 1px solid;
}
a.navbar-burger.burger {
  float: left;
}

#mobileLogo {
  float: right;
}

.show-enter-active, .show-leave-active {
  overflow: auto;
  transition: all .2s ease-in-out;
  -webkit-transform: translateX(10px);
  transform: translateX(10px);
  
}
.show-enter, .show-leave-to {
  transform: translateX(-105%);
  opacity: 0
}
.headAvatar {
  max-height: 100%!important;
  margin-left: 10px;
}
.navbar-item img {
    max-height: 100%;
}

.searchForm{
  margin-top: 7px;
}
.pSearchForm{
  height: 80px;
}
.headerAvatar {
  margin-left: 20px;
}
body {
  padding-top: 45px; 
  }


</style>
<style lang="sass">
</style>