import { createRouter, createWebHistory } from "vue-router";

// creo le rotte delle singole pagine
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
        // Controlla se l'URL di destinazione ha un hash (es. #sezione1)
        if (to.hash) {
            // Se c'è un hash nell'URL, restituisce un oggetto con la proprietà 'el'
            // che indica l'elemento con l'id corrispondente all'hash
            return { el: to.hash }
        } else {
            // Se non c'è un hash nell'URL, restituisce un oggetto per posizionare
            // lo scroll in alto della pagina (top: 0)
            return {
                top: 0,
                // Definisce il comportamento dello scroll come istantaneo
                behavior: "instant"
            }
        }
    }

});

// Esportazione del router per l'uso nell'applicazione Vue
export { router };

