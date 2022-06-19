import vue from "vue"
import VueRouter from "vue-router"

import Form from './components/Form.vue'
import Usuarios from './components/Usuarios.vue'

vue.use(VueRouter)

export const router = new VueRouter({
    node: "history",
    routes: [
        {path: "/", redirect: "/form"},
        {path: "/form", component: Form},
        {path: "/usuarios", component: Usuarios},
        {path: "*", redirect: "/"}, //cuando no existe la ruta
]
})