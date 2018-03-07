<template>
  <div class="container">
    <menu-nav></menu-nav>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuNav from './componentes/menuNav.vue';
import Inicio from './componentes/inicio.vue';
export default {
  components: {
      MenuNav,
      Inicio,
  },
  data () {
    return {

    }
  }
  }
</script>

<style lang="scss">

</style>