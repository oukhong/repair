import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import MainServices from './page/MainServices/MainServices';
import ProductDetail from './page/ProductDetail/ProductDetail';
import Booking from './page/Booking/Booking';
import ServicesProviders from './page/ServicesProvider/ServicesProviders';
import Customer from './page/Customer/Customer';
import Pagination from './page/Pagination/Pagination';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainservices" element={<MainServices />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/servicesproviders" element={<ServicesProviders />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
