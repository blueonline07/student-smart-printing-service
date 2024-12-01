import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

import PrintHistory from '../pages/PrintHistory/PrintHistory';

import LoginPage from '../pages/Login/LoginPage';
import AddPrinting from '../pages/AddPrinting/AddPrinting';


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
        path: '/add-printing',
        component: AddPrinting,
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
