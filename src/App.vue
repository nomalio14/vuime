<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
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
          <div class="navbar-item column is-7-desktop" expanded>
          <b-field position="is-centered">
            <b-input placeholder="Search..." expanded></b-input>
            <p class="control">
                <button class="button is-primary is-outlined">Search</button>
            </p>
        </b-field>
        </div>
          <div class="navbar-item column is-3 is-hidden-touch">
            <div class="buttons is-hidden-touch" id="rightItemOfHeader">
              <a class="button is-white">
                <b-icon
                icon="account-plus"
                size="is-medium"
                type="is-dark">
            </b-icon>
              </a>
              <a class="button is-white">
                <b-icon
                icon="alert-circle"
                size="is-medium"
                type="is-primary">
            </b-icon>
              </a>
              <a class="button is-dark">
                サムネ
              </a>
        </div>
      </div>
    </nav>
    <div class="columns is-fullheight" v-on:click="fire">
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
        </div>
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
    }
  }
}
</script>
<style>
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
.is-sidebar-menu {
  padding: 2.5rem;
  background: #4a4a4a;
}

.is-sidebar-menu li a {
  color: white;
}
.columns.is-fullheight {
  min-height: calc(100vh - ( 3.25rem - .75rem ) );
  max-height: calc(100vh - ( 3.25rem - .75rem ) );
  height: calc(100vh - ( 3.25rem - .75rem ) );
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  position: sticky;
}
.columns.is-fullheight .is-hidden-touch {
  overflow-y: auto;
}
.columns.is-fullheight .is-hidden-desktop {
  position: fixed;
  overflow-y: auto;
  z-index: 99;
    width:80%;
    height:100%;
  -webkit-overflow-scrolling: touch;
}

.is-main-content {
  background: #dbdbdb;
  display: block;
}
.menu-list a.is-active {
  background-color: hsl(171, 100%, 41%);
}
.menu-label{
  text-align: left;
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

</style>
<style lang="sass">
</style>