<template>
    <div class="container" v-if="project">
        <div class="row">
            <div class="col info">
                <div class="position-relative">
                    <!-- pulsante "Indietro" posizionato a sinistra con position-absolute (Bootstrap) -->
                    <router-link :to="{ name: 'home' }"
                        class="btn btn-sm back position-absolute start-0 top-50 translate-middle-y">
                        <i class="fa-solid fa-arrow-left me-2"></i>Indietro
                    </router-link>
                    <!-- titolo del progetto -->
                    <h1 class="intro">{{ project.title }}</h1>
                </div>
            </div>
        </div>
        <!-- immagine del progetto -->
        <div class="image">
            <img :src="project.image" alt="image-detail">
        </div>

        <!-- Selettore tab -->
        <div class="tab-selector">
            <div class="tab-background">
                <!-- Indicatore visivo della scheda attiva -->
                <div class="tab-indicator" :style="{ left: indicatorLeft, width: indicatorWidth }"></div>
                <button v-for="(tab, index) in tabs" :key="tab.id" class="tab-button"
                    :class="{ active: activeTab === tab.id }" @click="selectTab(tab.id, index)">
                    {{ tab.label }}
                </button>
            </div>
        </div>
    </div>

    <!-- Contenuto del tab -->
    <div class="content">
        <!-- descrizione -->
        <div v-if="activeTab === 'description'" class="description">
            <h2 class="sub-title mt-5">Descrizione</h2>
            <p class="paragraph">{{ project.description }}</p>
        </div>
        <!-- tecnologie -->
        <div v-if="activeTab === 'technologies'" class="tools">
            <h2 class="sub-title mt-5">Tecnologie</h2>
            <div class="skills">
                <div class="single-skill" v-for="technology in project.skills" :key="technology">
                    {{ technology }}
                </div>
            </div>
        </div>
        <!-- tipo di progetto -->
        <div v-if="activeTab === 'type'" class="program">
            <h2 class="sub-title mt-5">Tipo</h2>
            <div class="type">
                <button class="single-type">{{ project.type }}</button>
            </div>
        </div>
        <!-- links -->
        <div v-if="activeTab === 'links'" class="links">
            <h2 class="sub-title mt-5 text-white">LINKS</h2>
            <a :href="project.site" class="btn btn-sm site" v-if="project.site"><i class="fas fa-display me-2"></i>Visualizza Progetto</a>
            <a :href="project.link_github" class="btn btn-sm github"><i class="fa-brands fa-github me-2"></i>GitHub</a>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            project: null, // Oggetto che conterrà i dati del progetto selezionato
            activeTab: 'description', // Tab attivo iniziale (di default)
            indicatorLeft: '0px', // Posizione orizzontale dell'indicatore iniziale
            indicatorWidth: '0px', // Larghezza dell'indicatore iniziale
            tabs: [ // Elenco delle schede disponibili
                { id: 'description', label: 'Descrizione' }, // Scheda per la descrizione del progetto
                { id: 'technologies', label: 'Tecnologie' }, // Scheda per le tecnologie utilizzate
                { id: 'type', label: 'Tipo' }, // Scheda per il tipo di progetto
                { id: 'links', label: 'Links' }, // Scheda per i collegamenti
            ],
        };
    },
    methods: {
        selectTab(id, index) {
            this.activeTab = id; // Imposta la scheda attiva
            this.activeTabIndex = index; // Salva l'indice della scheda attiva
            this.updateIndicator(); // Aggiorna la posizione e la dimensione dell'indicatore
        },

        //Aggiorna la posizione e la larghezza dell'indicatore basandosi sulla scheda attiva
        updateIndicator() {
            const buttons = document.querySelectorAll('.tab-button'); // Seleziona tutti i pulsanti delle schede
            const activeButton = buttons[this.activeTabIndex]; // Ottiene il pulsante attivo

            if (activeButton) { // Controlla se il pulsante attivo esiste
                const { offsetLeft, offsetWidth } = activeButton; // Ottiene la posizione e la larghezza del pulsante
                this.indicatorLeft = `${offsetLeft}px`; // Imposta la posizione orizzontale dell'indicatore
                this.indicatorWidth = `${offsetWidth}px`; // Imposta la larghezza dell'indicatore
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            // Aggiorna l'indicatore dopo il rendering iniziale del DOM
            this.updateIndicator();
        });
    },
    created() {
        // Recupera il progetto corrente basandosi sull'ID passato nei parametri del percorso
        this.project = store.projects.find((p) => p.id == this.$route.params.id);
    },

};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.info {
    color: $secondary-color;
    padding: 9rem 0;

    .btn {
        padding: 1rem 3rem;
        font-size: 1.4rem;
        border-radius: 25px;
        font-weight: 600;
        margin-right: 1.5rem;

        &.back {
            background-color: transparent;
            border: 2px solid $primary-color;
            color: $secondary-color;

            &:hover {
                background-color: $primary-color;
            }
        }
    }
}

