<template>
    <div class="container" v-if="project">
        <div class="row">
            <div class="col info">
                <h1 class="intro">{{ project.title }}</h1>
            </div>
        </div>
        <!-- immagine del progetto -->
        <div class="image">
            <img :src="project.image" alt="image-detail">
        </div>

        <!-- Selettore tab -->
        <div class="tab-selector">
            <button 
                v-for="tab in tabs" 
                :key="tab.id" 
                class="tab-button"
                :class="{ active: activeTab === tab.id }"
                @click="activeTab = tab.id">
                {{ tab.label }}
            </button>
        </div>

        <!-- Contenuto del tab -->
        <div class="content">
            <div v-if="activeTab === 'description'" class="description">
                <h2 class="sub-title mt-5">Descrizione</h2>
                <p class="paragraph">{{ project.description }}</p>
            </div>
            <div v-if="activeTab === 'technologies'" class="tools">
                <h2 class="sub-title mt-5">Tecnologie</h2>
                <div class="skills">
                    <div class="single-skill" v-for="technology in project.skills" :key="technology">
                        {{ technology }}
                    </div>
                </div>
            </div>
            <div v-if="activeTab === 'type'" class="program">
                <h2 class="sub-title mt-5">Tipo</h2>
                <div class="type">
                    <button class="single-type">{{ project.type }}</button>
                </div>
            </div>
            <div v-if="activeTab === 'links'" class="links">
                <h2 class="sub-title mt-5 text-white">LINKS</h2>
                <a :href="project.site" class="btn btn-sm site" v-if="project.site">Visualizza Progetto</a>
                <a :href="project.link_github" class="btn btn-sm github">Github</a>
                <router-link :to="{ name: 'home' }" class="btn btn-sm back">Indietro</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            project: null,
            activeTab: 'description', // Tab attivo iniziale
            tabs: [
                { id: 'description', label: 'Descrizione' },
                { id: 'technologies', label: 'Tecnologie' },
                { id: 'type', label: 'Tipo' },
                { id: 'links', label: 'Links' },
            ],
        };
    },
    created() {
        this.project = store.projects.find((p) => p.id == this.$route.params.id);
    },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

/* Mantenendo il tuo stile originale */
.info {
    color: $secondary-color;
    padding: 15rem 0;

    .show {
        margin-top: 2rem;
        text-align: center;

        .btn {
            font-size: 2rem;
            font-weight: 600;
            padding: 0.5rem 3rem;
            background-color: $primary-color;
            color: $secondary-color;
            border-radius: 25px;
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
    color: $secondary-color;
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
        color: $secondary-color;

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
                color: $secondary-color;
                border-radius: 25px;
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
                color: $secondary-color;
                border-radius: 25px;
                text-transform: uppercase;
                border: none;
            }
        }

        .btn {
            padding: 1rem 3rem;
            font-size: 1.4rem;
            border-radius: 25px;
            font-weight: 600;
            margin-right: 1.5rem;

            &.site {
                background-color: $primary-color;
                color: $secondary-color;

                &:hover {
                    background-color: $blue-color;
                }
            }

            &.github {
                background-color: $blue-color;
                color: white;

                &:hover {
                    background-color: $primary-color;
                }
            }

            &.back {
                background-color: transparent;
                border: 2px solid $primary-color;
                color: white;

                &:hover {
                    background-color: $blue-color;
                }
            }
        }
    }
}

/* Stile aggiunto per il selettore dei tab */
.tab-selector {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    .tab-button {
        padding: 1rem 2rem;
        margin: 0 1rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: $secondary-color;
        background-color: $primary-color;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        transition: background-color 0.3s;

        &.active {
            background-color: $blue-color;
            color: white;
        }

        &:hover {
            background-color: lighten($primary-color, 10%);
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

