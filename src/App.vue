<template>
  <div>
    <h1 class="text-center text-bg-danger ">Hello World</h1>
    <h2>Ciao mi chiamo Alberto</h2>
    <i class="fa-solid fa-user"></i>
  </div>
  <main>
    <AppWrapper></AppWrapper>
  </main>
  
  <FooterSection></FooterSection>
</template>

<script>
import AppWrapper from './components/AppWrapper.vue';
import FooterSection from './components/FooterSection.vue';
  export default {
    components: {
      AppWrapper,
      FooterSection,
    }
    
  }
</script>

<style lang="scss" scoped>

</style>