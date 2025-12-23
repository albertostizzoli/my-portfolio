<template>
    <!-- Select filtro -->
    <div class="select-container mb-4">
        <select class="form-select fs-4 select" v-model="selectedType">
            <option value="">Tutti</option>
            <option value="FRONT-END">Front-End</option>
            <option value="BACK-END">Back-End</option>
            <option value="FULL-STACK">Full-Stack</option>
        </select>
    </div>

    <!-- Carousel -->
    <Carousel ref="carousel" :items-to-show="1" :wrap-around="enableWrapAround" :breakpoints="breakpoints">
        <Slide v-for="(item) in filteredProjects" :key="item.id">
            <div class="container p-0">
                <div class="row jusitfy-content-center">
                    <div class="col-12">
                        <div class="box-card">
                            <div class="box-card-top">
                                <div class="number"><span>{{ item.id }}</span></div>
                                <div class="title"><span>{{ item.title }}</span></div>
                            </div>

                            <div class="preview" :style="{ backgroundImage: `url(./${item.image})` }"></div>

                            <div class="project">
                                <router-link :to="{ name: 'project', params: { id: item.id } }" class="btn btn-sm">
                                    Scopri di più <i class="fa-solid fa-arrow-right ms-2"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>


<script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { store } from '../store.js';
export default {
    name: 'CarouselProjects',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
    },
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
                576: {
                    itemsToShow: 1.2
                },
                768: {
                    itemsToShow: 2
                },
                1200: {
                    itemsToShow: 3
                }
            }
        }
    },
    methods: {
        prevSlide() {
            this.$refs.carousel.prev();
        },
        nextSlide() {
            this.$refs.carousel.next();
        }
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
        },

        enableWrapAround() {
            return this.filteredProjects.length > 1 // evita doppioni quando filtro per tipo
        },
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

:deep(.carousel__slide) {
    padding: 20px 20px;
    transition: transform 0.3s ease;
}

:deep(.carousel__slide--active) .box-card {
    transform: scale(1.1); // ingrandisci la card centrale
    z-index: 2; // porta davanti le card centrali
}

:deep(.carousel__slide:not(.carousel__slide--active) .box-card) {
    transform: scale(0.95);
    transition: transform 0.3s ease;
}

:deep(.carousel__track) {
    overflow: visible; // permette alla card centrale di ingrandirsi senza essere tagliata
}

:deep(.carousel) {
    position: relative;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    background-color: $secondary-color;
    border-radius: 50%;
    z-index: 10;
}

/* sinistra */
:deep(.carousel__prev) {
    left: -20px;
}

/* destra */
:deep(.carousel__next) {
    right: -20px;
}

/* evita che tocchino il layout */
:deep(.carousel__prev svg),
:deep(.carousel__next svg) {
    width: 20px;
    height: 20px;
}


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

.box-card {
    width: 100%;
    height: 100%;
    background-color: $primary-color;
    backdrop-filter: blur(5px);
    border-radius: 30px;
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
    border-radius: 30px;
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
        border-radius: 30px;

        &:hover {
            scale: 1.2;
            transition: .3s;
            background: linear-gradient(135deg, lighten($primary-color, 15%), lighten($primary-color, 30%));
            color: $secondary-color;
        }
    }
}
</style>