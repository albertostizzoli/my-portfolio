<template>
  <!--mostra il componente LoaderComponent solo se la variabile 'loading' è true -->
<div v-if="loading">
    <LoaderComponent></LoaderComponent>
</div>
<!--mostra il contenuto solo se la variabile 'loading' è false e la proprietà 'portfolio' dello store è true -->
<div v-else :class="store.portfolio ? 'appearance' : ''">
    <HeaderSection v-if="showHeader"></HeaderSection>
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
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    LoaderComponent,
    HeaderSection,
    FooterSection,
  },
  setup() {
    const loading = ref(true);
    const showHeader = ref(true);
    const route = useRoute(); // Hook per accedere alla route corrente

    // Uso il watch per nascondere l'header ogni volta cha vado nella SingleProject
    watch(
      () => route.name,
      (newRoute) => {
        showHeader.value = newRoute !== 'project'; // Nasconde l'header per la route 'project'
      }
    );

    // Metodo per disattivare il caricamento dopo un ritardo
    const loader = () => {
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    };

    // Chiama il metodo loader quando la pagina è caricata
    onMounted(loader);

    return {
      loading,
      showHeader,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.appearance {
  overflow: hidden;
}
</style>