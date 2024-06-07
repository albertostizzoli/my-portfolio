<template>
    <div class="full-content">
        <!-- home page -->
        <section id="home" class="content">
            <p class="hello">Ciao, mi chiamo</p>
            <h1 class="name">Alberto Stizzoli</h1>
            <p class="job">Sono un Jr Full-Stack Web Developer</p>
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
                        <div class="pb-3">
                            <p class="presentation"><strong>Ciao, mi chiamo Alberto Stizzoli. Ho iniziato ad avvicinarmi
                                    al
                                    mondo della programmazione spinto dalla pura curiosità, ma con il tempo questa si è
                                    trasformata in una forte passione e desiderio di apprendere sempre di più. In
                                    particolare, ho sviluppato un grande interesse per il lato del Front-End, attratto
                                    dalla
                                    possibilità di creare interfacce utente intuitive e accattivanti che migliorino
                                    l'esperienza dell'utente.</strong></p>

                            <p class="presentation"><strong> Mi considero una persona proattiva, sempre alla ricerca di
                                    nuove sfide e opportunità per
                                    crescere professionalmente. Amo collaborare con gli altri e credo fermamente nel
                                    valore
                                    del lavoro di squadra. Sono convinto che le migliori soluzioni nascano dal confronto
                                    e
                                    dalla condivisione di idee diverse, e mi impegno costantemente per contribuire al
                                    successo del team con il mio entusiasmo e la mia dedizione.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- skills -->
        <section id="skills">
            <h2 class="intro pb-5"><i><span class="index">02.</span>LE MIE SKILLS</i></h2>
            <CarouselSkills></CarouselSkills>
        </section>
        <!-- esperienze-->
        <section id="experience">
            <h2 class="intro pb-5"><i><span class="index">03.</span>LE MIE ESPERIENZE</i></h2>
            <div class="container p-0">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-md-10">
                        <div class="col-lg-3">
                            <select class="form-select" @click="isActive($event.target.value)">
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
            <h2 class="intro pb-5"><i><span class="index">04.</span>I MIEI PROGETTI</i></h2>
            <CarouselProjects></CarouselProjects>
         </section>
    </div>
</template>

<script>
import CarouselSkills from '../components/CarouselSkills.vue';
import CarouselProjects from '../components/CarouselProjects.vue';
import { store } from '../store.js';
export default {
    components: {
        CarouselSkills,
        CarouselProjects,
    },
    data() {
        return {
            store,
            is_active: 'btn-0',
        }
    },
    methods: {
        isActive(id) {
            this.is_active = id;
        },
    },
    mounted() {
        this.isActive(this.is_active);
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
            font-weight: 400;
        }

        .name {
            color: $primary-color;
            font-size: 5rem;
            font-weight: 800;
            letter-spacing: 1px;
        }
    }

    /*--- ABOUT-ME ---*/
    #about-me {
        .presentation {
            font-size: 1.5rem;
        }

        .image {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;

            img {
                width: 400px;
                border: 10px solid $primary-color;
                border-radius: 20px;
            }
        }
    }

    /*--- EXPERIENCE ---*/
    #experience {

        .description {
            font-size: 1.5rem;

            &.bold {
                font-weight: 700;
            }
        }

        .d-block,
        .d-none {
            transition: 2s;
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
        text-align: center;
        
    }

    .content {
        
        .hello{
            text-align: right;
        }

        .name {
            font-size: 20px;
        }
    }

    .full-content #about-me .image img {
        width: 250px;
    }
}
</style>