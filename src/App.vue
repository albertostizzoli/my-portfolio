<template>
  <HeaderSection></HeaderSection>
  <main>
    <AppWrapper></AppWrapper>
    <router-view></router-view>
  </main>
  
  <FooterSection></FooterSection>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import AppWrapper from './components/AppWrapper.vue';
import FooterSection from './components/FooterSection.vue';
  export default {
    components: {
      HeaderSection,
      AppWrapper,
      FooterSection,
    }
    
  }
</script>

<style lang="scss" scoped>

</style>