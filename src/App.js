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
import PA from './components/PA';
import UsersList from './components/UsersList';
import PropertyList from './components/PropertyList';

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
              <Route path="/pa" exact element={<PA />} />
              <Route path="/addUser" exact element={<UsersList />} />
              <Route path="/propertyList" exact element={<PropertyList />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
