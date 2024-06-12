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
            period: "Marzo 2014 - Setembre 2019",
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
            description: "Replica della famosa piattaforma di streaming musicale Spotify con una grafica particolarmente fedele all'originale e completamente adattabile a qualsiasi tipo di dispositivo",
            skills: ["HTML", "CSS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/html-css-spotifyweb",
        },

        {
            id: 2,
            title: "Campo Minato",
            image: "/img/Campominato.jpg",
            description: "Campo Minato è una simulazione del più celebre gioco di Windows Campo Minato. Il computer genera in maniera randomica 16 numeri che saranno equivalenti alla posizione delle bombe all'interno della scacchiera. L'utente potrà cliccare sulle celle fino a quando non troverà uno dei numeri casuali estratti dal computer.Al termine verrà mostrato il punteggio totale ottenuto dall'utente e le restanti bombe presenti sulla scacchiera. Ad inizio gioco l'utente potrà selezionare 3 diverse difficoltà che riduranno il numero totale di celle sulla scacchiera. Sarà possibile ogni volta ricominciare il gioco dall'inizio selezionando la difficoltà che si preferisce.",
            skills: ["HTML", "CSS", "JavaScript"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/js-campominato-dom",
        },

        {
            id: 3,
            title: "Boolzapp",
            image: "/img/Boolzapp.jpg",
            description: "Boolzapp è una replica della piattaforma web di messaggistica più utilizzata: WhatsApp Web.Selezionando un contatto sarà possibile visulizzare la relativa conversazione nel pannello dedicato, dando la possibilità all'utente di scrivere ulteriori messaggi, ottenendo una risposta casuale da parte del computer. E' presente una barra di ricerca con cui verranno filtrate le conversazioni in base all'input inserito dall'utente. Inoltre è possibile cancellare un singolo messaggio o l'intera conversazione del contatto selezionato.",
            skills: ["HTML", "CSS", "VueJS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vue-boolzapp",
        },

        {
            id: 4,
            title: "Boolflix",
            image: "/img/Boolflix.jpg",
            description: "Boolflix è un semplice motore di ricerca di Film e serie TV, vagamente ispirato a Netflix. La Web App mostra in home page le copertine dei film e serie TV più popolari e al passaggio del mouse su di essa mostra i rispettivi dati: quest'ultimi sono ottenuti tramite chiamate API al server di The Movie DB. L'utente è in grado di cercare i titoli che più interessando inserindo la parole chiave nell'apposita barra di ricerca. Inoltre passando con il mouse si è in grado di vedere le informazioni dei film e delle serie tv",
            skills: ["VueJS", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/vite-boolflix",
        },

        {
            id: 5,
            title: "EduPrime",
            image: "/img/Eduprime.jpg",
            description: "Replica della parte grafica del sito EduPrime basata su un portale di iscrizione universitario svolta come Progetto MidTerm durante il corso di Boolean",
            skills: ["VueJS", "SASS"],
            type: "FRONT-END",
            link_github: "https://github.com/albertostizzoli/proj-html-vuejs",
        },

        {
            id: 6,
            title: "Laravel Comics",
            image: "/img/Laravelcomics.png",
            description: "Laravel Comics è uno shop online di fumetti della DC Comics con un'interfaccia creata interamente con Laravel con un database MySQL, in cui l'utente può vedere i prodotti più cercati, cliccando su qualsiasi fumetto, si può modificare il prezzo, il nome ecc. o anche cancellarlo. L'utente ha anche la possibilità di agggiungere nuovi fumetti",
            skills: ["Laravel", "MySQL"],
            type: "BACK-END",
            link_github: "https://github.com/albertostizzoli/laravel-comics-2",
        },

        {
            id: 7,
            title: "Squiddy Game",
            image: "/img/Squiddygame.jpg",
            description: "Progetto svolto in team che consiste nella realizzazione di un gioco fantasy RPG realizzato con Vue.js per il Front-End e Laravel e MySQL per il Back-End. Il gioco consiste nella scelta di un personaggio con la propria arma e classe attraverso un layout semplice e intuitivo, dopo aver scelto il giocatore viene trasportato in un’arena dove si svolgeranno combattimenti a turni. Ho contribuito a questo progetto lavorando sul layout per il Front-End e il database per il Back-End;",
            skills: ["VueJS", "Laravel", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vite-team-5",
        },

        {
            id: 8,
            title: "BDoctors",
            image: "/img/BDoctors.png",
            description: "Progetto Finale del corso di Boolean svolto in team che consiste nella realizzazione di un sito web completo con Vue.js per il Front-End e Laravel con un solido database MySQL per il Back-End: la piattaforma comprende una dashboard che consente ai medici di registrarsi, gestire il proprio profilo e di sponsorizzarlo. La parte Front-End del sito, permette ai visitatori di cercare i medici per specializzazione, voti e numero di recensioni, fornendo dettagli completi sui professionisti disponibili. Gli utenti possono inoltre lasciare recensioni e contattare i medici tramite un form che invia messaggi alla loro e-mail per fissare appuntamenti e consultazioni",
            skills: ["VueJS", "Laravel", "MySQL"],
            type: "FULL-STACK",
            link_github: "https://github.com/albertostizzoli/vue-bdoctors",
        },
    ],

});