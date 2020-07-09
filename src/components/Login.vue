import axios from '../axios';
<template>
  <section id="trial">
      <div class="row">
        <div class="col-lg-6 col-12 image d-flex justify-content-md-center align-items-center vh-100">
            <div class="text-center px-5 text-white">
            <h1> Welcome to MyCScore</h1>
            <p>Join us today!<br>
            Credit Risk Management Powered By Artificial Intelligence.<br>
            We understand what it takes to run a profitable online lending operation.</p>
            </div>
        </div>
        <div class="col-lg-6 col-12 px-lg-5 form-box">
            <div class="p-5 mx-lg-4">
                <div class="text-center mb-4">
                    <router-link to="/">
                        <img src="../assets/mycscore.png" height="40px">
                    </router-link>
                </div>
                <div class="mt-5">
                    <label>Email Address</label>
                    <input type="email" v-model="email" class="form-control form-input"/>
                </div>

                <div class="mt-5">
                    <label>Password</label>
                    <div class="view">
                    <input :type="type" v-model="password" class="form-control form-input">
                    <i id="pass-status" class="" v-bind:class="[show]" aria-hidden="true" @click="viewPassword()"></i>
                    <p class="forgot pt-2">Forgot Password?</p>
                    </div>
                </div>
                <button class="btn btn-primary login-btn mt-2" @click="login()">Log In</button>
                <p class="account pt-3">Don't have an account? 
                    <router-link to='/signup'>
                        <span style="color: #F69409;">Sign Up</span>
                    </router-link>
                </p>

            </div>
            <p class="text-center mt-5"><router-link to="/register" class="switch">
                Want to register as an enterprise? Switch user
                </router-link>
            </p>
        </div>
      </div>
  </section>
</template>

<script>
import axios from '../axios'
import BASE_URL from '../../env';

export default {
    layout: 'bare',
  data() {
    return {
     type: "password",
     show: "fa fa-eye",
     apiDomain: BASE_URL,
     email: '',
     password: ''
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
     login(){
      if(this.email === '' || this.password === ''){
        this.$toastr.e("Please check credentials and try again", "Login Failed");
      }else {
      axios.post(`${this.apiDomain}/login`, {
        email: this.email,
        password: this.password
        }).then(response => {
            this.$toastr.s("User account", "Login Successful");
        })
        .catch(errors => {
            if (!errors.response) {
              this.$toastr.e("Wrong email or password", "Login Failed");
              alert(error.response.data.message)
            } else {
              this.$toastr.e("Wrong email or password", "Login Failed");
              console.log(errors)
              alert(error.response.data.message)
            }
          })
      }
    },
    // error(message) {
    //   this.errorMessage = message
    //   this.showError = true
    // }
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
  width: 80% !important;
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
  margin: 0;
  text-transform: capitalize;
  font-size: 16px;
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
  height: 35px;
  font-size: 15px;
  color: #001B9B;
  padding: 0;
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
.switch {
  color:#001B9B;
}

@media only screen and (max-width: 800px) {
.image {
 max-height: 70vh !important;
}
}

</style>