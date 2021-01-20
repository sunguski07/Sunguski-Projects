import axios from 'axios'
import { router } from '../../vue-router/router'

axios.defaults.withCredentials = true

export default {
  namespaced: true,

  state: {
    authenticated: false,
    IsAdmin: false,
    IsOfficer: false,
    IsRoom: false,
    formdata: {},
    user: {},
    token: '',
    },

  

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },

    SET_USER (state, value) {
      state.user = value
    },

    SET_TOKEN (state, value) {
      state.token = value
      
    },

    IsAdmin (state, value) {
      state.IsAdmin = value
    },

    IsOfficer (state, value){
      state.IsAdmin = value
    },

    IsRoom (state, value){
      state.IsAdmin = value
    },
  },

  getters: {
    authenticated (state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    },

    token (state) {
      return state.token
    },

    IsAdmin (state) {
      return state.IsAdmin
    },

    IsOfficer (state) {
      return state.IsOfficer
    },

    IsRoom (state) {
      return state.IsRoom
    }
  },

  actions: {
    loginUser( { dispatch }, formdata ) {
            // Login..
         axios.get('/sanctum/csrf-cookie').then(response => {
              // Login...
                axios.post('/login', {
                  email: formdata.email, 
                  password: formdata.password
                })
                .then(() => {
                    return dispatch('getDetails')
                })
                .catch(error => {
                  alert(error.response.data.msg)
              })

             });
           
     },

    async logout ({ dispatch }) {
      await axios.post('/logout')

    },

    getDetails( { commit, dispatch }) {

        return axios.get('/api/user').then((response) => {

            if(response.data.role)
            {
                let role = response.data.role

                if(role.name == 'ADMIN')
                {
                  commit('IsAdmin', true)
                }
                else if(role.name == 'OFFICER')
                {
                  commit('IsOfficer', true)
                }
                else(role.name =='ROOM')
                {
                  commit('IsRoom', true)
                }
            }

            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', response.data.user)
            commit('SET_TOKEN', response.data.token)
          }).catch(() => {
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', null)
          })
      }
  }

}
