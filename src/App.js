import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Container from './components/Container';
import Header from 'components/Header';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import 'modern-normalize/modern-normalize.css';
import { authOperations, authSelectors } from 'redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "homepage" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshCurrentUser = useSelector(authSelectors.isRefreshCurrentUser);

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <Container>
      <Toaster position="top-center" />
      {!isRefreshCurrentUser && (
        <>
          <Header />
          <Suspense fallback={<h2>Loading.....</h2>}>
            <Routes>
              <Route exact path="/" element={<HomeView />} />
              <Route
                exact
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                exact
                path="/registration"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <RegisterView />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}

export default App;
