import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Toaster } from 'react-hot-toast';
import Container from './components/Container';
import Header from 'components/Header';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PrivateRout from 'components/Routes/PrivateRout';
import 'modern-normalize/modern-normalize.css';
import { authOperations } from 'redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <Container>
      {/* <Toaster position="top-center" /> */}
      <Header />

      <Routes>
        <Route exact path="/" element={<HomeView />} />
        {/* <Route
          exact
          path="/contacts"
          element={isLoggedIn ? <ContactsView /> : <Navigate to="/login" />}
        /> */}
        <Route exact path="/contacts" element={<PrivateRout />} />
        <Route exact path="/login" element={<LoginView />} />
        <Route exact path="/registration" element={<RegisterView />} />
      </Routes>
    </Container>
  );
}

export default App;
