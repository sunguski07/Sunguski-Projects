<template>
  <div class="col-md-4 mb-3">
    <div class="card-group mt-2 mb-3">
        <div class="card">
          <form v-on:submit.prevent="addfault" class="mr-2 ml-2 mb-2">
              <div class="form-group">
                <label for="sel1">Select list (select one):</label>
                <select v-model="fault.equipment" class="form-control" id="sel1" name="sellist1">
                  <option>Computer</option>
                  <option>Scanner</option>
                  <option>Printer</option>
                  <option>Photocopier</option>
                </select>
              </div>
              <div class="form-group">
                <input v-model="fault.occured_on" type="date" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              </div>
              <div class="form-group">
                <label for="comment">Comment:</label>
              <textarea v-model="fault.description" class="form-control" rows="5" id="comment"></textarea>
            </div>
              <button type="submit" class="btn btn-primary">Report</button>
          </form>
        </div>
    </div>
  </div>
</template>

<script> 
export default {
    data(){
            return{
              faults:[],
              fault: {
                fault_no: '',
                status: '',
                attended_by: '',
                r_no: '',
                occured_on: '',
                description: '',
                equipment: ''
              }
            }
    },

    methods: {

           addfault() {
             axios.post('/api/fault', { 
               equipment: this.fault.equipment,
               description: this.fault.description,
               occured_on: this.fault.occured_on
              })
              .then(response => {
                console.log(response.data.data);
                alert('Fault has been reported');
              })
              .catch((err) => console.log(err));
            }
    }
  
}
</script>