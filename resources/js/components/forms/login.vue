<template>
    <form class="my-auto" action="" @submit.prevent="login">
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" v-model="formdata.email" placeholder="Enter email" id="email">
            <form-error v-if="errors.email" :errors="errors">
                        @{{ errors.email }}
                    </form-error>
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control"  v-model="formdata.password" placeholder="Enter password" id="pwd">
            <form-error v-if="errors.password" :errors="errors">
                        @{{ errors.password }}
                    </form-error>
        </div>
        <div class="form-group form-check">
            <label class="form-check-label">
            <input class="form-check-input"  type="checkbox"> Remember me
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mapState } from 'vuex'
import router  from '../../vue-router/router'


export default {
    
    data() {
        return {
            formdata: {
                email: "",
                password: ""
            },
            errors: '',
            }
    },

    methods: {

            ...mapActions({
                currentUser: 'currentUser/loginUser',
                redirectUser: 'currentUser/redirectuser'
            }),

            async login() 
            {
                await this.currentUser(this.formdata).
                then(()=> {
                    this.$router.push({ path: "/" })
                })
                .catch(error => {
                    console.log(error)
                })
                
            }

        }   
    } 
</script>