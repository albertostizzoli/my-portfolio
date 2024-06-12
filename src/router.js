import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue'

//creo l'oggetto router e definizione delle rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/project/:id',
            name: 'project',
            component: SingleProject,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, }
        } else {
            return {
                top: 0,
                behavior: "instant"
            }
        }
    }
});

// Esportazione del router per l'uso nell'applicazione Vue
export { router };

