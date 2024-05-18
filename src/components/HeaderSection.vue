<template>
    <header>
        <nav class="navbar">
            <div id="navbar-list">
                <ul>
                    <li><span class="index">.01</span>Chi sono</li>
                    <li><span class="index">.02</span>Esperienze</li>
                    <li><span class="index">.03</span>I miei Progetti</li>
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
                            <span class="index">01.</span>Chi Sono
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <span class="index">02.</span>Esperienza
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <span class="index">03.</span>Progetti
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
        isActive() {
            this.is_active_menu = !this.is_active_menu;
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header{
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
    z-index: 1000;

    nav{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        #navbar-list{
            
            ul{
                list-style-type: none;
                display: flex;

                li{
                    padding: 10px;
                }
            }
        }

        .sidemenu__list{
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

            li{
                padding: 10px;

                .index{
                    color: $primary-color;
                }
            }
        }
    }
}


</style>