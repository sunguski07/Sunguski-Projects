<template>
 <div class="col-md-4">
     <div class="card-group mt-2 mb-3">
        <div class="card">
            <ul class="list-group">
                <li class="list-group-item" v-for="equipment in equipments" v-bind:key="equipment.equipment_no">
                    <a class="btn"> {{ equipment.name }}</a>
                </li>
            </ul>
        </div>
     </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
                equipments: [],
                equipment: {
                        equipment_no: '',
                        name: '',
                        model: '',
                        serial_number: '',
                     }

                 }
             },

    mounted() {
            this.getequipment();
    },

    methods: {

            getequipment: function(){
                //load Api
                axios
                .get('/api/equipment')
                .then(response => {
                                this.equipments = response.data.data
                             })
                        .catch(error => 
                                 console.log(error));
                        }
            }
    }
</script>