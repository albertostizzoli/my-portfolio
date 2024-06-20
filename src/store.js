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
            name: "JAVASCRIPT",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
            name: "VUEJS",
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
            description: "Replica fedele di Spotify, con un'interfaccia grafica accurata fedele all'originale e adattabile a qualsiasi dispositivo. Un progetto ideale per appassionati di musica e tecnologia!",
            skills: ["HTML", "CSS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/html-css-spotifyweb",
        },

        {
            id: 2,
            title: "Campo Minato",
            image: "/img/Campominato.jpg",
            description: "Campo Minato è una versione del classico gioco di Windows. Il computer posiziona casualmente 16 bombe sulla scacchiera. L'utente clicca sulle celle finché non trova una bomba. Alla fine, viene mostrato il punteggio e le bombe rimanenti. Si può scegliere tra 3 livelli di difficoltà e ricominciare il gioco selezionando il livello preferito.",
            skills: ["HTML", "CSS", "JavaScript"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/js-campominato-dom",
        },

        {
            id: 3,
            title: "Boolzapp",
            image: "/img/Boolzapp.jpg",
            description: "Boolzapp è una replica di WhatsApp Web. Selezionando un contatto, si può visualizzare e continuare la conversazione, ricevendo risposte casuali dal computer. La barra di ricerca permette di filtrare le conversazioni in base all'input dell'utente. È possibile cancellare singoli messaggi o intere conversazioni.",
            skills: ["HTML", "CSS", "VueJS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vue-boolzapp",
        },

        {
            id: 4,
            title: "Boolflix",
            image: "/img/Boolflix.jpg",
            description: "Boolflix è un motore di ricerca per film e serie TV, ispirato a Netflix. La home page mostra le copertine dei titoli più popolari e, passando con il mouse, rivela dettagli ottenuti tramite API da The Movie DB. Gli utenti possono cercare i loro titoli preferiti inserendo parole chiave nella barra di ricerca e visualizzare informazioni sui film e le serie TV passando con il mouse sulle copertine.",
            skills: ["VueJS", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vite-boolflix",
        },

        {
            id: 5,
            title: "EduPrime",
            image: "/img/Eduprime.jpg",
            description: "Replica della parte grafica del sito EduPrime basata su un portale di iscrizione universitario svolta come Progetto MidTerm durante il corso di Boolean.",
            skills: ["VueJS", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/proj-html-vuejs",
        },

        {
            id: 6,
            title: "Laravel Comics",
            image: "/img/Laravelcomics.png",
            description: "Laravel Comics è un negozio online di fumetti della DC Comics. Gli utenti possono visualizzare i fumetti più cercati e, cliccando su un fumetto, modificarne il prezzo, il nome e altro, oppure cancellarlo. È anche possibile aggiungere nuovi fumetti al catalogo.",
            skills: ["Laravel", "MySQL"],
            type: "BACK-END",
            link_github: "https://github.com/albertostizzoli/laravel-comics-2",
        },

        {
            id: 7,
            title: "Squiddy Game",
            image: "/img/Squiddygame.jpg",
            description: "Progetto di squadra per la realizzazione di un gioco fantasy RPG. Il gioco permette di scegliere un personaggio con arma e classe tramite un'interfaccia semplice e intuitiva, per poi partecipare a combattimenti a turni in un'arena. Ho contribuito lavorando sul layout del sito e sul database.",
            skills: ["VueJS", "Laravel", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vite-team-5",
        },

        {
            id: 8,
            title: "BDoctors",
            image: "/img/BDoctors.png",
            description: "Progetto finale del corso Boolean, realizzato in team, consiste nella creazione di un sito web completo che include una dashboard per i medici, dove possono registrarsi, gestire e sponsorizzare il proprio profilo. La Home page permette ai visitatori di cercare medici per specializzazione, voti e numero di recensioni, fornendo dettagli completi sui professionisti. Gli utenti possono lasciare recensioni e contattare i medici tramite un form che invia messaggi email per fissare appuntamenti e consultazioni. Ho contribuito lavorando sul layout del sito e sul database.",
            skills: ["VueJS", "Laravel", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vue-bdoctors",
        },
    ],

});