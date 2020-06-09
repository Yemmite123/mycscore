<template>
 <!--Navbar -->
<nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
  <div style="margin-top:2%" class="container">
     <router-link to="/"  exact=""><a class="navbar-brand"><img height="45px" src="./assets/MyCScore.png" alt=""> </a></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
      <router-link to="/About" class="nav-item" tag="li" active-class="active"><a class="nav-link">About Us</a></router-link>
      <router-link to="/Service" class="nav-item" tag="li" active-class="active"><a class="nav-link">Services</a></router-link>
      <router-link to="/Contact" class="nav-item" tag="li" active-class="active"><a class="nav-link">Contact</a></router-link>
       <li class="nav-item">
        <a class=" btn_get_started" href="#">
          Get Started
        </a>
      </li>
      
    </ul>
  </div>
 </div>
</nav>


<!--/.Navbar -->
</template>



<script>
export default {
    
}
</script>

<style scoped>
.navbar.navbar-light .breadcrumb .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link {
    -webkit-transition: .35s;
    transition: .35s;
    font-family: Object Sans Regular;
    font-size: 17px;
    letter-spacing:0px;
    color: #1B207F;
    opacity: 1;
    transition: .35s;
}
.navbar.navbar-light .breadcrumb .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link:hover {
   color: #FA9917;
}

.btn_get_started{
    width: 140px;
    text-align: center;
    background: #FA9917 0% 0% no-repeat padding-box;
    border-radius: 10px;
    font-family: Object Sans Regular;
    font-size: 15px;
    color: #ffffff;
    opacity: 1;
    padding: 10px 10px 10px 10px;
}
</style>