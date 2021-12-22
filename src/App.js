import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Toaster } from 'react-hot-toast';
import Container from './components/Container';
import Header from 'components/Header';
import HomeView from './views/HomeView';
// import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import 'modern-normalize/modern-normalize.css';
import { authOperations, authSelectors } from 'redux/auth';

function App() {
  const dispatch = useDispatch();
  const isRefreshCurrentUser = useSelector(authSelectors.isRefreshCurrentUser);

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <Container>
      {/* <Toaster position="top-center" /> */}
      {!isRefreshCurrentUser && (
        <>
          <Header />

          <Routes>
            <Route exact path="/" element={<HomeView />} />
            {/* <Route
          exact
          path="/contacts"
          element={isLoggedIn ? <ContactsView /> : <Navigate to="/login" />}
        /> */}
            <Route exact path="/contacts" element={<PrivateRoute />} />
            <Route exact path="/login" element={<PublicRoute restricted />} />
            <Route exact path="/registration" element={<RegisterView />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
