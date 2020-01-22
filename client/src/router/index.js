import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/UpdatePassword',
    name: 'UpdatePassword-pc',
    component: () => import('../views/pc/UpdatePassword')
  },
  {
    path: '/ResourcesManage',
    component: () => import('../views/pc/ResourcesManage'),
    children:[
      {
        path: '/',
        name: 'ResourcesManage-pc',
        component: () => import('../views/pc/children/ResourcesManageOverView')
      },
      {
        path: '/ResourcesManageAddView',
        name: 'ResourcesManageAddView-pc',
        component: () => import('../views/pc/children/ResourcesManageAddView')
      },
      {
        path: '/ResourcesManageUpdateView',
        name: 'ResourcesManageUpdateView-pc',
        component: () => import('../views/pc/children/ResourcesManageUpdateView')
      },
      {
        path: '/ResourcesManageDeleteView',
        name: 'ResourcesManageDeleteView-pc',
        component: () => import('../views/pc/children/ResourcesManageDeleteView')
      }
    ]
  },
  {
    path: '/pc',
    component: () => import('../views/pc/Home'),
    children:[
      {
        path:'/',
        name: 'home-pc',
        component:()=>import('../views/pc/children/Home')
      },
      {
        path: '/publicresources',
        name: 'publicresources-pc',
        component:()=>import('../views/pc/children/PublicResources')
      },
      {
        path: '/usershare',
        name: 'usershare-pc',
        component:()=>import('../views/pc/children/UserShare')
      },
      {
        path: '/privatesources',
        name: 'privatesources-pc',
        component:()=>import('../views/pc/children/PrivateResources')
      },
      {
        path: '/about',
        name: 'about-pc',
        component:()=>import('../views/pc/children/About')
      }
    ]
  },
  {
    path: '/phone',
    name: 'home-phone',
    component: () => import('../views/phone/Home')
  }
]

const router = new VueRouter({
  routes
})

export default router