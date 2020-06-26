<template>
  <section id="trial">
      <div class="row">
        <div class="col-sm-6 col-12 image d-flex justify-content-md-center align-items-center">
            <div class="text-center px-5 text-white">
            <h1> Welcome to MyCScore</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing . <br>In iusto corrupti eos elit beunos jeybd totam iste distinctio facere blanditiis.
            <br> totam iste distinctio facere laudantium blanditiis.</p>
            </div>
        </div>
        <div class="col-sm-6 col-12 px-lg-5 form-box">
            <div class="p-5">
                <div class="text-center mb-4">
                    <router-link to="/">
                        <img src="../assets/MyCScore.png" height="40px"/>
                    </router-link>
                </div>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(signUp)">
                        <div class="mt-4">
                            <label>First Name</label>
                            <ValidationProvider name="First name" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="user.firstname" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-4">
                            <label>Last Name</label>
                            <ValidationProvider name="Last name" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="user.lastname" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-4">
                            <label>Email Address</label>
                            <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                                <input type="email" v-model="user.email" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-4">
                            <label>Phone Number<span style="font-size: 9px;"> (with valid country code)</span></label>
                            <ValidationProvider name="Phone number" rules="required" v-slot="{ errors }">
                                <input type="text" v-model="user.phone" class="form-control form-input"/>
                                <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="mt-4 mb-5">
                            <label>Password</label>
                            <ValidationProvider name="Password" rules="required|min:6" v-slot="{ errors }">
                            <div class="view">
                            <input :type="type" v-model="user.password" class="form-control form-input">
                            <i id="pass-status" class="" v-bind:class="[show]" aria-hidden="true" @click="viewPassword()"></i>
                            </div>
                            <span style="color:red; font-size: 10px">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <button type="submit" class="btn btn-primary login-btn m-0">Sign Up</button>
                    </form>
                </ValidationObserver>


                <p class="account pt-3">Already have an account? 
                    <router-link to='/login'>
                        <span style="color: #F69409;">Log In</span>
                    </router-link>
                </p>

            </div>
        </div>
      </div>
  </section>
</template>

<script>
import axios from '../axios'
import BASE_URL from '../../env';
export default {
  data() {
    return {
      type: "password",
      show: "fa fa-eye",
      apiDomain: BASE_URL,
      user: {
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          password: ""
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
     signUp(){
      axios.post(`${this.apiDomain}/register`, this.user).then(response => {
            this.$toastr.s("A verification link has been sent to your mail", "Account created");
        })
        .catch(errors => {
            if (!errors.response) {
              this.$toastr.e("Please fill all fields correctly", "Sign Up Failed");
            } else {
              alert(error.response.message.index.msg)
            }
          })
          
      }
     }
  }
</script>

<style scoped>
#trial {
  max-width: 100vw !important;
  overflow-x: hidden;
}
.image {
  background-image: url('../assets/login.png');
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
.forgot {
  font-size: 12px;
  color: #001B9B;
  float: right;
}
.login-btn {
  background-color: #001B9B !important;
  width: 100%;
  height: 50px;
  border-radius: 8px;
}
.login-btn:hover{
  background-color: rgb(31, 50, 146) !important;
}
.login-btn:focus{
  outline: none !important;
}
.account {
    color: #707070;
    text-align: center;
    font-size: 12px;
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