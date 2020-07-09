<template>
  <section id="register">
      <div class="row">
        <div class="col-lg-5 col-12 image vh-100">
          <div class="p-5 mx-lg-5">
            <router-link to="/">
              <img src="../assets/MyCScore.png" height="40px"/>
            </router-link>
          </div>
          <div class="mt-md-5 pt-md-5">
            <div class="px-5 mx-lg-5 mt-md-5">
            <h2 class="few-clicks mb-5">A few clicks away to begin</h2>
            <p class="sub-text">Join us today!<br>
            Credit Risk Management Powered By Artificial Intelligence.
            We understand what it takes to run a profitable online lending operation.</p>
            </div>
        </div>
        </div>
          <div class="col-lg-5 col-12 form-box my-5 ml-lg-5">
              <div class="row box mb-4" @click="individual()">
                <div class="col-10 d-flex">
                  <img src="../assets/user.png" alt="icon" height="40px" width="40px"/>
                    <div class="px-2">
                      <h6 class="mb-0 individual">Individual</h6>
                      <p class="mb-0" style="font-size:13px; color:#001B9B;">For Individual Use</p>
                  </div>
                </div>
                
                <div class="col-2">
                  <img src="../assets/Go.png" height="42px"/>
                </div>
              </div>

              <!-- Enterprise -->
              <div class="row box" @click="enterprise()">
                <div class="col-10 d-flex">
                  <img src="../assets/building.png" alt="icon" height="40px" width="40px"/>
                    <div class="px-2">
                      <h6 class="mb-0 individual">Enterprise</h6>
                      <p class="mb-0" style="font-size:13px; color:#001B9B;">For Company & Organizations</p>
                  </div>
                </div>
                
                <div class="col-2">
                  <img src="../assets/Go.png" height="42px"/>
                </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
 methods: {
   individual(){
     this.$router.push('/signup')
   },
   enterprise(){
     this.$router.push('/requestdemo')
   }
 }
}
</script>

<style scoped>
#register {
  max-width: 100vw;
  overflow-x: hidden;
}
.image {
  background-color: #c5cdf5;
}
.few-clicks {
  color: #001B9B;
  font-weight: bold;
}
.sub-text {
  color: #001B9B;
  font-size: 14px;
}
.form-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  border: 1px solid #c5cdf5;
  border-radius: 8px;
  width: 90%;
  padding: 30px 5px 30px 40px;
}
.box:hover {
  border: none;
  box-shadow: 0 0 11px rgba(33,33,33,.2);
}
.individual {
  font-size:16px;
  font-weight:bold; 
  color:#001B9B;
}



@media only screen and (max-width: 800px) {
.image {
 max-height: 70vh !important;
}
.box {
  padding: 30px 15px 30px 20px;
}
}
</style>