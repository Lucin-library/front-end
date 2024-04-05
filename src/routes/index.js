import HomePage from '../pages/Homepage';
import Login from '../pages/Login';
import Details from '../pages/Details';
import Category from '../pages/Category';
import SwiperSlider from '../layout/components/SwiperSlide';

// Use without login
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/details', component: Details },
    { path: '/category', component: Category },
    { path: '/swiper', component: SwiperSlider },
    { path: '/login', component: Login, layout: null },
];

// Routes need to login to use
export const privateRoutes = [];
