import Vue from "vue";
import Home from './components/Home';
import About from './components/About';
import Whoweare from './components/Whoweare';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Ourtourspage from './components/Ourtourspage'
import Router from "vue-router";
import AboutBooked from './components/AboutBooked';



Vue.use(Router);

const router = new Router({
    base: '/',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/whoweare",
            component: Whoweare
        },
        {
            path: "/booking",
            component: Booking
        },
        {
            path: "/contact",
            component: Contact
        },
        {
            path: "/bookedabout",
            component: AboutBooked
        },
        {
            path: "/ourtourspage",
            component: Ourtourspage
        },
        {
            path: "/admin",
            component: Admin
        }

    ]
});

export default router;