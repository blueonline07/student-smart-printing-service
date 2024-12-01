import routes from './routes';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import DefaultLayout from './Layout/Layout';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              {routes.map((route, index) => {
                  const Page = route.component;
                  const Layout = route.layout ? DefaultLayout : Fragment;
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
  );
}

export default App;