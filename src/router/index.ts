import { createRouter, createWebHashHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import MainPage from "../components/MainPage.vue";
import PlayerPage from "../components/PlayerPage.vue";
import MainOverlayPage from "@/components/MainOverlayPage.vue";
import KartePage from "@/components/KartePage.vue";
import MeetingPage from "@/components/MeetingPage.vue";
import LeinwandPage from "@/components/LeinwandPage.vue";
import QRGenerator from "@/components/QRGenerator.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/player',
    name: 'PlayerPage',
    component: PlayerPage
  },
  {
    path: '/overlay',
    name: 'MainOverlayPage',
    component: MainOverlayPage
  },
  {
    path: '/karte',
    name: 'KartePage',
    component: KartePage
  },
  {
    path: '/meeting',
    name: 'MeetingPage',
    component: MeetingPage
  },
  {
    path: '/leinwand',
    name: 'LeinwandPage',
    component: LeinwandPage
  },
  {
    path: '/qr',
    name: 'QRGenerator',
    component: QRGenerator
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router