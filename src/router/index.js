import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      //合格证打印
    {
      path: '/thirdExt/print/ProductCertificate',
      name: 'ProductCertificate',
      component: () => import('../views/ProductCertificate.vue')
    },

    //合格证电子照
    {
      path: '/thirdExt/print/ElectronicCertificate',
      name: 'ElectronicCertificate',
      component: () => import('../views/ElectronicCertificate.vue')
    }
  ]
})

export default router
    