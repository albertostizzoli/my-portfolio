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
            <div id="side-bar">
                <button class="sidebar-btn" :class="is_active_menu ? 'active' : ''" @click="isActive()"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
            </button>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                is_active_menu: false
            }
        },
        methods: {
            isActive(){
                this.is_active_menu = !this.is_active_menu;
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

</style>