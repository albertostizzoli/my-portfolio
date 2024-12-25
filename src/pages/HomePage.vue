<template>
    <div class="full-content">
        <!-- home page -->
        <section id="home" class="content">
            <p class="hello">Mi chiamo</p>
            <h1 class="name">Alberto Stizzoli</h1>
            <p class="job">e sono un Web Developer</p>
        </section>
        <!-- chi sono -->
        <section id="about-me">
            <h2 class="intro pb-5"><i><span class="index">01.</span>CHI SONO</i></h2>
            <div class="container p-0">
                <div class="row">
                    <div class="col-lg-5 pe-lg-3 col-md-12 p-md-0 image">
                        <img src="/img/myimage.jpg" alt="image-profile">
                    </div>
                    <div class="col-lg-7 ps-lg-3 col-md-12 pt-3">
                        <!-- presentazione -->
                        <div class="pb-2">
                            <h2 class="presentation">🌟 Il mio percorso</h2>
                            <p class="paragraph">
                                <strong>
                                    Ho iniziato ad avvicinarmi al mondo della programmazione spinto dalla pura
                                    curiosità, ma con il tempo mi sono appassionato nel creare esperienze digitali che
                                    siano funzionali, intuitive e visivamente accattivanti. Oltre alla programmazione,
                                    amo esplorare passioni che mi aiutano a sviluppare competenze trasversali e a
                                    rimanere ispirato, in particolare il mondo dello UX/UI Designer e infatti nel mio
                                    tempo libero sperimento con strumenti di design come Figma e li applico anche a
                                    livello di codice.
                                </strong>
                            </p>
                        </div>
                        <div class="pb-2">
                            <h2 class="presentation">🤝 Il lavoro di squadra</h2>
                            <p class="paragraph">
                                <strong>
                                    Nel corso in Web Development di Boolean Careers ho imparato a collaborare con gli
                                    altri e credere fermamente nel valore del lavoro di squadra. Sono tuttora convinto
                                    che le migliori soluzioni nascano dal confronto e dalla condivisione di idee
                                    diverse, mi impegno a offrire idee innovative e supporto concreto per raggiungere
                                    obiettivi comuni.
                                </strong>
                            </p>
                        </div>
                        <div class="pb-2">
                            <h2 class="presentation">🚀Cosa mi motiva</h2>
                            <p class="paragraph">
                                <strong>
                                    Quello che amo dello sviluppo web è la possibilità di trasformare idee in realtà. La
                                    soddisfazione di vedere un'applicazione prendere forma e funzionare esattamente come
                                    previsto è ciò che mi spinge a migliorarmi ogni giorno. Credo che ogni problema
                                    abbia una soluzione creativa, e mi impegno sempre a trovarla.
                                </strong>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- skills -->
        <section id="skills">
            <h2 class="intro pb-5 text-white"><i><span class="index">02.</span>LE MIE SKILLS</i></h2>
            <CarouselSkills></CarouselSkills>
        </section>
        <!-- esperienze-->
        <section id="experience">
            <h2 class="intro pb-5"><i><span class="index">03.</span>LE MIE ESPERIENZE</i></h2>
            <div class="container p-0">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-md-10">
                        <div class="col-lg-3">
                            <select class="form-select fs-4 select" @click="isActive($event.target.value)">
                                <option v-for="(item, index) in store.experiences" :value="'btn-' + index">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>
                        <div class="pt-4" v-for="(item, index) in store.experiences" :key="index"
                            :class="this.is_active == 'btn-' + index ? 'd-block' : 'd-none'">
                            <p class="description bold">{{ item.name }}</p>
                            <p class="description">{{ item.period }}</p>
                            <hr>
                            <p class="description" v-html="item.description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- progetti -->
        <section id="projects">
            <h2 class="intro pb-5 text-white"><i><span class="index">04.</span>I MIEI PROGETTI</i></h2>
            <div class="container p-0">
                <div class="select-container mb-4">
                    <select class="form-select fs-4 select" v-model="selectedType">
                        <option value="">Tutti i progetti</option>
                        <option value="FRONT-END">Front-End</option>
                        <option value="BACK-END">Back-End</option>
                        <option value="FULL-STACK">Full-Stack</option>
                    </select>
                </div>
                <div class="row g-4">
                    <div class="col-12 col-md-6 col-lg-4" v-for="(item, index) in filteredProjects" :key="index">
                        <div class="box-card">
                            <div class="box-card-top">
                                <div class="number"><span>{{ item.id }}</span></div>
                                <div class="title"><span>{{ item.title }}</span></div>
                            </div>
                            <div class="preview" :style="{ 'background-image': 'url(./' + item.image + ')' }"></div>
                            <div class="project">
                                <router-link :to="{ name: 'project', params: { id: item.id } }" class="btn btn-sm">
                                    Scopri di più <i class="fa-solid fa-arrow-right ms-2"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import CarouselSkills from '../components/CarouselSkills.vue';
