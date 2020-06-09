import Home from './components/Home.vue';
import About from './components/About.vue';
import Service from './components/Service.vue';
import Contact from './components/Contact.vue';



export const routes = [
    { path: '', component: Home},
    { path: '/About', component: About },
    { path: '/Service', component: Service },
    { path: '/Contact', component: Contact },
    { path: '/redirect-me', redirect:{ name:'home'} },
    { path: '*', redirect: '/'}

];
