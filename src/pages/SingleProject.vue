<template>
    <div class="container" v-if="project">
        <div class="row flex-column flex-md-row">
            <div class="info">
                <!-- Bottone per tornare indietro (sparisce a max-width: 576px) -->
                <router-link :to="{ name: 'home' }" class="btn btn-sm back translate-middle-y behind">
                    <i class="fa-solid fa-arrow-left me-2"></i>Indietro
                </router-link>
                <!-- Titolo del progetto -->
                <h1 class="intro">{{ project.title }}</h1>
            </div>
            <div class="col-12 col-md me-2">
                <div class="image">
                    <!-- Immagine del progetto -->
                    <img :src="project.image" alt="image-detail">
                </div>
            </div>
            <div class="col-12 col-md">
                <!-- Selettore di Tab -->
                <div class="tab-selector">
                    <div class="tab-background">
                        <div class="tab-indicator" :style="{ left: indicatorLeft, width: indicatorWidth }"></div>
                        <div class="d-flex justify-content-between flex-wrap">
                            <button v-for="(tab, index) in tabs" :key="tab.id" class="tab-button"
                                :class="{ active: activeTab === tab.id }" @click="selectTab(tab.id, index)">
                                {{ tab.label }}
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Contenuto del Tab -->
                <div class="content">
                    <!-- Descrizione -->
                    <div v-if="activeTab === 'description'" class="description">
                        <p class="paragraph">{{ project.description }}</p>
                    </div>
                    <!-- Tecnologie -->
                    <div v-if="activeTab === 'technologies'" class="tools">
                        <div class="skills">
                            <div class="single-skill" v-for="technology in project.skills" :key="technology">
                                {{ technology }}
                            </div>
                        </div>
                    </div>
                    <!-- Tipo di progetto -->
                    <div v-if="activeTab === 'type'" class="program">
                        <div class="type">
                            <span class="single-type">{{ project.type }}</span>
                        </div>
                    </div>
                    <!-- Links -->
                    <div v-if="activeTab === 'links'" class="links d-flex flex-column">
                        <a :href="project.site" class="btn btn-sm site" v-if="project.site"><i
                                class="fas fa-display me-2"></i>Visualizza Progetto</a>
                        <a :href="project.link_github" class="btn btn-sm github"><i
                                class="fa-brands fa-github me-2"></i>GitHub</a>
                        <!-- Bottone per tornare indietro (sparisce a min-width: 768px) -->
                        <router-link :to="{ name: 'home' }" class="btn btn-sm back behind-2">
                            <i class="fa-solid fa-arrow-left me-2"></i>Indietro
                        </router-link>
                    </div>
                </div>
            </div>
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

/*-- BOTTONE INDIETRO E TITOLO PROGETTO --*/
.info {
    color: $secondary-color;
    padding-top: 8rem;
    padding-bottom: 2rem;
    position: relative;

    .btn {
        padding: 0.4rem 1.4rem;
        font-size: 1.4rem;
        border-radius: 25px;
        font-weight: 600;
        position: absolute;
        bottom: 25px;
        left: 70px;

        &.back {
            background-color: transparent;
            border: 2px solid $primary-color;
            color: $secondary-color;

            &:hover {
                background-color: lighten($primary-color, 20%);
                border: none;
                scale: 1.2;
                transition: .3s;
            }
        }
    }

    .intro {
        font-size: 5rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 0;
        color: $secondary-color;
    }
}

/*-- IMMAGINE PROGETTO --*/
.image img {
    width: 100%;
    height: 100%;
    padding-top: 30px;
}

/*-- SELETTORE TAB-- */
.tab-selector {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    .tab-background {
        position: relative;
        display: flex;
        background-color: $primary-color;
        border-radius: 25px;
        overflow: hidden;

        .tab-indicator {
            position: absolute;
            bottom: 0;
            height: 100%;
            background-color: lighten($primary-color, 20%);
            border-radius: 25px;
            transition: left 0.3s ease, width 0.3s ease;
        }
    }

    .tab-button {
        position: relative;
        padding: 0.5rem 1.4rem;
        font-size: 1.3rem;
        font-weight: bold;
        color: $secondary-color;
        background-color: transparent;
        border: none;
        cursor: pointer;
        z-index: 1000;
        transition: color 0.3s;

        &.active {
            color: $secondary-color;
        }
    }
}

/*-- CONTENUTO DEL TAB --*/
.content {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .description,
    .tools,
    .links,
    .program {
        color: $secondary-color;
        text-align: center;

        .paragraph {
            font-size: 1.4rem;
            line-height: 1.7;
            text-align: justify;
            margin: 0 auto;
            max-width: 800px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;

            .single-skill {
                padding: 0.4rem 1.4rem;
                font-size: 1.4rem;
                margin-right: 1.5rem;
                margin-bottom: 1rem;
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
            justify-content: center;

            .single-type {
                padding: 0.4rem 1.4rem;
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
            padding: 0.4rem 1.4rem;
            font-size: 1.4rem;
            border-radius: 25px;
            font-weight: 600;
            margin-bottom: 1.5rem;

            &.site {
                background-color: $primary-color;
                color: $secondary-color;

                &:hover {
                    background-color: lighten($primary-color, 20%);
                    scale: 1.2;
                    transition: .3s;
                }
            }

            &.github {
                background-color: transparent;
                color: white;
                border: 2px solid $primary-color;

                &:hover {
                    background-color: lighten($primary-color, 20%);
                    border: none;
                    scale: 1.2;
                    transition: .3s;
                }
            }

            &.back {
                background-color: transparent;
                border: 2px solid $primary-color;
                color: $secondary-color;

                &:hover {
                    background-color: lighten($primary-color, 20%);
                    scale: 1.2;
                    transition: .3s;
                    border: none;
                }
            }
        }
    }
}

/*-- MEDIA QUERY --*/
@media screen and (min-width: 768px) {
    .behind-2 {
        display: none;
    }
}

@media screen and (max-width: 576px) {
    .behind {
        display: none;
    }

    .content {
        padding-left: 5px;
        padding-right: 5px;
    }

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
}
</style>
