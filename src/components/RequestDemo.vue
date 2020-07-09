import enterprise from '../assets/enterprise.png';
<template>
  <section id="trial">
      <div class="row">
        <div class="col-sm-6 col-12 image d-flex justify-content-md-center align-items-center">
            <div class="text-center px-5 text-white">
            <h1> Welcome to MyCScore</h1>
            <p class="sub-text">Join us today!<br>
            Credit Risk Management Powered By Artificial Intelligence.<br>
            We understand what it takes to run a profitable online lending operation.</p>
            </div>
        </div>
        <div class="col-sm-6 col-12 px-lg-5 form-box">
            <div class="p-5 mx-3">
                <div class="text-center mb-3">
                    <router-link to="/">
                    <img src="../assets/MyCScore.png" height="40px"/>
                    </router-link>
                </div>

                <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                  <ValidationObserver v-if="currentStep === 1">
                    <fieldset>
                        <div class="mt-5">
                            <label>Enterprise Name</label>
                            <ValidationProvider name="Enterprise Name" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="enterprise.name" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-5">
                            <label>Description</label>
                            <ValidationProvider name="Description" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="enterprise.description" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-4">
                            <label>Sector</label>
                            <ValidationProvider name="Sector" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="enterprise.sector" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-5">
                            <label>Contact Email</label>
                            <ValidationProvider name="Email" rules="required||email" v-slot="{ errors }">
                                <input type="text" v-model="enterprise.email" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </fieldset>
                  </ValidationObserver>

                  <ValidationObserver v-else-if="currentStep === 2">
                    <fieldset>
                        <div class="mt-4">
                            <label>Enterprise logo</label>
                            <ValidationProvider name="Company Logo" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="enterprise.logo" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="mt-4">
                            <label>Company Document</label>
                            <ValidationProvider name="Company Document" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="enterprise.document" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        
                    </fieldset>
                  </ValidationObserver>
                
                <div class="my-5"  v-if="currentStep === 1">
                   <router-link to="/register"> <button class="cancel-btn">Cancel</button></router-link>
                    <button class="btn-primary login-btn float-right" v-if="currentStep === 1">Next</button>
                </div>
                <div class="my-5" v-if="currentStep === 2">
                    <button class="cancel-btn" @click="goToStep(currentStep - 1)">Previous</button>
                    <button type="submit" class="btn-primary login-btn float-right" >Get Demo</button>
                </div>

                </form>
                </ValidationObserver>

            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      type: "password",
      show: "fa fa-eye",
      currentStep: 1,
      enterprise: {
          name:'',
          description: "",
          sector: "",
          email: "",
          logo: "",
          document: ""
      }
    }
  },
  methods: {
    viewPassword() {
       if(this.type === "password") {
          this.type = "text"
          this.show = "fa fa-eye-slash"
       } else {
          this.type = "password"
          this.show = "fa fa-eye"
       }
     },
     onSubmit() {
      if (this.currentStep === 2){
        this.$toastr.s("A link has been seen to your mail", "Demo Request Successful");
      }else if (this.currentStep === 1){
        this.currentStep++ ;
      }
      else if (this.enterprise ) {this.$toastr.e("Ensure all required fields have been completed", "Demo Request Failed")};
    },
     goToStep (step) {
      if (step < 1) {
        return;
      }

      if (step > 2) {
        this.onSubmit();
        return;
      }

      this.currentStep = step;
    },
  }
}
</script>

<style scoped>
#trial {
  max-width: 100vw !important;
  overflow-x: hidden;
}
.image {
  background-image: url('../assets/enterprise.png');
  background-size: cover;
  height: 100vh;
  width: 50vw;
  overflow-x: hidden;
  overflow-y: hidden;
}
.form-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
label {
  color: #656771;
  font-size: 14px;
}

.login-btn {
  background-color: #001B9B !important;
  border: 1px solid #001B9B;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  margin: 0;
}
.login-btn:hover{
  background-color: rgb(31, 50, 146) !important;
}
.login-btn:focus{
  outline: none !important;
}
.cancel-btn {
  background-color: #fff !important;
  color: #001B9B;
  border: 1px solid #f69409;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  margin: 0;
}
.cancel-btn:hover, .cancel-btn:active, .cancel-btn:visited {
  color:#f69409 !important;
  border: 1px solid #f69409 !important;
}
::-webkit-scrollbar {
    display: none;
  }
.form-input {
  background: transparent !important;
  border: none !important;
  border-bottom: 1px solid #707070 !important;
  border-radius: 0px !important;
  height: 25px;
  font-size: 15px;
  color: #001B9B;
  padding: 0;
}
.select-form-input {
  background: transparent !important;
  border: none !important;
  border-bottom: 1px solid #535353 !important;
  border-radius: 0px !important;
  height: 35px;
  font-size: 12px ;
} 
input.form-control:focus, 
input[type=text]:focus, 
input[type=password]:focus, 
input[type=email]:focus, 
input[type=number]:focus, 
[type=text].form-control:focus, 
[type=password].form-control:focus, 
[type=email].form-control:focus, 
[type=tel].form-control:focus,
select.form-control:focus,
[contenteditable].form-control:focus {
  box-shadow: inset 0 -1px 0 #ddd;
  padding-left: 0px;
}
select option:hover {
  background: #acacac !important;
}
.view .fa-eye,
.view .fa-eye-slash { 
  float: right;
  font-size: 13px;
  color: #001B9B;
  margin-top: -23px;
}




@media only screen and (max-width: 800px) {
.image {
 max-height: 70vh !important;
}
}

</style>