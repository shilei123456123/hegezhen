import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      //合格证打印
    {
      path: '/thirdExt/print/ProductCertificate',
      name: 'ProductCertificate',
      component: () => import('../views/ProductCertificate/ProductCertificate.vue')
    },
    {
      path: '/thirdExt/print/ProductCertificate1',
      name: 'ProductCertificate1',
      component: () => import('../views/ProductCertificate/ProductCertificate1.vue')
    },

    //合格证电子照
    {
      path: '/thirdExt/print/ElectronicCertificate',
      name: 'ElectronicCertificate',
      component: () => import('../views/ElectronicCertificate/ElectronicCertificate.vue')
    },
    {
      path: '/thirdExt/print/ElectronicCertificate1',
      name: 'ElectronicCertificate1',
      component: () => import('../views/ElectronicCertificate/ElectronicCertificate1.vue')
    }
  ]
})

export default router
    