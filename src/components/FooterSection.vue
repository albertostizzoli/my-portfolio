<template>
  <footer class="text-center">
    <div class="d-flex justify-content-center align-items-center">
      <ul class="d-flex me-4 list-unstyled">
        <li class="me-3"><a href="https://drive.google.com/file/d/1wAk8-dR9JLRhjfM7XAVcHdX81sc7C6-z/view?usp=drive_link"><i class="fa-solid fa-file fa-3x"></i></a></li>
        <li class="me-3"><a href="https://github.com/albertostizzoli"><i class="fa-brands fa-github fa-3x"></i></a></li>
        <li class="me-3"><a href="https://www.linkedin.com/in/alberto-stizzoli-82a676260/"><i class="fa-brands fa-linkedin-in fa-3x"></i></a></li>
      </ul>
      <div class="d-flex flex-column text-white align-items-start fs-4">
        <h4 class="d-flex align-items-center"><i class="fa-solid fa-location-dot me-2"></i> Verona, Italia</h4>
        <h4 class="d-flex align-items-center"><i class="fa-regular fa-envelope me-2"></i><a class="text-decoration-none text-white">albertostizzoli60@gmail.com</a></h4>
      </div>
    </div>
    <h2 class="text-white">©{{ currentYear }} Alberto Stizzoli</h2>
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
    flex-direction: column;
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
  footer {
    display: none;
  }
}
</style>