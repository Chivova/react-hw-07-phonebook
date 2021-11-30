import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

// import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';

function App() {
  return (
    <Container>
      {/* <Toaster position="top-center" /> */}

      <Routes>
        {/* <Route path="/">
          <HomeView />
        </Route> */}
        <Route exact path="/login" element={<LoginView />} />
      </Routes>
    </Container>
  );
}

export default App;
