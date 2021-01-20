<template>
    <v-container>
        <v-row>
          <v-col class="lg-12">
              <v-col md="8" v-for="activity in activities" v-bind:key="activity.activity_id">
                  <v-card
                      color="light-blue lighten-5">
                      <v-card-title>
                          <h3>{{ activity.activity_type}}</h3>
                      </v-card-title>
                      <v-card-subtitle>
                          <p> Occured on {{ activity.date}}</p>
                    </v-card-subtitle>
                      <v-card-text>
                        <p class="indigo--text">
                          {{ activity.description}}
                        </p>
                        <div class="text--primary">
                         
                        </div>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          text
                          color=""
                        >
                         <p class="">{{ activity.name}}</p>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
              </v-col>

              <v-col md="3">
                <p class="">Recent Activities<v-icon>mdi-av-timer</v-icon></p>
                    <v-card>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">headline</h3>
                          <div>description</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn text color="primary">text</v-btn>
                        <v-btn text color="primary">text</v-btn>
                      </v-card-actions>
                    </v-card>
              </v-col>
           </v-col>  
       </v-row>
    </v-container>
</template>

<script>
export default {
  data()
  {
    return{
            activities: [],
            activity: {
                        activity_id: '',
                        activity_type: '',
                        description: '',
                        date: '',
                        done_by: '',
                        username: '',

             }
      }
  },

  mounted(){
        this.getactivities();

  },

  methods: {
          getactivities: function()
            {
                axios
                    .get('api/activity')
                    .then(response => {
                        this.activities = response.data.data
                    });
            }
  }
}
</script>