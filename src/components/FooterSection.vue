<template>
    <footer class="text-center">
        <ul>
            <li><a href="https://drive.google.com/file/d/1wAk8-dR9JLRhjfM7XAVcHdX81sc7C6-z/view?usp=drive_link"><i class="fa-solid fa-file fa-3x"></i></a></li>
            <li><a href="https://github.com/albertostizzoli"><i class="fa-brands fa-github fa-3x"></i></a></li>
            <li><a href="https://www.linkedin.com/in/alberto-stizzoli-82a676260/"><i class="fa-brands fa-linkedin-in fa-3x"></i></a></li>
        </ul>
        <h2 class="text-white">©2024 Alberto Stizzoli</h2>
    </footer>
</template>

<script>
    export default {
        
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
    padding-bottom: 30px;

    li {
      display: flex;
      justify-content: center;
      padding-right: 15px;

      a {
        text-decoration: none;
        color: white;

        &:hover {
          color: $primary-color;
        }

      }
    }
  }
}

@media screen and (min-width: 768px) {
  footer ul {
    display: none;
  }
}


</style>