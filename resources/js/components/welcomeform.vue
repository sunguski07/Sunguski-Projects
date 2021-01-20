<template>
    <v-card>
        <form class="col-md-12">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select v-model="officer" :value="officer.first_name" class="form-control" id="exampleFormControlSelect1">
                    <option v-for="officer in officers" v-bind:key="officer.officer_id">
                        {{ officer.first_name }}
                    </option>
                </select>
            </div>
            <button type="button" class="btn btn-outline-danger">Danger</button>
        </form>
    </v-card>
</template>

<script>
export default {

             data() {
                 return {
                    officers: [],
                    officer:{
                        officer_id:'',
                        first_name: '',
                        last_name: ''
                             }
                         }
                     },

             mounted() {
                 this.fetchofficers();
             },

             methods: {   
                        fetchofficers: function() {
                        //load API
                        axios
                        .get('/api/officer')
                        .then(response => {
                                this.officers = response.data.data
                             })
                        .catch(error => 
                                 console.log(error));
                        }
                     }
            }
</script>