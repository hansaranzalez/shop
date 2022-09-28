import { createRouter, createWebHistory } from 'vue-router';
import appStore from './store/appStore';
import ProductsView from './views/productsView.vue';
import ProductView from './views/productView.vue';
import shoppingCartView from './views/shoppingCartView.vue';

const routes = [
  { path: '/', component: ProductsView, name: 'productSearch', meta: { requiresAuth: false } },
  { path: '/product/:id', name: 'product', component: ProductView, meta: { requiresAuth: false } },
  { path: '/shopping-cart', name: 'shoppingCart', component: shoppingCartView, meta: { requiresAuth: false } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const isUserAuthenticated = localStorage.getItem('cactus-token');
  let authrequired = false
  if (to && to.meta && to.meta.requiresAuth) authrequired = true
  if (authrequired) {
    if (isUserAuthenticated) {
      if (to.name === 'login') {
        router.push('/');
        return false
      } else {
        next()
      }
    } else {
      if (to.name !== 'login') {

        router.push('/login');
        return false
      }
      next()
    }
  } else {
    if (isUserAuthenticated && to.name === 'login') {
      router.push('/');
      return false
    } else {
      next()
    }
  }
});

router.beforeEach((to, from) => {
  if (to.name === 'product') {
    if (from.name === 'shoppingCart') {
      appStore.setGoBackRoute({ name: 'shoppingCart', params: {} });
    } else {
      appStore.setGoBackRoute({ name: 'productSearch', params: {} });
    }
  }
  if (to.name === 'shoppingCart') {
    if (from.name === 'productSearch') {
      appStore.setGoBackRoute({ name: 'productSearch', params: {} });
    } else if (from.name === 'product') {
      appStore.setGoBackRoute({ name: 'product', params: { id: from.params.id } });
    }
    
  };
  if (to.name === 'productSearch') appStore.setGoBackRoute({
    name: 'productSearch',
    params: {}
  });
});


export default router;