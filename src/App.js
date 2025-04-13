import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/home';
import Register from './componets/home/register';
import Merchants from './componets/home/merchants';
import Product from './componets/home/product';
import Contact from './componets/home/contact';
import Navbar from './componets/navbar/navbar';
import Footer from '../src/componets/footer/footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/Merchants" element={<Merchants />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Register" element={<Register />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;