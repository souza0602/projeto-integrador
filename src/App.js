import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import Cardapio from './components/Cardapio';
import Contato from './components/Contato';
import Bvegan from './components/Bvegan';

function App() {
  return (
    <Router>
      <Topo/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path ='/cardapio'>
          <Cardapio/>
        </Route>
        <Route exact path ='/bvegan'>
          <Bvegan/>
        </Route>
        <Route exact path ='/contato'>
          <Contato/>
        </Route>
      </Switch>
      <Rodape/>
    </Router>
  );
}

export default App;
