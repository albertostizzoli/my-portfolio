<template>
  <div>
    <div class="container">
      <svg id="word" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="600" height="200">
        <!-- Parola animata "Benvenuto" -->
        <text id="animated-text" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
          Benvenuto
        </text>
      </svg>
    </div>
  </div>
</template>


<script>
export default {

};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #word {
    width: 100%;
    max-width: 400px;

    #animated-text {
      font-family:  "Outfit", serif;
      font-size: 80px;
      font-weight: bold;
      fill: none; 
      stroke-width: 4;
      stroke-dashoffset: 3100;
      stroke-dasharray: 3100;
      animation:  fill_animation 1.5s ease-in-out 0s forwards;
    }
  }
}

@keyframes fill_animation {
  0% {
    fill: none; /* Nessun riempimento */
  }

  20% {
    fill: rgba(255, 255, 255, 0.2);
  }

  40% {
    fill: rgba(255, 255, 255, 0.6);
  }

  80% {
    fill: rgba(255, 255, 255, 0.8);
  }

  100% {
    fill: $secondary-color; /* Riempimento bianco finale */
  }
}
</style>