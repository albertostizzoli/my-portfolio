<template>
  <!--mostra il componente LoaderComponent solo se la variabile 'loading' è true -->
<div v-if="loading">
    <LoaderComponent></LoaderComponent>
</div>
<!--mostra il contenuto solo se la variabile 'loading' è false e la proprietà 'portfolio' dello store è true -->
<div v-else :class="store.portfolio ? 'appearance' : ''">
    <HeaderSection></HeaderSection>
    <main>
      <router-view></router-view>
    </main>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import { store } from './store.js';
import LoaderComponent from './components/LoaderComponent.vue';
import HeaderSection from './components/HeaderSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  components: {
    LoaderComponent,
    HeaderSection,
    FooterSection,
  },
  data() {
    return {
      store,
      loading: true,
    }
  },
  methods: {
    // Metodo per disattivare il caricamento dopo un ritardo
    loader() {
      // Imposta un timeout che disabilita la proprietà 'loading' dopo 3 secondi (3000 millisecondi)
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
  // Ciclo di vita del componente: metodo eseguito quando il componente è montato
  mounted() {
    // Chiama il metodo 'loader' per avviare il timeout
    this.loader();
  }


}
</script>

<style lang="scss" scoped>
.appearance {
  overflow: hidden;
}
</style>