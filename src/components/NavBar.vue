<template>
    <nav class="navbar sticky-top navbar-expand-lg" style="background-color: rgb(164, 33, 13);">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/" exact>HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu" exact-path class="nav-link" active-class="active">MENU</router-link>
        </li>
      </ul>
      <div class="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/login" exact-path class="nav-link" active-class="active">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" exact-path class="nav-link" active-class="active">REGISTER</router-link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
        
        created(){
    this.currentRoute;
    //this.nombreRuta = this.$route.name;
},
computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
      }
</script>