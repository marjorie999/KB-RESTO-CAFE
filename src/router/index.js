import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/users/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/users/Menu.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import PlaceOrder from '../views/users/PlaceOrder.vue'
import Orders from '../views/admin/Orders.vue'
import UserOrders from '../views/users/UserOrders.vue'
import AdminMenu from '../views/admin/AdminMenu.vue'

const router =createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/menu', name: 'Menu', component: Menu},
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register},
        {path: '/place_order/:id', name: 'PlaceOrder', component: PlaceOrder},
        {path: '/manage_order', name: 'Orders', component: Orders},
        {path: '/my_order', name: 'UserOrders', component: UserOrders},
        {path: '/manage_menu', name: 'AdminMenu', component: AdminMenu},
    ]
})

export default router;