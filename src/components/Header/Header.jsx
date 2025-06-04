import React from 'react'
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/Logo/logo.jpg";
import img from "../../assets/img.jpg";
import kh from "../../assets/kh.png";
import en from "../../assets/en.png";
const Header = () => {
    return (
        <section className="bg-green-500 min-h-[1rem] py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo */}
            <nav className="flex justify-center md:justify-start items-start mt-6">
                <a href="#" className="flex items-center text-md font-medium gap-2">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                    <span>ddhome</span>
                </a>
            </nav>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center gap-4 ">
                {/* Menu */}
                <div className="flex gap-6 text-sm font-semibold justify-center mt-10">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About Us</a>
                    <a href="#" className="hover:underline">Register</a>
                </div>

                {/* Heading */}
                <div className="mt-20">
                    <h1 className="text-2xl font-bold text-black">Professional Repair Services</h1>
                    <p className="text-sm text-black max-w-md">
                        Get your devices and appliances fixed by certified professionals.
                        Fast, reliable, and affordable repair services at your doorstep.
                    </p>
                </div>

                {/* Search & Select */}
                <div className="flex flex-col md:flex-row gap-4 w-full justify-center ">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-white h-10 rounded-md pl-10  text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                    </div>

                    <select
                        id="service"
                        defaultValue=""
                        className="w-full md:w-auto p-2 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option value="">All Services</option>
                        <option value="electrical">Electrical Services</option>
                        <option value="plumbing">Plumbing Services</option>
                        <option value="electronic">Electronic Services</option>
                        <option value="masonry">Masonry Services</option>
                        <option value="roofing">Roofing Services</option>
                        <option value="roofing">Decor Services</option>
                    </select>
                </div>
            </div>

            {/* Language Selection */}
            <div className="hidden md:flex justify-center items-start mt-6 cursor-pointer">
                <div className="flex space-x-6">
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
            </div>
        </section>

    );
};
export default Header;
