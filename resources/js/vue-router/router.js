import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Vuetify from '../../plugins/vuetify.js'
import profile from'../components/officers/profile.vue'
import Dashboard from'../components/officers/dashboard.vue'
import Faults from '../components/officers/faults.vue'
import Reportactivity from '../components/officers/reportactivity.vue'
import Resfaults from '../components/officers/resolvedfaults.vue'
import Activities from '../components/officers/activities.vue'
import Admindash from '../components/admin/admindash.vue'
import login from '../components/forms/login.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
      { path: "/officer", 
        component: profile,
        name:'officer',
        meta: {
            requireAuth: true,
            adminAuth: false,
            officerAuth: true
        },
  
        children: [
          
          {
            path: '/Overview',
            component: Dashboard
          },
  
          {
            path: '/faults',
            component: Faults
          },
  
          {
            path: '/activities',
            component: Activities
          },
          {
            path: '/reportactivity',
            component: Reportactivity
          },
          {
            path: '/resolvedfaults',
            component: Resfaults
          }
        ]
      },
  
      {
          path: '/login',
          name: 'login',
          component: login
      },
  
      { path: "/admin",
        component: Admindash, 
        name: 'admin',
        meta: {
              requireAuth: true,
              adminAuth: true,
              officerAuth: false
          },
        children: [
          
          {
            path: '/Overview',
            component: Dashboard
          },
  
          {
            path: '/faults',
            component: Faults
          },
  
          {
            path: '/activities',
            component: Activities
          },
          {
            path: '/reportactivity',
            component: Reportactivity
          },
          {
            path: '/resolvedfaults',
            component: Resfaults
          }
        ]
      }
  ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth && record.meta.adminAuth )) {
        if(store.getters.IsAdmin == true) {
            next({
              path: "/admin"
            });
            }
            else{
            next("/login");
        }
    } else {
        next();
    }
  });


export default router