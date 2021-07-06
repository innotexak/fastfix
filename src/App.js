import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drive from './pages/Drive';
import Eat from './pages/Eat';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/drive">
            <Drive />
          </Route>
          <Route exact path="/eat">
            <Eat />
          </Route>
        </Switch>
        <Layout></Layout>
      </Router>
    </>
  );
}

export default App;
