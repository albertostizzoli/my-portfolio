<template>
    <header>
        <nav class="navbar">
            <div class="logo">
                <img src="/img/logo.png" alt="logo">
            </div>
            <div id="navbar-list">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home', hash: '#about-me' }">
                            <span class="index">01.</span>Chi sono
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home', hash: '#skills' }">
                            <span class="index">02.</span>Skills
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home', hash: '#experience' }">
                            <span class="index">03.</span>Esperienze
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home', hash: '#projects' }">
                            <span class="index">04.</span>Progetti
                        </router-link>
                    </li>
                </ul>
            </div>
            <div id="sidemenu">
                <button class="sidemenu__btn" :class="is_active_menu ? 'active' : ''" @click="isActive()"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bottom"></span>
                </button>
            </div>

            <div class="offcanvas offcanvas-end vh-100" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-body">
                    <ul class="sidemenu__list">
                        <li data-bs-dismiss="offcanvas">
                            <router-link :to="{ name: 'home', hash: '#about-me' }" @click.prevent="isActive">
                                <span class="index">01.</span>Chi sono
                            </router-link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <router-link :to="{ name: 'home', hash: '#skills' }" @click.prevent="isActive">
                                <span class="index">02.</span>Skills
                            </router-link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <router-link :to="{ name: 'home', hash: '#experience' }" @click.prevent="isActive">
                                <span class="index">03.</span>Esperienze
                            </router-link>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <router-link :to="{ name: 'home', hash: '#projects' }" @click.prevent="isActive">
                                <span class="index">04.</span>Progetti
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
    data() {
        return {
            is_active_menu: false
        }
    },
    methods: {
        // Metodo per alternare lo stato del menu attivo
        isActive() {
            // Inverte il valore booleano di 'is_active_menu'
            this.is_active_menu = !this.is_active_menu;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(0, 74, 173);

    nav {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 60px;
            }
        }

        #navbar-list {
            ul {
                list-style-type: none;
                display: flex;

                li {
                    margin-top: 10px;
                    padding: 10px;
                    cursor: pointer;
                    font-size: 1.6rem;
                    font-weight: 800;

                    a {
                        font-size: 1.6rem;
                        letter-spacing: 1px;
                        transition: color .3s;
                        text-decoration: none;
                        color: white;

                        &:hover {
                            color: black;
                        }
                    }

                    .index {
                        color: black;
                    }
                }
            }
        }

        .sidemenu__list {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 50px;
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
            list-style-type: none;

            li {
                padding: 10px;
                cursor: pointer;
                font-size: 1.6rem;
                font-weight: 800;

                a {
                    text-decoration: none;
                    color: white;

                    &:hover {
                        color: black;
                    }
                }

                .index {
                    color: black;
                }
            }
        }

        #sidemenu {
            display: none;

            .sidemenu {
                &__btn {
                    display: block;
                    width: 50px;
                    height: 50px;
                    background: transparent;
                    border: none;
                    position: relative;
                    z-index: 2000;
                    appearance: none;
                    cursor: pointer;
                    outline: none;

                    span {
                        display: block;
                        width: 20px;
                        height: 3px;
                        margin: auto;
                        background: white;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        transition: all .4s ease;

                        &.top {
                            transform: translateY(-8px);
                        }

                        &.bottom {
                            transform: translateY(8px);
                        }
                    }

                    &.active {
                        .top {
                            transform: rotate(-45deg);
                        }

                        .mid {
                            transform: translateX(-20px) rotate(360deg);
                            opacity: 0;
                        }

                        .bottom {
                            transform: rotate(45deg);
                        }
                    }

                }
            }
        }
    }

    .offcanvas {
        background-color: rgba(0, 74, 173, 0.5);

        &.offcanvas-end {
            width: 50%;

            a {
                font-size: 1.6rem;
            }
        }

    }

    .translateX-enter {
        transform: translateX(-200px);
        opacity: 0;
    }

    .translateX-enter-active,
    .translateX-leave-active {
        transform-origin: top left 0;
        transition: .4s ease;
    }

    .translateX-leave-to {
        transform: translateX(-200px);
        opacity: 0;
    }

}


@media screen and (max-width: 700px) {
    #navbar-list {
        display: none;
    }

    header nav #sidemenu {
        display: block;
    }
}
</style>