import HomePage from "../pages/Homepage";
import Login from "../pages/Login";

// Use without login
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login, layout: null },
];

// Routes need to login to use
export const privateRoutes = [];