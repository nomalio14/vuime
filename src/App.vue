<template>
  <v-app>
    <div id="app">
      <nav
        class="navbar headerNav is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand column is-2-desktop">
          <a
            v-on:click="on = !on"
            v-if="!on"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a
            v-on:click="fire"
            v-if="on"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a class="navbar-item is-hidden-touch vuimeLogo" href="/">
            <img src="./assets/vuiMeLogo.png" width="112" height="28" />
          </a>
          <a class="navbar-item is-hidden-desktop" href="/" id="mobileLogo">
            <img src="./assets/vuiMeLogo.png" width="112" height="28" />
          </a>
        </div>
        <div class="navbar-item column is-7-desktop pSearchForm" expanded>
          <v-text-field
            box
            label="Create task with some command"
            prepend-inner-icon="search"
            color="teal lighten-3"
          ></v-text-field>
        </div>
        <div class="navbar-item column is-3 is-hidden-touch">
          <div class="buttons is-hidden-touch" id="rightItemOfHeader">
            <v-btn flat icon color="grey darken-2">
              <v-icon medium>person_add</v-icon>
            </v-btn>
            <v-btn flat icon color="grey darken-2">
              <v-icon>notifications</v-icon>
            </v-btn>
            <a>
              <v-avatar class="headerAvatar">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
              </v-avatar>
            </a>
          </div>
        </div>
      </nav>
      <body>
        <div class="mainBody">
          <div class="columns is-fullheight" v-on:click="close">
            <div class="column is-2-desktop is-sidebar-menu is-hidden-touch">
              <sideMenu />
            </div>
            <transition name="show">
              <div
                class="column is-2-desktop is-sidebar-menu is-hidden-desktop"
                v-if="on"
              >
                <sideMenu />
              </div>
            </transition>
            <router-view></router-view>
          </div>
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
    sideMenu
  },
  data() {
    return {
      isActive: true,
      on: false
    }
  },
  methods: {
    fire: function() {
      this.on = !this.on
    },
    close: function() {
      this.on = false
    }
  }
}
</script>
<style>
.mainBody {
  width: 97% !important;
  object-fit: contain !important;
}
.vuimeLogo {
  top: 5px;
  left: 15%;
}

.application--wrap {
  background-color: #dfe0e0;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#rightItemOfHeader {
  float: right;
  margin-right: 20px;
}

.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0);
}
.navbar-burger {
  color: #2c3e50;
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
  z-index: 101;
  width: 80%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
.is-main-content {
  width: 100%;
  padding: 0;
  background: #e0e0e0;
  display: block;
}

a.navbar-burger.burger {
  float: left;
}

#mobileLogo {
  float: right;
}

.show-enter-active,
.show-leave-active {
  overflow: auto;
  transition: all 0.2s ease-in-out;
  -webkit-transform: translateX(10px);
  transform: translateX(10px);
}
.show-enter,
.show-leave-to {
  transform: translateX(-105%);
  opacity: 0;
}
.headAvatar {
  max-height: 100% !important;
  margin-left: 10px;
}
.navbar-item img {
  max-height: 100%;
}

.searchForm {
  margin-top: 7px;
}
.pSearchForm {
  height: 80px;
}
.headerAvatar {
  margin-left: 20px;
}
body {
  padding-top: 45px;
  background-color: #e0e0e0;
}

@media screen and (max-width: 1090px) {
  .is-fullheight {
    padding-top: 45px;
  }
}
</style>
<style lang="sass"></style>
