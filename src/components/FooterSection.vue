<template>
  <footer class="text-center">
    <ul>
      <li class="me-3"><a href="https://github.com/albertostizzoli"><i class="fa-brands fa-github fa-3x"></i></a></li>
      <li class="me-3"><a href="https://drive.google.com/file/d/1xg3Yi_ecrxC5IntllN7P43DrMWqD46Ot/view?usp=drive_link"><i class="fa-solid fa-file fa-3x"></i></a></li>
      <li class="me-3"><a href="https://www.linkedin.com/in/alberto-stizzoli-82a676260/"><i class="fa-brands fa-linkedin-in fa-3x"></i></a></li>
    </ul>
    <h2 class="text-white mb-5">©{{ currentYear }} Alberto Stizzoli</h2>
  </footer>
</template>




<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

footer {
  padding: 5rem;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-bottom: 15px;

    li {
      display: flex;
      justify-content: center;
      padding-right: 15px;

      a {
        text-decoration: none;
        color: $secondary-color;

        &:hover {
          color: $primary-color;
          scale: 1.5;
          transition: .3s;
        }

      }
    }
  }
}

@media screen and (min-width: 768px) {
  footer {
    display: none;
  }
}
</style>