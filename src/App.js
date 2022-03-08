import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Inmuebles from './components/Inmuebles';
import Empresa from './components/Empresa';
import Hipotecas from './components/Hipotecas';
import Ayuda from './components/Ayuda';
import Intranet from './components/Intranet';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={Inmuebles} />
          <Route path="/empresa" exact component={Empresa} />
          <Route path="/ayuda" exact component={Ayuda} />
          <Route path="/hipotecas" exact component={Hipotecas} />
          <Route path="/intranet" exact component={Intranet} />
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
