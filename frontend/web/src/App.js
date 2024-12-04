import routes from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Fragment, useState } from 'react';
import DefaultLayout from './Layout/Layout';
import LayoutStaff from './Layout/LayoutStaff';

function App() {
    const googleClientId = '633093987329-t164jk8751pv6rt6j1jqgcdi7b6026mb.apps.googleusercontent.com';
    return (
        <GoogleOAuthProvider clientId={googleClientId}>
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

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;
