import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';

// import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';
import Navigation from 'components/Navigation';

function App() {
  return (
    <Container>
      {/* <Toaster position="top-center" /> */}
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomeView />} />

        <Route exact path="/contacts" element={<ContactsView />} />
      </Routes>
    </Container>
  );
}

export default App;
