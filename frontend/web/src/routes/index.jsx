import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import PrintHistory from '../pages/PrintHistory/PrintHistory';

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
        path: '/profile',
        component: Profile,
        layout: true,
    },
    {
        path: '/print-history',
        component: PrintHistory,
        layout: true,
    },
];

export default routes;
