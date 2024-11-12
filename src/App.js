import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import AboutUs from './components/About Us/About';
import ContactUs from './components/Contact/Contact';
import CategoryList from './components/Category/CategoryList';
import Login from './components/Login/Login';

function App() {


  return (
    <Provider store={store}>
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" exact element={<ProductList/>} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/Categories" element={<CategoryList/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/About" element={<AboutUs/> } />
                <Route path="/Contact" element={<ContactUs />} />
                <Route path="/Login" element={<Login/>}/>
            </Routes>
            <Footer />
        </div>
    </Router>
</Provider>
  );
}

export default App;
