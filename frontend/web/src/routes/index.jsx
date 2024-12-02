import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

import PrintHistory from '../pages/PrintHistory/PrintHistory';

import LoginPage from '../pages/Login/LoginPage';
import AddPrinting from '../pages/AddPrinting/AddPrinting';
import ProfileStaff from '../pages/Profile/ProfileStaff';
import PrintHistoryStaff from '../pages/PrintHistory/printHistoryStaff';
import HomeStaff from '../pages/Home/HomeStaff';

const routes = [
    {
        path: '/',
        component: LandingPage,
        layout: false,
        layoutStaff: false,
    },
    {
        path: '/home',
        component: Home,
        layout: true,
        layoutStaff: false,
    },
    {
        path: '/home-staff',
        component: HomeStaff,
        layout: false,
        layoutStaff: true,
    },
    {
        path: '/login',
        component: LoginPage,
        layout: false,
        layoutStaff: false,
    },
    {
        path: '/add-printing',
        component: AddPrinting,
        layout: true,
        layoutStaff: false,
    },
    {
        path: '/profile',
        component: Profile,
        layout: true,
        layoutStaff: false,
    },
    {
        path: '/profile-staff',
        component: ProfileStaff,
        layout: false,
        layoutStaff: true,
    },
    {
        path: '/print-history',
        component: PrintHistory,
        layout: true,
        layoutStaff: false,
    },
    {
        path: '/print-history-staff',
        component: PrintHistoryStaff,
        layout: false,
        layoutStaff: true,
    },
];

export default routes;
