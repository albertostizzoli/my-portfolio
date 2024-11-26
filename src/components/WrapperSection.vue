<template>
    <div class="wrapper">
        <ul>
            <li><a href="https://drive.google.com/file/d/1wAk8-dR9JLRhjfM7XAVcHdX81sc7C6-z/view?usp=drive_link"><i class="fa-solid fa-file fa-3x"></i></a></li>
            <li><a href="https://github.com/albertostizzoli"><i class="fa-brands fa-github fa-3x"></i></a></li>
            <li><a href="https://www.linkedin.com/in/alberto-stizzoli-82a676260/"><i class="fa-brands fa-linkedin-in fa-3x"></i></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.wrapper{
    display: flex;
    align-items: end;
    position: fixed;
    bottom: 0;
}

ul{
    list-style-type: none;
    padding-bottom: 30px;

    li{
        padding-bottom: 15px;
        display: flex;
        justify-content: center;

        a{
            text-decoration: none;
            color: white;

            &:hover {
                color: $primary-color;
            }
        }
    }
}

@media screen and (max-width: 768px) {
  .wrapper {
    display: none;
  }
}

</style>