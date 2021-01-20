<template>
  <div class="text-center mb=-3" id="app" data-app app-data="true" light>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          isdark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card class="mb-3">
        <v-card-title class="headline grey lighten-2">
          Add Users
        </v-card-title>

        <form v-on:submit.prevent="adduser">
        <template>
              <v-container fluid>
                <v-row align="center">
                  <v-col cols="6">
                    <v-subheader>
                      User
                    </v-subheader>
                  </v-col>
                    
                  <v-col cols="6">
                    <v-select
                      v-model="user"
                      :hint="`${user.name}, ${user.email}`"
                      :items="users"
                      item-text="name"
                      item-value="id"
                      label="Select"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </template>

            <template>
              <v-container fluid>
                <v-row align="center">
                  <v-col cols="6">
                    <v-subheader>
                      Role
                    </v-subheader>
                  </v-col>

                  <v-col cols="6" >
                    <v-select
                      v-model="role"
                      :hint="`${role.role_name}, ${role.description}`"
                      :items="roles"
                      item-text="role_name"
                      item-value="id"
                      label="Select"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </template>
            <v-btn class="mr-4" type="submit">
               SUBMIT
            </v-btn>
            <v-btn @click="dialog = false">
              CANCEL
            </v-btn>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
  export default {

    data () {
      return {
        user: '',
        role: '',
        users: [ {
              id: '',
              name: '',
              email: ''},
        ],
        valid: true,

        roles: [ 
                   {id: "", role_name: "", description: ""},
               ], 

        dialog: false,
        role: { role_name: '', description: '' },
        user: { name: '',email: '' },

      }
    },

        mounted() {
            this.getuser();
            this.getrole();
         },

        methods: {
            getuser: function(){
                //load Api
                axios
                .get('/api/admintasks/getUsers')
                 .then(response => {
                                console.log(response.data.data);
                                this.users = response.data.data
                             })
                        .catch(error => 
                                 console.log(error));
                        },

                    getrole: function(){
                      //load Api
                      axios
                      .get('/api/admintasks/getRole')
                      .then(response => {
                                      this.roles = response.data.data
                                  })
                              .catch(error => 
                                      console.log(error));
                              },

                      submit () {
                           this.$refs.observer.validate()
                            },


                  adduser: function(){
                      axios
                      .post('/api/admintasks/addrole', {user: this.user.id, role: this.role.id})
                      .then(response =>{
                          alert('User Has been added successfully');
                          
                      })
                      .catch(error => {
                     // error.response.status Check status code
                         console.log(error);
                      })
                  },

                  clear () {
                    this.select1 = null
                    this.select = null
                    this.$refs.observer.reset()
                  },
            }
      }
</script>