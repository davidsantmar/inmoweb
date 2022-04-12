import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Inmuebles from './components/Inmuebles';
import Contacto from './components/Contacto';
import Hipotecas from './components/Hipotecas';
import AboutUs from './components/AboutUs';
import store from './redux/stores';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" exact element={<Inmuebles />} />
              <Route path="/hipotecas" exact element={<Hipotecas />} />
              <Route path="/contacto" exact element={<Contacto />} />
              <Route path="/about" exact element={<AboutUs />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
