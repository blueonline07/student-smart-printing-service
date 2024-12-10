import routes from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import { Fragment, useState } from 'react';
import DefaultLayout from './Layout/Layout';
import LayoutStaff from './Layout/LayoutStaff';
import ProtectedRoute from './pages/Login/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    console.log('route layout', route.layout);
                    let Layout;
                    if (route.layout) {
                        Layout = DefaultLayout;
                    } else if (route.layoutStaff) {
                        Layout = LayoutStaff;
                    } else {
                        Layout = Fragment;
                    }
                    const allowedRoles = route.allowedRoles || [];

                    const element = (
                        <Layout>
                            <Page />
                        </Layout>
                    );

                    return route.protected ? (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <ProtectedRoute allowedRoles={allowedRoles}>
                                    {element}
                                </ProtectedRoute>
                            }
                        />
                    ) : (
                        // Route công khai không cần bảo vệ
                        <Route key={index} path={route.path} element={element} />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
