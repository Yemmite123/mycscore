<template>
   <!-- Full Page Intro -->
<header class="bodyBack2"> 
  <app-header></app-header> 
    <div style="padding-bottom:6%" class="container">
        <div class="row">
            <div style="" class="col-md-10 home_title">
                <h2 class="">MyCScore took shape after realising the market is overwhelmed with tons of Credit Platforms with interesting rates.</h2>
                
            </div>
            <div class="col-md-3">
                <!-- <img class="container_dashboard container-fluid" src="../assets/dashboard.png" alt=""> -->
            </div>
            <div class="container about_param">
              <div class="row">
                <div class="col-md-6">
                  <p>We pride ourselves on being Technology Native and not being locked into certain technologies instead provided the best solution for customers. <br>We pride ourselves on being Technology Native and not being locked into certain technologies instead provided the best solution for customers.</p>
                </div>
                <div class="col-md-6">
                  <p>We pride ourselves on being Technology Native and not being locked into certain technologies instead provided the best solution for customers. <br>We pride ourselves on being Technology Native and not being locked into certain technologies instead provided the best solution for customers.</p>
                </div>
              </div>
            </div>

        </div>
    </div>

    
<div style="" class="container-fluid bg">
  <div class="row">
        
  </div>
</div>
<div style="background-color: #F7F7F7; padding-bottom:10%" class="container-fluid">
<div class="container about_con">
  <div class="row">
    <div class="col-md-5 about_how mb-4">
      <h1>How It Works</h1>
      <p>
        MyCScore uses algorithm operated by AI, to generate your credit scores within seconds, or within two blinks of an eye. First, you click on Get Started, and it gives you an application to fill. Once you are done with the application, you are required to submit it for the system to generate your own personal unique ID. 
        Once your ID is ready, the link will be shared to all credit platforms that offer the type of loan you are looking for. With this link to your ID, they will be able to download and review your application. Our website requires permissions; these permissions strengthen your scoring. That is all the step you must take, and you are good to go.

      </p>
    </div>
    <div class="col-md-1">
    </div>
    <div class="col-md-6 play_info">
      <center><img height="95px" src="../assets/play.png"></center>
    </div>
  </div>
</div>
</div>

<div class="container vision_sec">
  <div class="row">
    <div class="col-md-6">
        <img height="475" class="img_dis1" src="../assets/visionCir.png">
         <img  class="img-fluid img_dis" src="../assets/vision.png">
    </div>
    <div class="col-md-6">
     
       <div class="vision">
         <h1>Our Vision</h1>
       <p>To be Africa’s best trusted credit scoring powerhouse, facilitating access to credit for consumers from <br> all works of life. </p>
       </div>
    </div>
  </div>
</div>

<div style="margin-top:10%" class="container goalSec">
  <div class="row">
    <div  class="col-md-12 goalBG"> 
       <div class="vision22">
         <h1>Our Goal</h1>
         <p>To be Africa’s most prominent powerhouse in Credit Scoring </p>
       </div>
    </div>
  </div>
</div>

<div class="container vision_sec2">
  <div class="row">
    <div class="col-md-6">
     
       <div class="vision">
         <h1>Our Goal</h1>
       <p>MyCScore is committed to reducing credit risks and Non-performing loans for financial institutions, by giving access to highly predictive calculations showing the probability of risk on customers. It will help to make faster, and better credit scoring decisions with zero error rate</p>
       </div>
    </div>

    <div class="col-md-6">
         <img  class="img-fluid" src="../assets/goal.png">
    </div>
  </div>
</div>

<div class="worrying py-5">
  <div class="row">
    <div class="col-md-12">
       <h1>Stop worrying about Money</h1>
       <p>Get it today at MyCScore</p>
       <center><router-link to="/register"> <button class="btn">Get Started</button>
       </router-link></center>
    </div>
  </div>
</div>


<app-footer></app-footer> 
</header>
</template>

<script>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
    export default {
       data() {
           return {
               
           }
       },
       components:{
           'app-header': Header,
           'app-footer': Footer
       }
    }
</script>

<style scoped>

.img_dis{
  display: none;
}
.vision_sec{
  margin-top:15%;
}
.vision_sec2{
  margin-top:15%;
  display: none;
}

