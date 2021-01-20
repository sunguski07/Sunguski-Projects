<template>
<v-app>
    <v-container grid-md class="">
        <v-row>
            <v-col lg="12" cols="md" v-for="fault in faults" v-bind:key="fault.fault_no">
                <v-card>
                    <v-card-title>
                        <h3>{{ fault.name}}</h3>
                    </v-card-title>
                    <v-card-subtitle>
                        <p> Occured on{{ fault.oocured_on}}</p>
                    </v-card-subtitle>
                    <v-card-text>
                        <p class=" mb-0  indigo--text" color="primary">{{ fault.description }}</p>
                    </v-card-text>
                </v-card>
             </v-col>
        </v-row>
    </v-container>
</v-app>
</template>

<script>
export default {
    data() {
        return{
            faults: [],
            fault:  {
                    fault_no: '',
                    equipment: '',
                    description: '',
                    status: '',
                    occured_on: '',
                    name: '',
                    r_no: '',
            }
        }
    },

    mounted() {
        this.getfaults();
    },

    methods: {
            getfaults: function() {
                axios
                .get('/api/fault')
                .then(response => {
                    this.faults = response.data.data
                })
            }
    }
}
</script>