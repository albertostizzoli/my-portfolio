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
</style>