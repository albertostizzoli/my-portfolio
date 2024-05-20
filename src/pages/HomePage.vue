<template>
    <div class="full-content">
        <!-- home page -->
        <section id="home" class="content">
            <p class="greeting">Ciao, mi chiamo</p>
            <h1 class="name">Alberto Stizzoli</h1>
            <p class="description">Sono un Jr Full-Stack Web Developer</p>
        </section>
        <!-- about me -->
        <section id="about-me">
            <div class="container p-0">
                <div class="row">
                    <h2 class="heading-sec pb-3"><span class="index">01.</span>CHI SONO</h2>
                    <div class="col-lg-5 pe-lg-3 col-md-12 p-md-0 image">
                        <img src="/public/img/myimage.jpg" alt="image-profile">
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
                        <!-- skills -->
                        <div>
                            <h3 class="heading-third"><span class="index">#</span>Skills</h3>
                            <div>
                                <div class="mb-3 type-skill">
                                    <img class="icon" v-for="(item, index) in store.languages" :key="index"
                                        :src="item.icon" :alt="item.name" :name="item.name">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#about-me {
    padding: 10rem 0;

    .heading-sec {
        font-size: 4rem;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .heading-third {
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
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        .greeting,
        .description {

            font-size: 2.5rem;
            font-weight: 400;
        }

        .name {

            color: $primary-color;
            font-size: 6rem;
            font-weight: 800;
            letter-spacing: 1px;
        }


    }

    #about-me {
        .presentation {
            font-size: 1.2rem;
        }

        .type-skill {
            font-weight: 600;
            font-size: 2rem;

        }

        .icon {
            width: 70px;
            padding-right: 10px;


            &:hover {

                scale: 1.2;
                transition: .3s;
            }

            &:not(:hover) {
                transition: .3s;
            }
        }

        .image {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;


            img {

                width: 400px;
                border: 5px solid rgb(0, 74, 173);
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
        .content {
            padding: 0;
        }

        .full-content #about-me .image img {
            width: 250px;
        }
    }
}
</style>