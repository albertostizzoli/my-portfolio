<template>
    <div class="select-container mb-5">
        <select class="form-select fs-4 select" v-model="selectedType">
            <option value="">Tutte</option>
            <option value="FRONT-END">Front-End</option>
            <option value="BACK-END">Back-End</option>
            <option value="DATABASE">Database</option>
        </select>
    </div>
    <!-- Definizione del componente Carousel con alcune proprietà -->
    <Carousel ref="carouselRef" :autoplay="autoplayDelay" :items-to-show="2.5" :wrap-around="true"
        :breakpoints="breakpoints">
        <!-- Iterazione su ogni elemento nell'array store.skills per creare uno Slide per ciascuno -->
        <Slide v-for="(item, index) in filteredSkills" :key="item.name">
            <!-- Struttura di base per il contenuto di uno Slide -->
            <div class="container p-0">
                <div class="row">
                    <div class="col-12 col-md-10">
                        <div class="mb-3 type-skill" :class="'skill-' + index">
                            <img class="icon" :src="item.icon" :alt="item.name">
                            <p class="skill-name">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
        <!-- Definizione di un template per gli elementi aggiuntivi del Carousel, in questo caso la Pagination -->
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { store } from '../store.js';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, watch } from 'vue';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'CarouselSkills',
    data() {
        return {
            store,
            selectedType: '',
            autoplayDelay: 0,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                1660: { itemsToShow: 3, snapAlign: 'center' },
                1400: { itemsToShow: 2.8, snapAlign: 'center' },
                1000: { itemsToShow: 2, snapAlign: 'center' },
                768: { itemsToShow: 1.5, snapAlign: 'center' },
                576: { itemsToShow: 1, snapAlign: 'center' },
                0: { itemsToShow: 0.5, snapAlign: 'center' },
            },
        };
    },
    watch: {
        selectedType() {
            this.$nextTick(() => {
                const carousel = this.$refs.carouselRef;
                if (carousel && typeof carousel.slideTo === 'function') {
                    carousel.slideTo(0);
                }
                this.initScrollAnimations(); // resetta le animazioni
            });
        }
    },
    mounted() {
        // Inizializza le animazioni con ScrollTrigger
        this.initScrollAnimations();
        this.setupCarouselScrollTrigger();
    },
    computed: {
        // Proprietà calcolata per filtrare le skills in base al tipo selezionato
        filteredSkills() {
            // Controlla se esiste un tipo selezionato
            if (this.selectedType) {
                // Filtra i progetti nello store in base al tipo selezionato
                return this.store.skills.filter(skill => skill.type === this.selectedType);
            }
            // Se non c'è un tipo selezionato, restituisce tutte le skills nello store
            return this.store.skills;
        }
    },
    methods: {
        initScrollAnimations() {
            const skillElements = document.querySelectorAll('.type-skill');

            skillElements.forEach((element) => {
                gsap.fromTo(
                    element,
                    { scale: 0.2, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: element,
                            start: 'top center',
                            toggleActions: 'play none play none',
                        },
                    }
                );
            });
        },

        setupCarouselScrollTrigger() {
            const carouselEl = document.querySelector('.type-skill');

            ScrollTrigger.create({
                trigger: carouselEl,
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    this.autoplayDelay = 2000; // attiva autoplay solo viene raggiunto con il mouse
                },
            });
        }
    },

    components: {
        Carousel,
        Slide,
        Pagination,
    },
};
</script>



<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.select-container {
    max-width: 200px;
    margin-left: 0;
    padding-left: 15px;

    .select {
        background-color: $primary-color;
        border: 2px solid $primary-color;
        font-weight: 600;
        color: $secondary-color;
    }
}

.type-skill {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    color: $secondary-color;
}

.icon {
    width: 150px;
    padding-right: 10px;
    display: block;
    margin: 0 auto;

    &:hover {
        scale: 1.2;
        transition: .3s;
    }

    &:not(:hover) {
        transition: .3s;
    }
}

.skill-name {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: center;
    color: $secondary-color;
}
</style>
