import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import LoginPage from '../pages/Login/LoginPage';

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/home',
        component: Home,
        layout: true,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/profile',
        component: Profile,
        layout: true,
    }

];

export default routes;