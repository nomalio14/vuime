<template>
  <v-dialog v-model="dialog" max-width="600px" lazy>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="sideAddButton" @click="openMakeChannel" flat icon>
        <v-icon class="sideAddIcon">add_circle_outline</v-icon>
      </v-btn>
    </template>
    <v-card class="mainContent">
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
      <div class="tableContenct">
        <v-data-table
          :headers="headers"
          :items="listedContacts"
          :search="search"
          hide-headers
          hide-actions
        >
          <template v-slot:items="props">
            <tr @click="clickContact(props.item.userId)">
              <td class="userName">
                <v-avatar size="40px">
                  <img
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                </v-avatar>
                {{ props.item.name }}
              </td>
              <td>
                <v-icon v-if="props.item.selected" dark color="teal lighten-3"
                  >check</v-icon
                >
              </td>
            </tr>
          </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </div>
      <v-card-actions class="footerbuttons">
        <v-spacer></v-spacer>
        <v-btn flat @click="createCancel()">
          Cancel
        </v-btn>
        <v-btn color="teal lighten-3" dark depressed @click="createChannel()">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialog: false,
      search: '',
      listedContacts: [],
      headers: [
        {
          align: 'left',
          sortable: false,
          value: 'name'
        }
      ],
      contacts: [
        {
          userId: 1,
          name: 'Frozen Yogurt'
        },
        {
          userId: 2,
          name: 'Ice cream sandwich'
        },
        {
          userId: 3,
          name: 'Eclair'
        },
        {
          userId: 4,
          name: 'Cupcake'
        },
        {
          userId: 5,
          name: 'Gingerbread'
        },
        {
          userId: 6,
          name: 'Jelly bean'
        },
        {
          userId: 7,
          name: 'Lollipop'
        },
        {
          userId: 8,
          name: 'Honeycomb'
        },
        {
          userId: 9,
          name: 'Donut'
        },
        {
          userId: 10,
          name: 'KitKat'
        }
      ]
    }
  },
  methods: {
    clickContact(id) {
      const idArray = this.listedContacts.map(elm => elm.userId)
      const clickedIndex = idArray.indexOf(id)
      this.listedContacts[clickedIndex].selected = !this.listedContacts[
        clickedIndex
      ].selected
    },
    createCancel() {
      this.dialog = false
    },
    createChannel() {
      const selectedArray = this.listedContacts.filter(target => {
        return target.selected === true
      })
      const selectedUserIdArray = selectedArray.map(elm => elm.userId)
      alert('選択されたUserIDは' + selectedUserIdArray)
      this.dialog = false
    },
    openMakeChannel() {
      this.listedContacts = this.contacts.map(contact => {
        return {
          selected: false,
          ...contact
        }
      })
      console.table(this.listedContacts)
    }
  },
  mounted() {}
}
</script>

<style>
.checkIcon {
  float: right !important;
}
.applyButton {
  margin-top: 30px !important;
}
.sideAddButton {
  color: #dbdbdb !important;
  margin: 0 0 0 0 !important;
  width: 25px !important;
  height: 25px !important;
  font-size: 20px !important;
  float: right;
}
table td,
table th {
  vertical-align: middle !important;
}
.userName {
  font-size: 16px !important;
  width: 88% !important;
}
.searchOnAllContact {
  padding: 0px 24px !important;
  margin-bottom: 20px !important;
}
.footerbuttons {
  background-color: white !important;
  width: 100% !important;
  position: absolute !important;
  bottom: 0 !important;
}
.mainContent {
  min-height: 490px !important;
  max-height: 490px !important;
}
.tableContenct {
  max-height: 330px !important;
  overflow: scroll !important;
}
</style>