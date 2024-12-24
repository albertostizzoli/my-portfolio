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
            description: " Percorso formativo della durata di 6 settimane, durante le quali ho avuto l'opportunità di approfondire i concetti fondamentali della programmazione orientata agli oggetti (OOP) utilizzando il linguaggio JAVA. Le lezioni teoriche, strutturate in modo da fornire una base solida sulle principali nozioni di OOP, sono state integrate da esercitazioni pratiche pomeridiane che ho svolto in autonomia, permettendomi di mettere in pratica quanto appreso e sviluppare una comprensione più profonda delle tematiche trattate. Il corso ha incluso anche attività di problem-solving e revisione del codice, utili per consolidare le competenze acquisite e per affrontare situazioni reali di sviluppo software.",
        },
        {
            title: "Boolean",
            name: "Jr Full Stack Web Developer Trainee",
            period: "Agosto 2023 - Febbraio 2024",
            description: "Esperienza formativa di 700 ore, caratterizzata da un forte approccio pratico, durante la quale ho studiato tecnologie sia dal lato Front-End che dal lato Back-End. Questo percorso mi ha permesso di sviluppare una solida mentalità da programmatore, affinando le mie capacità di problem-solving e approccio logico alla risoluzione delle sfide tecniche. Inoltre, ho avuto l'opportunità di collaborare attivamente in un team, partecipando allo sviluppo completo di un sito web, il che mi ha consentito di acquisire competenze non solo tecniche, ma anche relazionali, come la gestione del lavoro di squadra, la coordinazione e il rispetto delle scadenze. Grazie a questa esperienza, ho potuto migliorare la mia capacità di lavorare in modo efficace in un ambiente collaborativo e di affrontare progetti complessi in modo organizzato e orientato al risultato."
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
            description: "Replica fedele di Spotify, progettata con un'interfaccia grafica accurata e responsive, che si adatta perfettamente a qualsiasi dispositivo, sia desktop che mobile. Utilizzando esclusivamente HTML e CSS, il progetto è ottimizzato per garantire un'esperienza utente fluida e dinamica, con particolare attenzione al design e alla facilità di navigazione. L'interfaccia è pensata per gli appassionati di musica e tecnologia, offrendo un aspetto visivo curato e compatibile con diverse risoluzioni di schermo, senza rinunciare alla semplicità e all'efficacia delle tecnologie di base.",
            skills: ["HTML", "CSS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/html-css-spotifyweb",
            site: "https://spotifyalbertostizzoli.netlify.app/",
        },

        {
            id: 2,
            title: "Campo Minato",
            image: "/img/Campominato.jpg",
            description: "Campo Minato è una versione interattiva e dinamica del classico gioco di Windows, sviluppata utilizzando HTML, CSS e JavaScript. Il gioco consiste in una griglia sulla quale il computer posiziona casualmente 16 bombe. L'utente esplora la griglia cliccando sulle celle, cercando di evitare le bombe. Se una cella con una bomba viene selezionata, il gioco termina. Al termine della partita, viene mostrato il punteggio e il numero di bombe rimanenti. È possibile scegliere tra tre livelli di difficoltà, che determinano la dimensione della griglia e la posizione delle bombe. Inoltre, il gioco consente di ricominciare facilmente, selezionando il livello preferito, e offre un'esperienza di gioco coinvolgente grazie a un'interfaccia semplice ma efficace.",
            skills: ["HTML", "CSS", "JAVASCRIPT"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/js-campominato-dom",
            site: "https://campominatoalbertostizzoli.netlify.app/",
        },

        {
            id: 3,
            title: "Boolzapp",
            image: "/img/Boolzapp.jpg",
            description: "Boolzapp è una replica di WhatsApp Web, sviluppata utilizzando HTML, CSS e Vue.js, che simula un'applicazione di messaggistica in tempo reale. Gli utenti possono selezionare un contatto e visualizzare o continuare la conversazione, ricevendo risposte casuali generate dal computer. La barra di ricerca consente di filtrare facilmente le conversazioni in base all'input dell'utente, migliorando l'usabilità dell'app. È anche possibile cancellare singoli messaggi o intere conversazioni, offrendo un controllo completo sull'interazione. Il progetto utilizza Vue.js per gestire dinamicamente lo stato dell'interfaccia utente, garantendo un'esperienza fluida e reattiva.",
            skills: ["HTML", "CSS", "VUE"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vue-boolzapp",
            site: "https://boolzappalbertostizzoli.netlify.app/",
        },

        {
            id: 4,
            title: "Boolflix",
            image: "/img/Boolflix.jpg",
            description: "Boolflix è un motore di ricerca per film e serie TV, ispirato a Netflix, sviluppato utilizzando Vue.js. La home page mostra le copertine dei titoli più popolari e, passando con il mouse sopra di esse, vengono rivelati dettagli ottenuti tramite le API di The Movie DB. Gli utenti possono cercare i loro film e serie TV preferiti inserendo parole chiave nella barra di ricerca, e visualizzare informazioni aggiuntive sui titoli semplicemente passando il cursore sopra le copertine. Il progetto sfrutta Vue.js per gestire dinamicamente l'interfaccia e ottimizzare l'esperienza utente, rendendo l'interazione fluida e reattiva.",
            skills: ["VUE", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vite-boolflix",
            site: "https://boolflixalbertostizzoli.netlify.app/",
        },

        {
            id: 5,
            title: "EduPrime",
            image: "/img/Eduprime.jpg",
            description: "Replica della parte grafica del sito EduPrime, un portale di iscrizione universitaria, sviluppata utilizzando Vue.js come parte del progetto MidTerm durante il corso di Boolean. Il progetto si concentra sulla creazione di un'interfaccia utente moderna e responsiva, che simula l'esperienza di navigazione e iscrizione al portale, mantenendo un design pulito e intuitivo. Grazie all'uso di Vue.js, il progetto offre una gestione dinamica e interattiva degli elementi dell'interfaccia, migliorando l'esperienza dell'utente con un layout fluido e facilmente adattabile a diversi dispositivi.",
            skills: ["VUE", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/proj-html-vuejs",
            site: "https://eduprimealbertostizzoli.netlify.app/",
        },

        {
            id: 6,
            title: "Restaurant",
            image: "/img/Restaurant.png",
            description: "Progetto di un ristorante sviluppato utilizzando React e Bootstrap, che presenta un menù con varie categorie di piatti, come Hamburger, Pizze e Desserts. La pagina iniziale introduce l'utente con una breve presentazione del ristorante e offre un menù interattivo. Gli utenti possono cliccare sui bottoni per visualizzare i diversi tipi di piatti, suddivisi in categorie come Primi Piatti, Secondi, Hamburger, Pizze, Desserts e Bevande. Il progetto sfrutta React per la gestione dinamica dello stato dell'interfaccia e Bootstrap per il design responsivo, garantendo una navigazione fluida e un'esperienza utente ottimale.",
            skills: ["REACT", "BOOTSTRAP"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/react-restaurant",
            site: "https://ristorantepepperone.netlify.app/",
        },

        {
            id: 7,
            title: "Weather App",
            image: "/img/WeatherApp.png",
            description: "Progetto di una webapp per il Meteo sviluppata utilizzando React e Tailwind CSS. Gli utenti possono cercare i dati meteorologici tramite le API di OpenWeather per un luogo di interesse attraverso una barra di ricerca, visualizzando informazioni dettagliate come il meteo attuale, le previsioni ogni 3 ore e fino a 5 giorni. La webapp include anche grafici interattivi per visualizzare i dati di umidità e vento. Gli utenti possono salvare e rimuovere città di interesse, ottenere il luogo in cui si trovano tramite la geolocalizzazione e scegliere tra modalità Light o Dark per l'interfaccia. Il progetto utilizza React per gestire lo stato dinamico e Tailwind CSS per un design responsivo e personalizzabile, ottimizzando l'esperienza utente su qualsiasi dispositivo.",
            skills: ["REACT", "TAILWIND"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/react-weatherapp",
            site: "https://weatherappalbertostizzoli.netlify.app/",
        },

        {
            id: 8,
            title: "Laravel Comics",
            image: "/img/Laravelcomics.png",
            description: "Laravel Comics è un negozio online di fumetti dedicato ai titoli DC Comics, sviluppato utilizzando Laravel e MySQL. Gli utenti possono visualizzare i fumetti più cercati, e cliccando su un fumetto, possono modificarne il nome, il prezzo e altre informazioni, o eliminarlo dal catalogo. Il sistema permette anche di aggiungere nuovi fumetti al catalogo, consentendo agli amministratori di gestire facilmente i contenuti. Il progetto sfrutta Laravel per la gestione delle operazioni backend e MySQL per il database, offrendo un'esperienza utente semplice ed efficiente.",
            skills: ["LARAVEL", "MySQL"],
            type: "BACK-END",
            link_github: "https://github.com/albertostizzoli/laravel-comics-2",
        },

        {
            id: 9,
            title: "Squiddy Game",
            image: "/img/Squiddygame.jpg",
            description: "Progetto di squadra per la realizzazione di un gioco fantasy RPG sviluppato utilizzando Vue.js, Laravel e MySQL. Il gioco consente agli utenti di scegliere un personaggio con arma e classe tramite un'interfaccia semplice e intuitiva, per poi partecipare a combattimenti a turni all'interno di un'arena. Gli utenti possono personalizzare i propri personaggi e affrontare sfide dinamiche. Ho contribuito lavorando sul layout del sito, migliorando l'esperienza utente con un design responsivo e facile da navigare, e sulla gestione del database per garantire un'archiviazione efficace delle informazioni sui personaggi e dei risultati delle battaglie. Il progetto sfrutta Vue.js per un'interfaccia reattiva, Laravel per il backend e MySQL per il database, offrendo un'esperienza di gioco coinvolgente.",
            skills: ["VUE", "LARAVEL", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vite-team-5",
        },

        {
            id: 10,
            title: "BDoctors",
            image: "/img/BDoctors.png",
            description: "Progetto finale del corso Boolean, realizzato in team, che consiste nella creazione di un sito web completo con una dashboard per i medici. La piattaforma permette ai medici di registrarsi, gestire e sponsorizzare il proprio profilo. La home page consente ai visitatori di cercare medici in base a specializzazione, voti e numero di recensioni, offrendo dettagli completi sui professionisti. Gli utenti possono lasciare recensioni e contattare i medici tramite un modulo che invia messaggi email per fissare appuntamenti e consultazioni. Ho contribuito lavorando sul layout del sito, migliorando l'usabilità e la reattività dell'interfaccia, e sul database, per garantire un'efficace gestione delle informazioni degli utenti e dei medici. Il progetto sfrutta Vue.js per la gestione dinamica dell'interfaccia utente, Laravel per il backend e MySQL per l'archiviazione dei dati.",
            skills: ["VUE", "LARAVEL", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vue-bdoctors",
        },
    ],

});