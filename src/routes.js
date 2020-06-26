import Home from './components/Home.vue';
import About from './components/About.vue';
import Service from './components/Service.vue';
import Contact from './components/Contact.vue';
import Register from './components/Register.vue';
import UserSignup from './components/UserSignup.vue';
import Login from './components/Login.vue';
import RequestDemo from './components/RequestDemo.vue';



export const routes = [
    { path: '', component: Home},
    { path: '/About', component: About },
    { path: '/Service', component: Service },
    { path: '/Contact', component: Contact },
    { path: '/Register', component: Register },
    { path: '/signup', component: UserSignup },
    { path: '/login', component: Login},
    { path: '/requestdemo', component: RequestDemo},
    { path: '/redirect-me', redirect:{ name:'home'} },
    { path: '*', redirect: '/'}

];
