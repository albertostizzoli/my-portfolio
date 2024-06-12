<template>
  <div v-if="loading">
    <LoaderComponent></LoaderComponent>
  </div>
  <div v-else :class="store.portfolio ? 'appearance' : ''">
  <HeaderSection></HeaderSection>
  <main>
    <WrapperSection></WrapperSection>
    <router-view></router-view>
  </main>
  <FooterSection></FooterSection>
  </div>
</template>

<script>
import { store } from './store.js';
import LoaderComponent from './components/LoaderComponent.vue';
import HeaderSection from './components/HeaderSection.vue';
import WrapperSection from './components/WrapperSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  components: {
    LoaderComponent,
    HeaderSection,
    WrapperSection,
    FooterSection,
  },
  data() {
    return {
      store,
      loading: true,
    }
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  },
  mounted(){
    this.loader();
  }

}
</script>

<style lang="scss" scoped>

.appearance {
  overflow: hidden;
}

</style>