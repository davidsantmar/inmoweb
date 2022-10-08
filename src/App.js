import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Mortgages from './components/Mortgages';
import AboutUs from './components/AboutUs';
import store from './redux/stores';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateProperty from './components/CreateProperty';
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
              <Route path="/" exact element={<Properties />} />
              <Route path="/mortgages" exact element={<Mortgages />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/about" exact element={<AboutUs />} />
              <Route path="/createProperty" exact element={<CreateProperty />} />
              <Route path="/usersList" exact element={<UsersList />} />
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
