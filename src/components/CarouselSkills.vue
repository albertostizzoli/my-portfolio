<template>
    <!-- Definizione del componente Carousel con alcune proprietà -->
    <Carousel :autoplay="2000" :items-to-show="2.5" :wrap-around="true" :breakpoints="breakpoints">
        <!-- Iterazione su ogni elemento nell'array store.skills per creare uno Slide per ciascuno -->
        <Slide v-for="item in store.skills " :key="item.name">
            <!-- Struttura di base per il contenuto di uno Slide -->
            <div class="container p-0">
                <div class="row">
                    <div class="col-12 col-md-10">
                        <div class="mb-3 type-skill">
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
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { store } from '../store.js'
export default {
    name: 'CarouselSkills',
    data() {
        return {
            store,
            // Configurazione delle impostazioni di base del Carousel
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // Definizione dei breakpoint per adattare il Carousel a diverse dimensioni dello schermo
            breakpoints: {
                1660: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
                1400: {
                    itemsToShow: 2.8,
                    snapAlign: 'center',
                },
                1000: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                768: {
                    itemsToShow: 1.5,
                    snapAlign: 'center',
                },
                576: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                0: {
                    itemsToShow: 0.5,
                    snapAlign: 'center',
                },
            }
        }
    },
    components: {
        // Dichiarazione dei componenti utilizzati nel template
        Carousel,
        Slide,
        Navigation,
        Pagination,
    }

}
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

.skill-name{
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: center;
    color: $secondary-color;
}
</style>