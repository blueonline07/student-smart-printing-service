import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import LoginPage from '../pages/Login/LoginPage';
import SelectUser from '../pages/Login/SelectUser';
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
        path: '/select-user',
        component: SelectUser,
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
    }

];

export default routes;