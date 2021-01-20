<template>
    <div class="col-md-4">
        <div class="card-group mt-2 mb-3">
            <div class="card">
                <div class="card-header"><h3>Show Faults</h3></div>
                <div class="card-body">
                    <div class="fault bg-white">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faults: [],
            fault: {
                fault_no: '',
                description: '',
                equipment: '',
                status: '',
                attended_by: '',
                r_no: '',
                occured_no: ''
            }
        }
    },

     mounted() {
            this.getfaults();
    },

    methods: {

            getfaults: function(){
                //load Api
                axios
                .get('/api/fault')
                 .then(response => {
                                this.equipments = response.data.data
                             })
                        .catch(error => 
                                 console.log(error));
                        }
            }
}
</script>