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
                            <p class="presentation">
                                Ciao, mi chiamo Alberto Stizzoli. Mi sono avvicinato al mondo della programmazione per
                                pura curiosità che ora è
                                diventata voglia di imparare, amando in particolare il lato del Front-End. Mi definisco
                                una persona proattiva
                                e adoro lavorare in squadra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: HomePage

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#about-me {
    padding: 10rem, 0;

    .heading-sec {
        font-size: 4rem;
        font-weight: 600;
        letter-spacing: 1px;

        .index {
            color: $primary-color;
        }
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

        .greeting,
        .description {
            font-size: 3rem;
            font-weight: 400;
        }

        .name {
            color: $primary-color;
            font-size: 8rem;
            font-weight: 800;
            letter-spacing: 1px;
        }

        #about-me {
            .presentation {
                font-size: 2rem;
            }
        }
    }
}
</style>