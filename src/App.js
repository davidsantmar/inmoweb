import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Inmuebles from './components/Inmuebles';
import Empresa from './components/Empresa';
import Hipotecas from './components/Hipotecas';
import Ayuda from './components/Ayuda';
import Intranet from './components/Intranet';
import store from './redux/stores';
import Header from './components/Header';



function App() {
  return (
    <Header />
    
  )
   /** <Provider store={store}>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" exact component={Inmuebles} />
          <Route path="/empresa" exact component={Empresa} />
          <Route path="/ayuda" exact component={Ayuda} />
          <Route path="/hipotecas" exact component={Hipotecas} />
          <Route path="/intranet" exact component={Intranet} />
        </Routes>
      </main>
    </BrowserRouter>
  </Provider>*/
  
}

export default App;
