import React from 'react'
import logo from "../../assets/Logo/logo.jpg";
import img from "../../assets/img.jpg";
import kh from "../../assets/kh.png";
import en from "../../assets/en.png";
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';

// import { useState, useRef, useEffect } from "react";

const Booking = () => {
  return (
    <>
    <section className=" bg-green-500 h-80 py-6 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="">
        {/* logo  */}
        <nav className="flex justify-center md:justify-start items-start mt-6">
          <a href="#" className="flex items-center text-md font-medium gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span>ddhome</span>
          </a>
        </nav>
      </div>
      {/* menu  */}
      <div className="flex justify-center gap-6 mt-10">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Register</a>
      </div>
      {/*user Language Selection */}
      <div className="hidden space-x-6 md:flex justify-center items-start mt-6 cursor-pointer">
        <div className="flex flex-col items-center">
          <img src={img} alt="khong" className="h-10 w-10 rounded-full" />
          <p className="text-sm text-black">khong</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={kh} alt="ខ្មែរ" className="h-10 w-10 rounded-full" />
          <p className="text-sm text-black">ខ្មែរ</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={en} alt="English" className="h-10 w-10 rounded-full" />
          <p className="text-sm text-black">English</p>
        </div>
      </div>
    </section>
      <div className="bg-white p-7">
        {/* From  */}
        <form action="" className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl">
          <div className="p-4 rounded-lg  transition-shadow">
            <label htmlFor="name1" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              id="name1"
              type="text"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your name"
            />
          </div>
          <div className="p-4 rounded-lg  transition-shadow">
            <label htmlFor="name1" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="name1"
              type="text"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="p-4 rounded-lg  transition-shadow">
            <label htmlFor="name1" className="block text-sm font-semibold mb-2">
              Detail repair address
            </label>
            <input
              id="name1"
              type="text"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your address"
            />
          </div>
          <div className="p-4 rounded-lg  transition-shadow">
            <label htmlFor="name1" className="block text-sm font-semibold mb-2">
              Repair Schedule
            </label>
            <input
              id="date"
              type="datetime-local"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your address"
            />
          </div>
        </form>
        <div className="font-semibold py-6 ml-4 mr-4 gap-2 grid">
          <h2>Drop your repair location</h2>
          <Map />
        </div>
        <div className="py-4 ml-4 mr-4 grid gap-5">
          <hr className="border border-gray-300"/>
          <button className="bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700 transition">Comfirm Booking</button>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Booking