import { store } from '../store.js';
export default {
    components: {
        CarouselSkills,
    },
    data() {
        return {
            store,
            is_active: 'btn-0',
            selectedType: '',
        }
    },
    methods: {
        // Metodo per impostare l'ID attivo
        isActive(id) {
            // Imposta la variabile 'is_active' con il valore dell'ID passato come argomento
            this.is_active = id;
        },
    },
    // Ciclo di vita del componente: metodo eseguito quando il componente è montato
    mounted() {
        // Chiama il metodo 'isActive' passando l'attuale valore di 'is_active'
        this.isActive(this.is_active);
    },
    computed: {
        // Proprietà calcolata per filtrare i progetti in base al tipo selezionato
        filteredProjects() {
            // Controlla se esiste un tipo selezionato
            if (this.selectedType) {
                // Filtra i progetti nello store in base al tipo selezionato
                return this.store.projects.filter(project => project.type === this.selectedType);
            }
            // Se non c'è un tipo selezionato, restituisce tutti i progetti nello store
            return this.store.projects;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#about-me,
#skills,
#experience,
#projects {
    padding: 4rem 0;

    .intro {
        font-size: 4rem;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .skills {
        font-size: 2.8rem;
        font-weight: 600;
    }

    .index {
        color: $primary-color;
    }
}

.full-content {
    width: 100%;
    padding: 0 100px;

    .content {
        width: 100%;
        height: calc(100vh - 80px);
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        .hello,
        .job {
            font-size: 2.5rem;
            font-weight: 800;
            color: $secondary-color;
        }

        .name {
            color: $primary-color;
            font-size: 5rem;
            font-weight: 800;
            letter-spacing: 1px;
        }
    }

    /*--- CHI SONO ---*/
    #about-me {
        color: $secondary-color;

        .presentation {
            font-size: 2rem;
        }

        .paragraph {
            font-size: 1.3rem;
        }

        .image {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;

            img {
                width: 400px;
                border: 10px solid $primary-color;
                border-radius: 25px;
            }
        }
    }

    /*--- ESPERIENZE ---*/
    #experience {
        color: $secondary-color;

        .description {
            font-size: 1.5rem;

            &.bold {
                font-weight: 700;
            }
        }

        .select {
            background-color: $primary-color;
            border: 2px solid $blue-color;
            font-weight: 600;
            color: $secondary-color;
        }

        .d-block,
        .d-none {
            transition: 2s;
        }
    }

    /*--- PROGETTI --- */

    #projects {
        .select-container {
            max-width: 200px;
            margin-left: 0;
            padding-left: 15px;

            .select {
                background-color: $primary-color;
                border: 2px solid $blue-color;
                font-weight: 600;
                color: $secondary-color;
            }
        }

        .box-card {
            width: 100%;
            height: 100%;
            background-color: $primary-color;
            backdrop-filter: blur(5px);
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 20px;

            .box-card-top {
                display: flex;
                align-items: center;

            }
        }

        .number {
            height: 35px;
            width: 35px;
            margin-right: 0.5rem;
            border-radius: 50%;
            background-color: $secondary-color;
            position: relative;

            span {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                font-weight: 600;
                font-size: 2rem;
            }
        }

        .title {
            font-size: 2.5rem;
            font-weight: 600;
            color: $secondary-color;
            transition: all .35s ease-in;
        }

        .preview {
            min-height: 150px;
            width: 100%;
            border-radius: 20px;
            background-size: cover;
        }

        .project {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;

            .btn {
                background-color: $secondary-color;
                font-weight: 600;
                font-size: 1.2rem;
                border-radius: 25px;

                &:hover {
                    scale: 1.2;
                    transition: .3s;
                    background-color: $blue-color;
                    color: $secondary-color;
                }
            }
        }
    }
}

@media screen and (max-width:991px) {
    .full-content {
        padding: 0 50px;
    }
}

@media screen and (max-width:991px) {
    .full-content .image {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 50%;
        }
    }
}

@media screen and (max-width: 768px) {
    .full-content {
        padding: 0;
    }

    #about-me .row {
        flex-direction: column;
    }
}

@media screen and (max-width: 576px) {

    .full-content {
        padding-left: 15px;
        padding-right: 15px;
    }

    .select-container {
        max-width: 250px;
        font-size: 50px;
    }

    .content {

        .name {
            font-size: 20px;
        }
    }

    .full-content #about-me .image img {
        width: 250px;
    }
}
</style>