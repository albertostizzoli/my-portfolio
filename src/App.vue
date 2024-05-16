<template>
  <div>
    <h1 class="text-center text-bg-danger ">Hello World</h1>
    <h2>Ciao mi chiamo Alberto</h2>
    <i class="fa-solid fa-user"></i>
  </div>
  <FooterSection></FooterSection>
</template>

<script>
import FooterSection from './components/FooterSection.vue';
  export default {
    components: {
      FooterSection,
    }
    
  }
</script>

<style lang="scss" scoped>

</style>