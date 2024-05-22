import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SettingsMainView from "@/views/settings/SettingsMainView.vue"
import DatasetsView from "@/views/DatasetsView.vue"
import DocsView from "@/views/DocsView.vue"
import ModelsView from "@/views/ModelsView.vue"
import PredictionsView from "@/views/PredictionsView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/docs",
            name: "docs",
            component: DocsView,
        },
        {
            path: "/datasets",
            name: "datasets",
            component: DatasetsView,
        },
        {
            path: "/models",
            name: "models",
            component: ModelsView,
        },
        {
            path: "/predictions",
            name: "predictions",
            component: PredictionsView,
        },
        {
            path: "/settings",
            name: "settings",
            component: SettingsMainView,
        },
    ],
})

export default router
