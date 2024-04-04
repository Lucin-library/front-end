import HomePage from '../pages/Homepage';
import Login from '../pages/Login';
import Details from '../pages/Details';

// Use without login
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/details', component: Details },
    { path: '/login', component: Login, layout: null },
];

// Routes need to login to use
export const privateRoutes = [];
