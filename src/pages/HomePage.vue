<template>
    <div class="full-content">
        <!-- home page -->
        <section id="home" class="content">
            <p class="hello">{{ typedHello }}</p>
            <h1 class="name">{{ typedName }}</h1>
            <p class="job">{{ typedJob }}</p>
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
                        <div class="pb-4">
                            <h2 class="presentation">🌟 Il mio percorso</h2>
                            <p class="paragraph">
                                Ho iniziato ad avvicinarmi al mondo della programmazione spinto dalla pura curiosità, ma
                                con il tempo mi sono appassionato nel creare esperienze digitali funzionali e intuitive.
                                Per approfondire le mie conoscenze, ho seguito un corso di Web Development, che mi ha
                                fornito una solida base nelle tecnologie fondamentali per lo sviluppo web. Questa
                                esperienza si è consolidata lavorando su una varietà di progetti, che mi ha permesso di
                                approfondire diverse tecnologie e approcci, sviluppando un'abilità nel creare soluzioni
                                scalabili e robuste.
                            </p>
                        </div>
                        <div class="pb-4">
                            <h2 class="presentation">🚀 Cosa mi motiva</h2>
                            <p class="paragraph">
                                Quello che amo dello sviluppo web è la possibilità di trasformare idee in realtà. La
                                soddisfazione di vedere un'applicazione prendere forma e funzionare esattamente come
                                previsto è ciò che mi spinge a migliorarmi ogni giorno. Sono motivato dalla continua
                                possibilità di apprendere e applicare nuove tecnologie per creare soluzioni sempre più
                                efficienti e innovative. Ogni progetto rappresenta una nuova sfida, un'opportunità di
                                esplorare e risolvere problemi complessi, che mi stimola a crescere professionalmente e
                                ad adattarmi rapidamente ai cambiamenti del settore.
                            </p>
                        </div>
                        <div class="pb-4">
                            <h2 class="presentation">💻 Esperienze Lavorative e Personali</h2>
                            <p class="paragraph">
                                Durante la mia prima formazione aziendale ho imparato lo sviluppo dei software e delle
                                architetture utilizzate per la creazione di applicazioni gestionali. Nei miei progetti
                                personali sperimento framework come React e sto ampliando le mie competenze in Python
                                e Intelligenza Artificiale.
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- skills -->
        <section id="skills">
            <h2 class="intro pb-5 text-white"><i><span class="index">02.</span>SKILLS</i></h2>
            <CarouselSkills></CarouselSkills>
        </section>
        <!-- esperienze-->
        <section id="experience">
            <h2 class="intro pb-5"><i><span class="index">03.</span>ESPERIENZE</i></h2>
            <div class="container p-0">
                <div class="row d-flex justify-content-start">
                    <div class="select-container mb-4">
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
        </section>
        <!-- progetti -->
        <section id="projects">
            <h2 class="intro pb-5 text-white"><i><span class="index">04.</span>PROGETTI</i></h2>
            <CarouselProjects></CarouselProjects>
        </section>
    </div>
</template>

<script>
import CarouselSkills from '../components/CarouselSkills.vue';
import CarouselProjects from '../components/CarouselProjects.vue';
import { store } from '../store.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    components: {
        CarouselSkills,
        CarouselProjects
    },
    data() {
        return {
            store,
            is_active: 'btn-0',
            phrases: ['Mi chiamo', 'Alberto Stizzoli', 'e sono un Web Developer'],
            currentPhraseIndex: 0,
            charIndex: 0,
            typedHello: '',
            typedName: '',
            typedJob: '',
            typingInterval: null
        }
    },
    methods: {
        // Metodo per impostare l'ID attivo
        isActive(id) {
            // Imposta la variabile 'is_active' con il valore dell'ID passato come argomento
            this.is_active = id;
        },
        // Metodo per iniziare la digitazione delle frasi
        startTyping() {
            this.currentPhraseIndex = 0; // indice frase
            this.charIndex = 0; // indice carattere
            this.typedHello = ''; // testo "Mi chiamo"
            this.typedName = ''; // testo "Alberto Stizzoli"
            this.typedJob = ''; // testo "e sono un Web Developer 
            this.typingInterval = setInterval(this.typeLetter, 80); // intervallo
        },
        // Metodo per digitare un carattere alla volta
        typeLetter() {
            const currentText = this.phrases[this.currentPhraseIndex]; // testo corrente da digitare
            const currentChar = currentText[this.charIndex]; // carattere corrente da digitare
            // Controlla se ci sono ancora caratteri da digitare nella frase corrente
            if (this.charIndex < currentText.length) {
                if (this.currentPhraseIndex === 0) {
                    this.typedHello += currentChar;
                } else if (this.currentPhraseIndex === 1) {
                    this.typedName += currentChar;
                } else if (this.currentPhraseIndex === 2) {
                    this.typedJob += currentChar;
                }
                this.charIndex++;
            } else {
                // Passa alla frase successiva
                this.charIndex = 0;
                this.currentPhraseIndex++;

                // Se tutte le frasi sono finite, ferma l'intervallo
                if (this.currentPhraseIndex >= this.phrases.length) {
                    clearInterval(this.typingInterval);
                }
            }
        }
    },
    // Ciclo di vita del componente: metodo eseguito quando il componente è montato
    mounted() {
        // Chiama il metodo 'isActive' passando l'attuale valore di 'is_active'
        this.isActive(this.is_active);
        this.startTyping(); // chiamo la funzione startTyping per iniziare la digitazione del testo

        // funzione riutilizzabile per animare con GSAP + ScrollTrigger
        function animateOnScroll(selector, triggerSelector = selector, options = {}) {
            gsap.from(selector, {
                scrollTrigger: {
                    trigger: triggerSelector,
                    start: options.start || "top center",
                    toggleActions: options.toggleActions || "play none play none"
                },
                opacity: options.opacity || 0,
                duration: options.duration || 1.5,
                scale: options.scale || 0.2,
                stagger: options.stagger || 0.5
            });
        }

        // uso la funzione nei vari selettori
        animateOnScroll();
        [
            ".image",
            ".presentation",
            ".paragraph",
            ".select",
            ".description",
            ".select-container",
        ].forEach(selector => animateOnScroll(selector));

        // animazioni GSAP per i titoli
        gsap.utils.toArray("h2.intro").forEach((title) => {
            animateOnScroll(title, title, {
                start: "top 80%",
                scale: 0.2,
                duration: 1.5,
                stagger: 0.5
            });
        });
    },
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
            text-align: justify;
            margin: 0 auto;
            max-width: 800px;
        }

        .image {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            margin-top: 15px;

            img {
                width: 400px;
                border: 10px solid $primary-color;
                border-radius: 30px;
            }
        }
    }

    /*--- ESPERIENZE ---*/
    #experience {
        color: $secondary-color;

        .select-container {
            max-width: 250px;
            margin-left: 0;
            padding-left: 15px;

            .select {
                background-color: $primary-color;
                border: 2px solid $primary-color;
                font-weight: 600;
                color: $secondary-color;
            }
        }

        .description {
            font-size: 1.4rem;
            text-align: justify;
            margin: 0 auto;

            &.bold {
                font-weight: 700;
            }
        }

        .select {
            background-color: $primary-color;
            border: 2px solid $primary-color;
            font-weight: 600;
            color: $secondary-color;
        }

        .d-block,
        .d-none {
            transition: 2s;
        }
    }
}

/*-- MEDIA QUERY --*/
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