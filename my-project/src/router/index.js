import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/admin/',
    name: 'header-admin-view',
    component: () => import('../views/administration/HeaderAdministration.vue'),
    children: [
      {
        path: 'customer-management',
        component: () => import('../views/administration/CustomerManagement.vue')
      },
      {
        path: 'room-management',
        component: () => import('../views/administration/RoomManagement/RoomManagement.vue'),
        children: [
          {
            path: 'room-order-information',
            component: () => import('../views/administration/RoomManagement/RoomOrderInfo.vue')
          },
          {
            path: ':id/image',
            component: () => import('../views/administration/RoomManagement/ImageRoomManagement.vue')
          },
          {
            path: 'edit/:id',
            component: () => import('../views/administration/RoomManagement/RoomEdit.vue')
          },
          {
            path: 'orders/:id',
            component: () => import('../views/administration/RoomManagement/OrderList.vue')
          }
        ]
      },
      {
        path: 'order-management',
        component: () => import('../views/administration/OrderManagement/OrderManagement.vue'),
        children:[
          {
            path: 'order-list',
            component: () => import('../views/administration/OrderManagement/OrderListManagement.vue')

          }
        ]
      }
    ]

  },
  {
    path:'/',
    name:'header-view',
    component:()=> import('../views/main_interface/HeaderMain.vue'),
    children:[
      {
        path:'thong-tin-phong',
        component:()=>import('../views/main_interface/RoomInfo.vue')
      },
      {
        path:'thong-tin-chi-tiet',
        component:()=>import('../views/main_interface/RoomDetail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
