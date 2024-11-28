// Importazione della funzione reactive da Vue per creare un oggetto reattivo
import { reactive } from "vue";

// Creazione e esportazione dell'oggetto store contenente i dati dell'applicazione
export const store = reactive({

    // Flag per la visualizzazione del portfolio
    portfolio: false,

    // Array di oggetti contenente le skills
    skills: [
        {
            name: "HTML",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
        },
        {
            name: "CSS",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
        },
        {
            name: "BOOTSTRAP",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
        },
        {
            name: "TAILWIND",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
        },
        {
            name: "JAVASCRIPT",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
            name: "REACT",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
        },
        {
            name: "VUE",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
        },
        {
            name: "SASS",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
        },
        {
            name: "PHP",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
        },
        {
            name: "MySQL",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        },
        {
            name: "LARAVEL",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
        },
        {
            name: "JAVA",
            icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg"
        },
    ],

    // Array di oggetti contenente le esperienze
    experiences: [
        {
            title: "Experis Academy",
            name: "Java Developer",
            period: "Marzo 2024 - Maggio 2024",
            description: "Percorso formativo di 6 settimane in cui ho avuto modo di approfondire i fondamentali dell'OOP tramite il linguaggio JAVA, il tutto seguendo lezioni di teoria ed esercitazioni pomeridiane svolte in autonomia",
        },
        {
            title: "Boolean",
            name: "Jr Full Stack Web Developer Trainee",
            period: "Agosto 2023 - Febbraio 2024",
            description: "Esperienza di 700 ore dal forte approccio pratico studiando tecnologie sia dal lato Front-End che dal lato Back-End. Questo mi ha permesso di sviluppare il mindset di programmatore, affinità al problem-solving, ma anche di collaborare in team per lo sviluppo di un sito web completo, acquisendo competenze di collaborazione e gestione delle scadenze."
        },
        {
            title: "Stizzoli S.P.A",
            name: "Addetto al magazzino filatura / Smacchinatore di macchine da maglieria (Shima Seiki)",
            period: "Marzo 2014 - Settembre 2019",
            description:
            "<ul class=\"ps-4\">" +
            "<li>Responsabile della preparazione delle serie di capi da mandare in produzione e controllo dell’entrata e uscita delle materie prime attraverso l’azienda;</li>" +
            "<li>Risolvere problemi legati alla produzione;</li>" +
            "<li>Responsabile della produzione di serie di capi con controllo qualità e quantità del prodotto in modo da poter rispettare le esigenze del cliente;</li>" +
            "<li>Manutenzione e pulizia durante la stagione estiva delle macchine da maglieria;</li>" +
            "</ul>"
        },
    ],


    // Array di oggetti contenente i progetti
    projects: [
        {
            id: 1,
            title: "Spotify",
            image: "/img/Spotify.jpg",
            description: "Replica fedele di Spotify, con un'interfaccia grafica accurata e adattabile a qualsiasi dispositivo. Un progetto ideale per appassionati di musica e tecnologia!",
            skills: ["HTML", "CSS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/html-css-spotifyweb",
            site: "https://spotifyalbertostizzoli.netlify.app/",
        },

        {
            id: 2,
            title: "Campo Minato",
            image: "/img/Campominato.jpg",
            description: "Campo Minato è una versione del classico gioco di Windows. Il computer posiziona casualmente 16 bombe sulla scacchiera. L'utente clicca sulle celle finché non trova una bomba. Alla fine, viene mostrato il punteggio e le bombe rimanenti. Si può scegliere tra 3 livelli di difficoltà e ricominciare il gioco selezionando il livello preferito.",
            skills: ["HTML", "CSS", "JAVASCRIPT"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/js-campominato-dom",
            site: "https://campominatoalbertostizzoli.netlify.app/",
        },

        {
            id: 3,
            title: "Boolzapp",
            image: "/img/Boolzapp.jpg",
            description: "Boolzapp è una replica di WhatsApp Web. Selezionando un contatto, si può visualizzare e continuare la conversazione, ricevendo risposte casuali dal computer. La barra di ricerca permette di filtrare le conversazioni in base all'input dell'utente. È possibile cancellare singoli messaggi o intere conversazioni.",
            skills: ["HTML", "CSS", "VUE"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vue-boolzapp",
            site: "https://boolzappalbertostizzoli.netlify.app/",
        },

        {
            id: 4,
            title: "Boolflix",
            image: "/img/Boolflix.jpg",
            description: "Boolflix è un motore di ricerca per film e serie TV, ispirato a Netflix. La home page mostra le copertine dei titoli più popolari e, passando con il mouse, rivela dettagli ottenuti tramite API da The Movie DB. Gli utenti possono cercare i loro titoli preferiti inserendo parole chiave nella barra di ricerca e visualizzare informazioni sui film e le serie TV passando con il mouse sulle copertine.",
            skills: ["VUE", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vite-boolflix",
            site: "https://boolflixalbertostizzoli.netlify.app/",
        },

        {
            id: 5,
            title: "EduPrime",
            image: "/img/Eduprime.jpg",
            description: "Replica della parte grafica del sito EduPrime basata su un portale di iscrizione universitario svolta come Progetto MidTerm durante il corso di Boolean.",
            skills: ["VUE", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/proj-html-vuejs",
            site: "https://eduprimealbertostizzoli.netlify.app/",
        },

        {
            id: 6,
            title: "Restaurant",
            image: "/img/Restaurant.png",
            description: "Progetto di un ristorante con un menù contenente varie categorie di piatti come Hamburger o Pizze svolto come parte di studio autodidatta del framework React, la pagina viene presentata all'utente con una presentazione del ristorante e un menù con dei bottoni che cliccandoci sopra può vedere vari Primi Piatti, Secondi, Hamburger, Pizze, Desserts e Bevande",
            skills: ["REACT", "BOOTSTRAP"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/react-restaurant",
            site: "https://ristorantepepperone.netlify.app/",
        },

        {
            id: 7,
            title: "Weather App",
            image: "/img/WeatherApp.png",
            description: "Progetto di una webapp del Meteo in cui l'utente attraverso una barra di ricerca può ottenere i dati meteorologici del proprio luogo di interesse quelli attuali, ogni 3 ore e fino a 5 giorni e, attraverso un grafico vede i dati di Umidità e Vento. L'utente può anche salvare/rimuovere le città interessate, ottenere il luogo dove si trova tramite Geolocalizzazione e scegliere se visitare l'applicazione in modalità Light o Dark",
            skills: ["REACT", "TAILWIND"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/react-weatherapp",
            site: "https://weatherappalbertostizzoli.netlify.app/",
        },

        {
            id: 8,
            title: "Laravel Comics",
            image: "/img/Laravelcomics.png",
            description: "Laravel Comics è un negozio online di fumetti della DC Comics. Gli utenti possono visualizzare i fumetti più cercati e, cliccando su un fumetto, modificarne il prezzo, il nome e altro, oppure cancellarlo. È anche possibile aggiungere nuovi fumetti al catalogo.",
            skills: ["LARAVEL", "MySQL"],
            type: "BACK-END",
            link_github: "https://github.com/albertostizzoli/laravel-comics-2",
        },

        {
            id: 9,
            title: "Squiddy Game",
            image: "/img/Squiddygame.jpg",
            description: "Progetto di squadra per la realizzazione di un gioco fantasy RPG. Il gioco permette di scegliere un personaggio con arma e classe tramite un'interfaccia semplice e intuitiva, per poi partecipare a combattimenti a turni in un'arena. Ho contribuito lavorando sul layout del sito e sul database.",
            skills: ["VUE", "LARAVEL", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vite-team-5",
        },

        {
            id: 10,
            title: "BDoctors",
            image: "/img/BDoctors.png",
            description: "Progetto finale del corso Boolean, realizzato in team, consiste nella creazione di un sito web completo che include una dashboard per i medici, dove possono registrarsi, gestire e sponsorizzare il proprio profilo. La Home page permette ai visitatori di cercare medici per specializzazione, voti e numero di recensioni, fornendo dettagli completi sui professionisti. Gli utenti possono lasciare recensioni e contattare i medici tramite un form che invia messaggi email per fissare appuntamenti e consultazioni. Ho contribuito lavorando sul layout del sito e sul database.",
            skills: ["VUE", "LARAVEL", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vue-bdoctors",
        },
    ],

});