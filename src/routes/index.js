import HomePage from '../pages/Homepage';
import Login from '../pages/Login';
import Details from '../pages/Details';
import Category from '../pages/Category';
import Reading from '../pages/Reading';

// Use without login
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/details', component: Details },
    { path: '/category', component: Category },
    { path: '/read', component: Reading, layout: null },
    { path: '/login', component: Login, layout: null },
];

// Routes need to login to use
export const privateRoutes = [];
