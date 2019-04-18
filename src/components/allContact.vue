<template>
  <v-card class="contents">
    <v-card-title>
        <span class="headline">Choose people</span>
      <v-spacer></v-spacer>
      </v-card-title>
      <v-text-field
        v-model="search"
        color="teal lighten-3"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        class="searchOnAllContact"
      ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="contacts"
      :search="search"
      hide-headers
      hide-actions
    >
      <template v-slot:items="props">
        <tr @click="clickContact(props.item.userId)">
        <td class="userName">
          <v-avatar
          size="40px"
          >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
          {{ props.item.name }}
        </td>
        </tr>
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>
<style>
table td, table th {
  vertical-align: middle!important
}
.userName{
  font-size: 16px!important;
}
.searchOnAllContact{
  padding: 0px 24px!important;
  margin-bottom: 20px!important;
}
</style>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],
        contacts: [
          {
            userId:1,
            name: 'Frozen Yogurt',
          },
          {
            userId:2,
            name: 'Ice cream sandwich',
          },
          {
            userId:3,
            name: 'Eclair',
          },
          {
            userId:4,
            name: 'Cupcake',
          },
          {
            userId:5,
            name: 'Gingerbread',
          },
          {
            userId:6,
            name: 'Jelly bean',
          },
          {
            userId:7,
            name: 'Lollipop',
          },
          {
            userId:8,
            name: 'Honeycomb',
          },
          {
            userId:9,
            name: 'Donut',
          },
          {
            userId:10,
            name: 'KitKat',
          }
        ]
      }
    },
    methods: {
      clickContact(id){
        alert("クリックしたユーザーIDは" + id)
      }
    }
    
  }
</script>