import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Search from "@/views/search/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Search" },
    children: [
      {
        path: "search",
        name: "Search",
        component: Search,
        meta: {
          title: "美剧查询"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "更多"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "说明",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
