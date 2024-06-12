// Importazione dei file di stile principali del progetto
import './assets/styles/main.scss'

// Importazione della funzione createApp da Vue per creare l'applicazione Vue
import { createApp } from 'vue'
// Importazione del componente radice dell'applicazione
import App from './App.vue'

// Importazione del router definito in router.js
import { router } from './router.js'

// Creazione di un'applicazione Vue
const app = createApp(App);
// Utilizzo del router nell'applicazione Vue
app.use(router);
// Montaggio dell'applicazione Vue nell'elemento con id "app" nel DOM
app.mount('#app');

