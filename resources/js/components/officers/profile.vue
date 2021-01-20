<template>
<v-app>
    <div></div>
    <v-app-bar app color="primary" dark elevation="0">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-icon>mdi-account</v-icon>

        </v-app-bar>
       
        <v-navigation-drawer 
            v-model="drawer" 
            app
            mini-variant.synch = "mini"
            floating
           
            >

            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate">
                    <p>{{ user.name }}</p>
                </v-list-item-content>
                <v-btn icon small>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
      </v-main>
    </v-app>
</template>


<script>
  export default {

    props: ['users'],

    data () {
      return {
        userdata: [],
        user: {
            id: '',
            name: '',
            email: '',
        },

        dialog: false,
        drawer: false,
        group: null,
        items: [
            { title:"Home", href:"/Overview", icon:"mdi-home-outline" },
            { title:"Faults", href:"/faults", icon:"mdi-shield-account" },
            { title:"Resolved faults", href:"/resolvedfaults", icon:"mdi-palette-swatch" },
            { title:"Activities", href:"/activities", icon:"mdi-account-search-outline" },
            { title:"Issues", href:"/issues", icon:"mdi-bus-clock" },
            { title:"Reports", href:"/reports", icon:"mdi-settings-outline" },
        ],
      }
    },

    created() {
        this.getuserinfo();
    },

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods: {
          logout: function(){
            document.getElementById('logout-form').submit();
          },

          getuserinfo: function(){
                    this.userdata = this.users;
                }
          }
    }
</script>