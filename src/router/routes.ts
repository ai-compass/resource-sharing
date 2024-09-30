import Layout from "@/layout/index.vue";
import DetailLayout from "@/layout/detail.vue";
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
          title: "搜索"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "分类"
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
  },
  {
    path: "/detail",
    name: "Detail",
    component: DetailLayout,
    children: [
      {
        path: "quark-course",
        name: "QuarkCourse",
        component: () => import("@/views/quark/index.vue"),
        meta: {
          title: "免费领空间"
        }
      },
      {
        path: "bdsm",
        name: "BDSM",
        component: () => import("@/views/thunder/index.vue"),
        meta: {
          title: "疼痛的爱系列"
        }
      },
      {
        path: "list/:type/:from/:name",
        name: "List",
        component: () => import("@/views/list/index.vue"),
        meta: {
          title: "详情"
        }
      },
      {
        path: "disorder-list/:type/:from/:name",
        name: "DisorderList",
        component: () => import("@/views/list/disorderList.vue"),
        meta: {
          title: "详情"
        }
      }
    ]
  }
];

export default routes;
