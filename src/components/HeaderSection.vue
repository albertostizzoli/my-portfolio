<template>
    <div>

    </div>
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

</style>