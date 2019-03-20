<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand column is-2" >
        <a class="navbar-item" href="/">
          <img src="./assets/vuiMeLogo.png" width="112" height="28">
        </a>
    
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
          <div class="navbar-item column is-7">
          <b-field position="is-centered">
            <b-input placeholder="Search..." expanded></b-input>
            <p class="control">
                <button class="button is-primary is-outlined">Search</button>
            </p>
        </b-field>
        </div>
          <div class="navbar-item column is-3">
            <div class="buttons" id="rightItemOfHeader">
              <a class="button is-primary">
                <b-icon
                pack="fas"
                icon="user"
                size="is-medium">
            </b-icon>
              </a>
              <a class="button is-light">
                Log in
              </a>
        </div>
      </div>
    </nav>
    <div class="columns is-fullheight">
  <div class="column is-2 is-sidebar-menu is-hidden-mobile">
    <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><router-link to="/">My Tasks</router-link></li>
    <li><router-link to="/page2">My Gantt</router-link></li>
  </ul>
  <p class="menu-label">
    Groups
  </p>
  <ul class="menu-list">
    <li><router-link to="/page3">GroupA</router-link></li>
    <li><a>GroupB</a></li>
    <li><a>GroupC</a></li>
    <li><a>GroupD</a></li>
    <li><a>GroupE</a></li>
  </ul>
  <p class="menu-label">
    Peoples
  </p>
  <ul class="menu-list">
    <li><a>PeopleA</a></li>
    <li><a>PeopleB</a></li>
    <li><a>PeopleC</a></li>
    <li><a>PeopleD</a></li>
    <li><a>PeopleE</a></li>
    <li><a>PeopleF</a></li>
    <li><a>PeopleG</a></li>
  </ul>
</aside>
  </div>
  <router-view></router-view>
</div>
        </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
}
.columns.is-fullheight .column {
  overflow-y: auto;
}
.is-main-content {
  background: #dbdbdb;
}
.menu-list a.is-active {
  background-color: hsl(171, 100%, 41%);
}
.menu-label{
  text-align: left;
  border-bottom: 1px solid;
}

</style>
<style lang="sass">
</style>