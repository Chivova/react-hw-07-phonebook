import Container from './components/Container';
import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';

function App() {
  return (
    <Container>
      <Toaster position="top-center" />
    </Container>
  );
}

export default App;
