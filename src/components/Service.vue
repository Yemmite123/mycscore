<template>
   <!-- Full Page Intro -->
<div>
  <div class="bodyBack2">
    <app-header></app-header> 
    <div  class="container artificial pb-5">
        <div class="row">
            <div style="margin-top:9%" class="col-md-6 home_title">
                <h2 class="">How Artificial Intelligence shapes Credit Scoring process.</h2>
                <p>We pride ourselves on being Technology Native and not <br>being locked into certain technologies instead provided the best solution for customers.</p>
               
            </div>
            <div class="col-md-6">
                <img class="img-fluid service_img" src="../assets/su0KlPArJ1.png" alt="">
            </div>
        </div>
    </div>
  </div>


<section id="services-tab">
 <div style="margin-bottom:10%" class="container services-tab">
  <div class="row">
    <div class="col-md-12">
        <div class="row">
  <div class="col-md-5 mb-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home"
        role="tab" aria-controls="home"> <span class="dot"><center class="numberLt">1</center></span> <span class="numberText">Credit Scoring</span></a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile"
        role="tab" aria-controls="profile"><span class="dot"><center class="numberLt">2</center></span> <span class="numberText">Credit Analytics/ Reporting</span></a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages"
        role="tab" aria-controls="messages"><span class="dot"><center class="numberLt">3</center></span> <span class="numberText">Artificial Intelligence as a service</span></a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings"
        role="tab" aria-controls="settings"><span class="dot"><center class="numberLt">4</center></span> <span class="numberText">Risk Management</span></a>
    </div>
  </div>
  <div class="col-md-7">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active listActivate" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <h1>Credit Scoring</h1>
          <p>For each application, your credit score will be unique and tailor-made just for you. 
            We use millions of data provided from you to create a credit score, necessary to boost your approval rates and reduce 
            delinquency chances. This score is accurate, and minimally devoid of fallacy.
          </p>
          <router-link to="Register"><button class="btn">Let’s Begin</button></router-link>
      </div>
      <div class="tab-pane fade listActivate" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <h1>Credit Analytics/ Reporting</h1>
          <p>
            This service provides a platform for an interested financial institution, to look at a detailed report of
            your credit score. We use data and insights from your credit activities, to provide an analytic form of profitability
            plan for institutions, to guide them into knowing the benefits or disadvantages of lending out money to a user.
          </p>
          <router-link to="Register"><button class="btn">Let’s Begin</button></router-link>
      </div>
      <div class="tab-pane fade listActivate" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
         <h1>Artificial Intelligence as a service</h1>
          <p>AI is the latest tool from financial technology for obtaining the perfect credit score, improve customer engagement, and satisfy both users and financial institutions.  It scans online credit companies for instances of frauds and keeps a user’s application from them. It works easy with other software and algorithm without clashing, and it respects privacy laws, giving companies the opportunity to read a detailed report that might have been overlooked in the manual version.</p>
          <router-link to="Register"><button class="btn">Let’s Begin</button></router-link>
      </div>
      <div class="tab-pane fade listActivate" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
          <h1>Risk Management</h1>
          <p>Marketers and financial institution are given the chance of seeing and managing a user’s application and credit score. They understand the probability of default, and they are advised on the risks of approving each user’s loan.
          Users are also updated on the interest rates of each financial institution that matches their application. They are advised on the risk of taking the loan, and their probability of being able to pay back without defaulting. It is a win-win situation for both forms of users.
          </p>
          <router-link to="Register"><button class="btn">Let’s Begin</button></router-link>
      </div>
    </div>
  </div>
</div>
    </div>
   
  </div>
</div>
</section> 
<!-- <app-blogs></app-blogs>  -->
<app-footer></app-footer> 
</div>
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

.bodyBack2{
      background: url("../assets/backgroundscores.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
}
.artificial{
  margin-bottom: 8%;
}
.home_title h2{
    text-align: left;
    font-family: Proxima Nova Bold;
    font-size: 45px;
    letter-spacing: 0px;
    color: #1B2484;
    margin-top: 25%;
}
.services-tab {
  background: #fff;
}
.home_title p{
    text-align: left;
    font-family: Object Sans Regular;
    font-size: 17px;
    letter-spacing: 0px;
    color: #1B2484;
    text-transform: capitalize;
    padding-top: 10px;
    /* margin-top: 24%; */
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

.service_img{
  margin-top: 30%;
}


.list-group-item {
    position: relative;
    display: block;
    padding: 1.3rem 0rem;
    background-color: none;
    border:none
}
.list-group-item.active {
    background-color: #FFFFFF;
    border:none
}
.list-group-item.active .dot{
  background-color: #F69409;
}
.list-group-item.active .numberText{
  color: #1B2484;
  opacity: 1;
}
.dot {
    height: 60px;
    width: 60px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    color:white;
}
.list-group-item-action:focus, .list-group-item-action:hover {
  background: none !important;
}
.numberLt{
    padding-top: 7px;
    text-align: center;
    font-family: Proxima Nova Bold;
    font-size: 30px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.numberText{
    text-align: left;
    font-family: Object Sans Heavy;
    font-size: 18px;
    letter-spacing: 0px;
    color: #1B207F;
    opacity: 0.5;
    padding-left: 24px;
}
.listActivate h1{
    text-align: left;
    font-family: Proxima Nova Bold;
    font-size: 55px;
    letter-spacing: 0px;
    color: #1B2484;
    opacity: 1;
}
.listActivate p{
    text-align: left;
    font-family: Object Sans Regular;
    font-size: 18px;
    letter-spacing: 0px;
    color: #1B2484;
    opacity: 1;
    padding-top: 25px;
}
.listActivate button{
    background: #F69409 0% 0% no-repeat padding-box;
    border-radius: 10px;
    font-family: Object Sans Regular;
    font-size: 18px;
    opacity: 1;
    letter-spacing: 0px;
    text-transform: capitalize;
    color: #FFFFFF;
    opacity: 1;
    margin-top: 5%;

}

/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
/* STYLES GO HERE */
.service_img{
  margin-top: 0%;
}
.numberText{
    text-align: left;
    font-family: Object Sans Heavy;
    font-size: 14.5px;
    letter-spacing: 0px;
    color: #1B207F;
    opacity: 0.5;
    padding-left: 24px;
}
.btn{
    margin: 0 auto;
    display: block;
}
.listActivate h1{
    text-align: center;
    font-family: Proxima Nova Bold;
    font-size: 40px;
    letter-spacing: 0px;
    color: #1B2484;
    opacity: 1;
}
.home_title h2 {
  font-size: 40px;
}
}

</style>