.bodyBack2{
      background: url("../assets/backgroundscores.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
}

.bgImage {
    background: url("../assets/backgroundwave.png");
    background-repeat: no-repeat;
     /* background-size: cover; */
    margin-bottom: 12%;
    height: 600px;
    width: 100%;
    margin-top:-200px
}

.letStarted{
    height: 100px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
    margin-top: 20%;
}

.letStarted p{
    text-align: center;
    margin-top: 4%;
    font-family: Object Sans Regular;
    font-size: 18px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

}
.letStarted button{
    background: #FA9917 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    margin-top: 10%;
    text-align: left;
    font-family: Object Sans Regular;
    font-size: 15px;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: capitalize;
    opacity: 1;
}

.home_title h2{
    text-align: left;
    font-family: Proxima Nova Bold;
    font-size: 50px;
    letter-spacing: 0px;
    color: #1B2484;
    margin-top: 25%;
}
.home_title p{
    text-align: left;
    font-family: Object Sans Regular;
    font-size: 17px;
    letter-spacing: 0px;
    color: #1B2484;
    text-transform: capitalize;
    /* margin-top: 24%; */
}


.bg {
  /* The image used */
   background: #F7F7F7;
    width: 1400px;
    height: 150px;
    border-radius: 180px 180px 0px 0px;
    
}




.about_param{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 14px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 0.7;
  margin-top: 6%;
}
.play_info{
  background: url("../assets/thoughtful-businesswomen-discussing-problems-in-bright-3831888.png");
  border-radius:10px ;
  padding-bottom: 15%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.play_info center{
  margin-top: 30%;
}
.about_how{
 margin-top: 10%;
}
.about_con{
  margin-top: -5%;
  
}
.about_how h1{
  text-align: center;
  font-family: Object Sans Heavy;
  font-size: 20px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}

.about_how p{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}
.worrying{
  background: #FFE4D1 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  margin: 0 10% 10%;
}
.worrying h1{
  text-align: center;
  font-family: Object Sans Heavy;
  font-size: 40px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}
.worrying p{
  text-align: center;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}
.worrying button{
  text-align: center;
  background: #F69409 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  font-family: Object Sans Regular;
  font-size: 15px;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
  opacity: 1;
  padding: 20px 32px 20px 32px;
}
.vision{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 200px;
  margin-top: 29%; 
  width: 100%; 
}
.vision h1{
  text-align: left;
  font-family: Object Sans Heavy;
  font-size: 25px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 30px;
  padding-top: 5%;
}

.vision p{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 15px;
}
.goal{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 200px;
  margin-top: 9%; 
  padding-left: -10%;
    object-position: 50%  -20%;

}
.goal p{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 15px;
}
.goal h1{
  text-align: left;
  font-family: Object Sans Heavy;
  font-size: 25px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 30px;
  padding-top: 1%;
}
.goalBG{
  background: url("../assets/newgoal.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 12%;
  height: 600px;
  width: 100%;
  margin-left: 7.7%;
}
.vision22{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 200px;
  margin-top: 15%; 
  width: 48%; 
}
.vision22 h1{
  text-align: left;
  font-family: Object Sans Heavy;
  font-size: 25px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 30px;
  padding-top: 5%;
}

.vision22 p{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 15px;
}


/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
 .bg {
  /* The image used */
   background: #F7F7F7;
    width: 100%;
    height: 50px;
    border-radius: 180px 180px 0px 0px;
    
}

.about_how p{
  text-align: center;

  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}

.vision p{
  text-align: left;
  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 15px;
  padding-bottom: 10%;
}

.home_title h2{
    text-align: left;
    font-family: Proxima Nova Bold;
    font-size: 30px;
    text-align: center;
    letter-spacing: 0px;
    padding-right: 1%;
    padding-left: 0%;
    color: #1B2484;
    margin-top: 25%;
}

.img_dis{
  display: block;
}

.img_dis1{
  display: none;
}

.vision{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 90%;
  margin-top: 0%; 
  width: 100%; 
}

.vision_sec{
  margin-top:6%
}
.vision h1{
  text-align: left;
  font-family: Object Sans Heavy;
  font-size: 25px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 0px;
  padding-top: 5%;
}
.goalSec{
  display: none;
}
.vision_sec2{
  margin-top:15%;
  display: block;
  margin-bottom: 8%;
}
.bodyBack2{
      background: url("../assets/2709893.svg");
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
}


}


/* iPads (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
/* STYLES GO HERE */
.bg {
  /* The image used */
   background: #F7F7F7;
    width: 100%;
    height: 150px;
    border-radius: 180px 180px 0px 0px;
    
}

 .bg {
  /* The image used */
   background: #F7F7F7;
    width: 100%;
    height: 50px;
    border-radius: 180px 180px 0px 0px;
    
}

.about_how p{
  text-align: center;

  font-family: Object Sans Regular;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
}

.img_dis{
  display: block;
}

.img_dis1{
  display: none;
}

.vision{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 90%;
  margin-top: 0%; 
  width: 100%; 
}



.vision_sec{
  margin-top:6%
}
.vision h1{
  text-align: left;
  font-family: Object Sans Heavy;
  font-size: 25px;
  letter-spacing: 0px;
  color: #1B207F;
  opacity: 1;
  margin-left: 30px;
  margin-top: 0px;
  padding-top: 5%;
}
.goalSec{
  display: none;
}
.vision_sec2{
  margin-top:15%;
  display: block;
  margin-bottom: 8%;
}
.bodyBack2{
      background: url("../assets/2709893.svg");
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
}
}
@media only screen and (max-width: 600px) {
  .about_param {
    padding: 10px 40px;
  }
  .vision {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .vision_sec2 {
    margin-top: 0px;
  }
  .worrying {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>