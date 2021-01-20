<template>
    <v-app>
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
                    <p>{{ user.name }}</p> <a href="#" @click.prevent="logout">Sign out</a>
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
            <v-container fluid>
                <v-row class="fill-height">
                        <v-col lg="4" cols="sm" class="">
                            <v-card>
                                <v-row class="no-gutters">
                                    <div class="col-auto">
                                        <div class="cyan fill-height">&nbsp;</div>
                                    </div>
                                    <div class="col pa-3 py-4 cyan--text">
                                        <h5 class="text-truncate text-uppercase">Sales</h5>
                                        <h1>53</h1>
                                    </div>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col lg="4" cols="sm" class="">
                            <v-card>
                                <v-row class="no-gutters">
                                    <div class="col-auto">
                                        <div class="primary fill-height">&nbsp;</div>
                                    </div>
                                    <div class="col pa-3 py-4 primary--text">
                                        <h5 class="text-truncate text-uppercase">Growth</h5>
                                        <h1>23%</h1>
                                    </div>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col lg="4" cols="sm" class="">
                            <v-card>
                                <v-row class="no-gutters">
                                    <div class="col-auto">
                                        <div class="success fill-height">&nbsp;</div>
                                    </div>
                                    <div class="col pa-3 py-4 success--text">
                                        <h5 class="text-truncate text-uppercase">Calls</h5>
                                        <h1>213</h1>
                                    </div>
                                </v-row>
                            </v-card>
                        </v-col>

                        <v-col lg="4" cols="sm" class="">
                            <v-card>
                                <v-row class="no-gutters">
                                    <div class="col-auto">
                                        <div class="cyan fill-height">&nbsp;</div>
                                    </div>
                                    <div class="col pa-3 py-4 cyan--text">
                                        <h5 class="text-truncate text-uppercase">Sales</h5>
                                        <h1>53</h1>
                                    </div>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col lg="4" cols="sm" class="">
                            <v-card>
                                <v-row class="no-gutters">
                                    <div class="col-auto">
                                        <div class="primary fill-height">&nbsp;</div>
                                    </div>
                                    <div class="col pa-3 py-4 primary--text">
                                        <h5 class="text-truncate text-uppercase">Growth</h5>
                                        <h1>23%</h1>
                                    </div>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col lg="4" cols="sm" class="">
                            <v-card>
                                <v-row class="no-gutters">
                                    <div class="col-auto">
                                        <div class="success fill-height">&nbsp;</div>
                                    </div>
                                    <div class="col pa-3 py-4 success--text">
                                        <h5 class="text-truncate text-uppercase">Calls</h5>
                                        <h1>213</h1>
                                    </div>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-card height="170" scrollable elevation="4" class="overflow-y-auto">
                                <v-card-text>
                                    <p>Codeply Kickstarter PBR 
                                    asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan 
                                    Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb 
                                    readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy 
                                    leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, 
                                    forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                                    <a href="//www.codeply.com" target="_new">Codeply</a>
                                    <p>Codeply Kickstarter PBR 
                                    asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan 
                                    Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb 
                                    readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy 
                                    leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, 
                                    forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
            </v-container>
      </v-main>
    </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        userdata: [],
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
            { title:"Log out", href:"#", icon:"mdi-settings-outline"}
        ],
      }
    },

    computed: {
        ...mapGetters({
        authenticated: 'currentUser/authenticated',
      }),

      user: {
          get(){
              return this.$store.state.currentUser.user
          }
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods: {

        ...mapActions({
                 signOutAction: 'currentUser/logout'
         }),

        async logout () {
        await this.signOutAction()
            .then(() => {
                this.$router.push('/login')
            })
            .catch(err =>{
                console.log(err)
            })
          }
    }

    }
</script>