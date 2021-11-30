import Container from './components/Container';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
// import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';

function App() {
  return (
    <Container>
      {/* <Toaster position="top-center" /> */}
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
