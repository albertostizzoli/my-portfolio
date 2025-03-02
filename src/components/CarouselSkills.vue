<template>
    <!-- Definizione del componente Carousel con alcune proprietà -->
    <Carousel :autoplay="2000" :items-to-show="2.5" :wrap-around="true" :breakpoints="breakpoints">
        <!-- Iterazione su ogni elemento nell'array store.skills per creare uno Slide per ciascuno -->
        <Slide v-for="(item, index) in store.skills" :key="item.name">
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

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'CarouselSkills',
    data() {
        return {
            store,
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
    mounted() {
        // Inizializza le animazioni con ScrollTrigger
        this.initScrollAnimations();
    },
    methods: {
        initScrollAnimations() {
            // Seleziona tutti gli elementi con la classe .type-skill
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

