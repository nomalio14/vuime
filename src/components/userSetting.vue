<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600px" lazy persistent>
      <template v-slot:activator="{ on }">
        <a v-on="on" @click="loadSetting">
              <v-avatar class="headAvatar">
                <img :src="userInfo.avatar">
              </v-avatar>
            </a>
      </template>
      <template>
      <div>
      <v-tabs
      v-model="active"
      dark
    >
    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
    <v-tab ripple :key="0">
      Account
    </v-tab>
      <v-tab-item
      :key="0"
      >
      <v-card>
        <v-card-title>
          <span class="headline">Account setting</span>
        </v-card-title>
        <v-card-text>
          <v-container class="accountSettingContainer">
            <v-layout wrap>
              <v-flex xs12 sm2>
                <v-avatar size="90" class="detailAvatar">
                <img :src="newUserInfo.avatar">
              </v-avatar>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 sm9>
                <v-text-field
                  label="Displayed name*"
                  v-model="newUserInfo.name"
                  color="teal lighten-3"
                  :error-messages="nameErrors"
                  @input="$v.newUserInfo.name.$touch()"
                  @blur="$v.newUserInfo.name.$touch()"
                  required
                  class="displayedName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="Email*"
                color="teal lighten-3"
                v-model="newUserInfo.email"
                required
                class="displayedName"
                :error-messages="emailErrors"
                @input="$v.newUserInfo.email.$touch()"
                @blur="$v.newUserInfo.email.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <template>
                <v-expansion-panel class="expansion" v-model="panel">
                <v-expansion-panel-content class="expansionHeader">
                <template v-slot:header>
                <div class="expansionText"><v-icon>https</v-icon>Change the password</div>
                </template>
                <v-text-field
                :error-messages="newPasswordErrors"
                @input="$v.newPassword.$touch()"
                @blur="$v.newPassword.$touch()"
                color="teal lighten-3"
                label="New password*"
                type="password"
                v-model="newPassword"
                required
                ></v-text-field>
                <v-text-field
                :error-messages="confirmPasswordErrors"
                @input="$v.confirmPassword.$touch()"
                @blur="$v.confirmPassword.$touch()"
                color="teal lighten-3"
                label="Confirm password*"
                type="password"
                v-model="confirmPassword"
                required></v-text-field>
                </v-expansion-panel-content>
                </v-expansion-panel>
                </template>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                color="teal lighten-3"
                label="Password*"
                type="password"
                v-model="password"
                required
                persistent-hint
                hint="required to change setting"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="cancel()">Cancel</v-btn>
          <v-btn depressed color="teal lighten-3" dark @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-tab-item>
      </v-tabs>
      </div>
      </template>
    </v-dialog>
  </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength, sameAs} from 'vuelidate/lib/validators'
import { mapState } from 'vuex';

  export default {
    mixins: [validationMixin],
    validations: {
    newUserInfo: { name: { required },
                email:  { email, required },
                },
    newPassword: { minLength: minLength(6) },
    confirmPassword: {sameAsPassword: sameAs('newPassword')}

  },
    data() {
      return {
      dialog: false,
      newUserInfo: {
        name: '',
        email: '',
        avatar: ''
      },
      newPassword: '',
      confirmPassword:'',
      password:'',
      crName:"",
      crEmail:"",
      active: null,
      panel: []
    }
    },
    mounted () {
    this.$store.dispatch('loadUserdata')
  },
    computed: {
        ...mapState({
        userInfo: state => state.userData,
        }),
        nameErrors () {
        const errors = []
        if (!this.$v.newUserInfo.name.$dirty) return errors
        !this.$v.newUserInfo.name.required && errors.push('This field is required.')
        return errors
        },
        emailErrors () {
        const errors = []
        if (!this.$v.newUserInfo.email.$dirty) return errors
        !this.$v.newUserInfo.email.email && errors.push('Correct address is required.')
        !this.$v.newUserInfo.email.required && errors.push('This field is required.')
        return errors
        },
        newPasswordErrors () {
        const errors = []
        if (!this.$v.newPassword.$dirty) return errors
        !this.$v.newPassword.minLength && errors.push('Password must have at least 6 letters.')
        return errors
        },
        confirmPasswordErrors () {
        const errors = []
        if (!this.$v.confirmPassword.$dirty) return errors
        !this.$v.confirmPassword.sameAsPassword && errors.push('Passwords must be identical.')
        return errors
        },
    },
    methods: {
            save(){
                this.$v.$touch()
                if (this.$v.$invalid) {
                } else {
                console.table(this.newUserInfo)
                this.$store.commit('updateUserData', this.newUserInfo);
                this.dialog = false
                }},
            cancel() {
                this.dialog = false
                this.panel = null
                this.$v.$reset()
                this.newUserInfo.name = this.crName
                this.newUserInfo.email = this.crEmail
                this.newPassword = ''
                this.confirmPassword = ''
                this.password = ''
            },
            loadSetting() {
                console.log(this.userInfo.name)
                this.newUserInfo = this.userInfo
                this.crName = this.userInfo.name
                this.crEmail = this.userInfo.email
                console.log('-----loadSetting-----')
            }
        },
    watch: {
    }

  }
</script>
<style>
.headAvatar {
  margin-left: 20px!important;
}
.displayedName {
    padding-top: 30px!important;
}
.expansion {
    box-shadow: initial!important;
    -webkit-box-shadow: initial!important;
}
.expansionHeader>.v-expansion-panel__header{
    padding: 0!important;
}
.expansionText {
    font-size: 16px!important;
}
.accountSettingContainer {
    padding: 0px 24px!important
}
@media screen and (max-width: 1090px) {
  .headAvatar {
  margin-right: 5px!important;
  margin-left: 15px!important;
  height: 35px!important;
  width: 35px!important;
}
}

</style>