.intro {
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 0;
    color: $secondary-color;
}

.image {
    display: flex;
    justify-content: center;

    img {
        width: 90%;
    }
}

.content {
    margin: auto;
    padding-bottom: 3rem;
    max-width: 70rem;

    .sub-title {
        margin-bottom: 3rem;
        font-weight: 600;
        font-size: 2.5rem;
    }

    .description,
    .tools,
    .links,
    .program {
        margin: 0 0 7rem 0;
        color: $secondary-color;

        .paragraph {
            font-size: 1.8rem;
            line-height: 1.7;
            margin-bottom: 2rem;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;

            .single-skill {
                padding: 1rem 2rem;
                margin-bottom: 1rem;
                margin-right: 1rem;
                font-size: 1.4rem;
                font-weight: 600;
                background-color: $primary-color;
                color: $secondary-color;
                border-radius: 25px;
                text-transform: uppercase;
            }
        }

        .type {
            display: flex;
            flex-wrap: wrap;

            .single-type {
                padding: 1rem 2rem;
                margin-bottom: 1rem;
                margin-right: 1rem;
                font-size: 1.4rem;
                font-weight: 600;
                background-color: $primary-color;
                color: $secondary-color;
                border-radius: 25px;
                text-transform: uppercase;
                border: none;
            }
        }

        .btn {
            padding: 1rem 3rem;
            font-size: 1.4rem;
            border-radius: 25px;
            font-weight: 600;
            margin-right: 1.5rem;

            &.site {
                background-color: $primary-color;
                color: $secondary-color;

                &:hover {
                    background-color: $blue-color;
                }
            }

            &.github {
                background-color: $blue-color;
                color: white;

                &:hover {
                    background-color: transparent;
                    border: 2px solid $primary-color;
                }
            }
        }
    }
}

/*selettore dei tab */
.tab-selector {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    .tab-background {
        position: relative;
        display: flex;
        background-color: $primary-color;
        padding: 0.1rem;
        border-radius: 25px;
        overflow: hidden;

        .tab-indicator {
            position: absolute;
            bottom: 0;
            height: 100%;
            background-color: lighten($primary-color, 10%);
            border-radius: 25px;
            transition: left 0.3s ease, width 0.3s ease;

        }
    }

    .tab-button {
        position: relative;
        padding: 0.5rem 1.5rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: $secondary-color;
        background-color: transparent;
        border: none;
        cursor: pointer;
        z-index: 1000; // Sopra l'indicatore
        transition: color 0.3s;

        &.active {
            color: $secondary-color;
        }
    }
}


@media screen and (max-width: 576px) {
    .content .links {
        display: flex;
        flex-direction: column;
        width: 50%;

        a {
            margin-bottom: 1rem;
        }
    }

    .image img {
        width: 100%;
    }

    .tab-selector {
        width: 100%;
    }
}
</style>
