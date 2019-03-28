<template>
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
    <v-btn class="sideAddButton" flat icon>
              <v-icon class="sideAddIcon">add_circle_outline</v-icon>
              </v-btn>
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
    <v-btn class="sideAddButton" flat icon>
              <v-icon class="sideAddIcon">add_circle_outline</v-icon>
              </v-btn>
  </p>
  <ul class="menu-list">
    <li><router-link to="/peoplePage">PeopleA</router-link></li>
    <li><a>PeopleB</a></li>
    <li><a>PeopleC</a></li>
    <li><a>PeopleD</a></li>
    <li><a>PeopleE</a></li>
    <li><a>PeopleF</a></li>
    <li><a>PeopleG</a></li>
  </ul>
</aside>
</template>

<style>
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
.is-sidebar-menu li a {
  text-align: left;
  color: white;
}
.menu-list a.is-active {
  background-color: #80CBC4;
}

.menu-label{
  text-align: left;
  color: #dbdbdb;
  border-bottom: 1px solid;
  height: 25px!important;
  bottom: 0px!important;
}
.sideAddButton{
  color: #dbdbdb!important;
  margin: 0 0 0 0!important;
  width: 25px!important;
  height: 25px!important;
  font-size: 20px!important;
  float: right;
}
.sideAddIcon{
  font-size: 20px!important;
}
</style>