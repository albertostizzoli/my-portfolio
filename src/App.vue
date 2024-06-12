<template>
  <div v-if="loading">
    <LoaderComponent></LoaderComponent>
  </div>
  <HeaderSection></HeaderSection>
  <main>
    <AppWrapper></AppWrapper>
    <router-view></router-view>
  </main>

  <FooterSection></FooterSection>
</template>

<script>
import LoaderComponent from './components/LoaderComponent.vue';
import HeaderSection from './components/HeaderSection.vue';
import AppWrapper from './components/AppWrapper.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  components: {
    LoaderComponent,
    HeaderSection,
    AppWrapper,
    FooterSection,
  },
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false
      }, 5500)
    }
  },
  mounted(){
    this.loader();
  }

}
</script>

<style lang="scss" scoped></style>