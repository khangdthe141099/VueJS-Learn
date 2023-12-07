import { createRouter, createWebHashHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import ProductDetail from "../components/ProductDetail.vue";
import Home from "../components/Home.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/list",
      name: "list",
      component: ProductList,
    },
    {
      path: "/list/:id",
      name: "detail",
      component: ProductDetail,
    },
  ],
  history: createWebHashHistory(),
});

export default router
