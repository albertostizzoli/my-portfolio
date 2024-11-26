<template>
    <div class="container" v-if="project">
        <div class="row">
            <div class="col info">
                <h1 class="intro">{{ project.title }}</h1>
                <div class="show">
                    <a href="#details" class="btn">Dettagli progetto</a>
                </div>
            </div>
        </div>
        <!-- immagine del progetto -->
        <div class="image">
            <img :src="project.image" alt="image-detail">
        </div>
        <div  id="details" class="content">
            <!-- descrizione progetto-->
            <div class="description">
                <h2 class="sub-title mt-5">Descrizione</h2>
                <p class="paragraph">{{ project.description }}</p>
            </div>
            <!-- tecnologie progetto-->
            <div class="tools">
                <h2 class="sub-title mt-5">Tecnologie</h2>
                <div class="skills">
                    <div class="single-skill" v-for="technology in project.skills" :key="technology">{{ technology }}
                    </div>
                </div>
            </div>
            <!-- tipo di progetto-->
            <div class="program">
                <h2 class="sub-title mt-5">Tipo</h2>
                <div class="type">
                    <p class="single-type">{{ project.type }}</p>
                </div>
            </div>
            <!-- link del progetto -->
            <h2 class="sub-title mt-5 text-white">LINKS</h2>
            <div class="links">
                <a :href="project.site" class="btn btn-sm site" v-if="project.site">Visualizza Progetto</a>
                <a :href="project.link_github" class="btn btn-sm github">Github</a>
                <router-link :to="{ name: 'home' }" class="btn btn-sm back">
                    Indietro
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            projects: null,
        }
    },
    // Ciclo di vita del componente: metodo eseguito quando il componente è creato
    created() {
        // Cerca un progetto nello store che abbia un ID corrispondente all'ID del parametro di route
        this.project = store.projects.find((p) => p.id == this.$route.params.id);
        // Assegna il progetto trovato alla variabile 'project' del componente
    }

}
</script>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.info {
    color: white;
    padding: 15rem 0;

    .show {
        margin-top: 2rem;
        text-align: center;

        .btn {
            font-size: 2rem;
            font-weight: 600;
            padding: 0.5rem 3rem;
            background-color: $primary-color;
            color: white;
            border-radius: 5px;
        }
    }
}

.intro {
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 0;
    color: white;
}

.image {
    display: flex;
    justify-content: center;

    img {
        width: 90%;
    }
}

.content {
    margin: auto;
    padding-bottom: 3rem;
    max-width: 70rem;

    .sub-title {
        margin-bottom: 3rem;
        font-weight: 600;
        font-size: 2.5rem;
    }

    .description,
    .tools,
    .links,
    .program {
        margin: 0 0 7rem 0;
        color: white;


        .paragraph {
            font-size: 1.8rem;
            line-height: 1.7;
            margin-bottom: 2rem;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;

            .single-skill {
                padding: 1rem 2rem;
                margin-bottom: 1rem;
                margin-right: 1rem;
                font-size: 1.4rem;
                font-weight: 600;
                background-color: $primary-color;
                color: white;
                border-radius: 5px;
                text-transform: uppercase;
            }
        }

        .type {
            display: flex;
            flex-wrap: wrap;

            .single-type {
                padding: 1rem 2rem;
                margin-bottom: 1rem;
                margin-right: 1rem;
                font-size: 1.4rem;
                font-weight: 600;
                background-color: $primary-color;
                color: white;
                border-radius: 5px;
                text-transform: uppercase;
            }
        }

        .btn {
            padding: 1rem 3rem;
            font-size: 1.4rem;
            border-radius: 5px;
            font-weight: 600;
            margin-right: 1.5rem;

            &.site {
                background-color: $primary-color;
                color: black;
            }

            &.github {
                background-color: $primary-color;
                color: white;
            }

            &.back {
                background-color: transparent;
                border: 2px solid $primary-color;
                color: white;
            }
        }
    }
}

@media screen and (max-width: 576px) {
    .content .links {
        display: flex;
        flex-direction: column;
        width: 50%;

        a {
            margin-bottom: 1rem;
        }
    }

    .image img {
        width: 110%;
    }
}
</style>
