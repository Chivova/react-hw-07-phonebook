import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Toaster } from 'react-hot-toast';
import Container from './components/Container';
import Header from 'components/Header';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

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
        <Route exact path="/contacts" element={<ContactsView />} />
        <Route exact path="/login" element={<LoginView />} />
        <Route exact path="/registration" element={<RegisterView />} />
      </Routes>
    </Container>
  );
}

export default App;
