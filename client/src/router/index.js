import Vue from 'vue'
import Router from 'vue-router'

// Electrolux
import BroomIndex from '@/components/IndexBroom'
import BroomCreate from '@/components/CreateBroom'
import BroomEdit from '@/components/EditBroom'
import BroomShow from '@/components/ShowBroom'

Vue.use(Router)

export default new Router({
  routes: [
    // Electrolux
    {
      path: '/brooms',
      name: 'brooms',
      component: BroomIndex
    },
    {
      path: '/broom/create',
      name: 'broom-create',
      component: BroomCreate
    },
    {
      path: '/broom/edit/:broomId',
      name: 'broom-edit',
      component: BroomEdit
    },
    {
      path: '/broom/:broomId',
      name: 'broom',
      component: BroomShow
    },

  ]
})
