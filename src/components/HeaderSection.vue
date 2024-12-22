<template>
    <header>
        <nav class="navbar">
            <div class="wrapper">
                <ul>
                    <li><a href="https://github.com/albertostizzoli"><i class="fa-brands fa-github fa-2x "></i></a></li>
                    <li><a href="https://drive.google.com/file/d/1wAk8-dR9JLRhjfM7XAVcHdX81sc7C6-z/view?usp=drive_link"><i class="fa-solid fa-file fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/alberto-stizzoli-82a676260/"><i class="fa-brands fa-linkedin-in fa-2x "></i></a></li>  
                </ul>
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
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    
    nav {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper {
            display: flex;
            align-items: center;

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: row;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 10px;

                    a {
                        text-decoration: none;
                        color: $secondary-color;
                        transition: color .3s;

                        &:hover {
                            color: $primary-color;
                        }
                    }
                }
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
                        color: $secondary-color;

                        &:hover {
                            color: $blue-color;
                        }
                    }

                    .index {
                        color: $primary-color;
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
                    color: $secondary-color;

                    &:hover {
                        color: $blue-color;
                    }
                }

                .index {
                    color: $primary-color;
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
                        background: $secondary-color;
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
        background: linear-gradient(to left, rgb(0, 74, 173), rgb(116, 157, 235));

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
    header nav .wrapper {
        visibility: hidden;
    }

    #navbar-list {
        display: none;
    }

    header nav #sidemenu {
        display: block;
    }
}
</style>