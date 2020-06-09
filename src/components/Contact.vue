<template>
   <!-- Full Page Intro -->
<header class="bodyBack2"> 
  <app-header></app-header> 
    <div  class="container">
        <div class="row">
            <div style="margin-top:13%" class="col-md-6 home_title">
                <h2 class="">Contact Us</h2>
            </div>
            <div class="col-md-6 thank">
               <p class="home_title1"> Thank You for your interest in MyCScore. We’d love to hear from you. </p>
                <!-- Material form login -->


    <!-- Form -->
    <form class="" style="color: #757575;" action="#!">

      <!-- First Name -->
      <div class="md-form">
        <input type="text" id="firstname" class="form-control">
        <label for="materialLoginFirstname">First Name</label>
      </div>

      <div class="md-form">
        <input type="text" id="materiallastname" class="form-control">
        <label for="materialLoginLastname">Last Name</label>
      </div>

      <div class="md-form">
        <input type="text" id="Work Email Address*" class="form-control">
        <label for="WorkEmailAddress">Work Email Address*</label>
      </div>
      
    <div class="form-group">
      <select>
        <option>I’m interested in… </option>
        <option>Value 2</option>
      </select>
      <hr>
    </div>
        
      <div class="md-form">
        <textarea id="materialContactFormMessage" class="form-control md-textarea" rows="3"></textarea>
        <label for="materialContactFormMessage">How may we be of service to you?</label>
      </div>

      
          <!-- Remember me -->
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="materialLoginFormRemember">
            <label style="font-size:13px">I agree that the information submitted above, including without limitation any proposal or idea does not violate any third party rights. Lorem ipsum dolor sit amet, consectetur adipiscing elit, dasol desre sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
          </div>
    <br>

      <!-- Sign in button -->
      <button class="btn form_btn" type="submit">Send Message</button>
    </form>
    <!-- Form -->

    

<!-- Material form login -->
            </div>
        </div>
    </div>

<app-blogs></app-blogs> 

<app-footer></app-footer> 
</header>
</template>

<script>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
import Blogs from '../components/Blogs.vue'

    export default {
       data() {
           return {
               
           }
       },
       components:{
           'app-header': Header,
           'app-footer': Footer,
           'app-blogs': Blogs
       }
    }
</script>

<style scoped>
label{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}

 select{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}
.thank{
  margin-top:13%
}
.form-group select {
  width: 100%;
  font-size: 1rem;
  height: 1.6rem;
  padding: 0.125rem 0.125rem 0.0625rem;
  background: none;
  border: none;
  line-height: 1.6;
  box-shadow: none;
}
.bodyBack2{
      background: url("../assets/backgroundscores.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 110%;
      width: 100%;
}

.home_title h2{
    text-align: left;
    font-family: Proxima Nova Bold;
    font-size: 45px;
    letter-spacing: 0px;
    color: #1B2484;
    /* margin-top: 25%; */
}
.home_title1{
    text-align: left;
    font-family: Object Sans Regular;
    font-size: 27px;
    letter-spacing: 0px;
    color: #1B2484;
    text-transform: capitalize;
    padding-top: 10px;
    /* margin-top: 24%; */
}
.form_btn{
  background: #F69409 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  font: Regular 23px/25px Object Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
 padding: 20px 32px 20px 32px;
 margin-bottom: 13%;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
/* STYLES GO HERE */
 .bodyBack2{
      background: url("../assets/2709893.svg");
      background-repeat: no-repeat;
      /* background-size: cover; */
      height: 160%;
      width: 100%;
}
.home_title h2{
  
    margin-top: 13%;
}
.home_title1{
    padding-top: 10px;
    /* margin-top: 24%; */
}
.thank{
  margin-top:3%
}

}
</style>