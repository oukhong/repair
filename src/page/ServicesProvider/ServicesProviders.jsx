import React from 'react'
import logo from "../../assets/Logo/logo.jpg";
import standard from "../../assets/standard.jpg";
import kh from "../../assets/kh.png";
import en from "../../assets/en.png";
import image3 from "../../assets/image3.png"
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';

const ServicesProviders = () => {
  return (
    <>
      <section className=" bg-green-500 h-80 py-6 px-4 grid gap-6">
        <div className="">
          {/* logo  */}
          <nav className="flex justify-center md:justify-start items-start mt-6">
            <a href="#" className="flex items-center text-md font-medium gap-2">
            <img src={standard} alt="khong" className="h-20 w-20 rounded-full" />
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold">Join</span>
            <p className="text-gray-600">Premium Service Provider</p>
          </div>
            </a>
          </nav>
          <div className="gap-4 flex justify-center">
<button className="text-xl px-10 py-3 rounded-full bg-yellow-100 transition duration-300">
  You have new order
</button>
        </div>
        </div>
        {/* menu  */}
        {/* <div className="flex justify-center gap-6 mt-10">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Register</a>
        </div> */}
        {/*user Language Selection */}
        {/* <div className="hidden space-x-6 md:flex justify-center items-start mt-6 cursor-pointer">
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
        </div> */}
      </section>
      <div className="p-7">
        <h2 className="text-2xl font-bold mb-4">Service ordered</h2>
        <hr className="w-full mb-10 mx-auto border border-gray-300" />
        {/* card1 */}
        <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row bg-white p-5 gap-4 items-center border border-gray-300 rounded-md shadow-sm">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={image3}
            alt="Product"
            className="rounded-md h-40 w-40 object-cover transform transition duration-300 hover:scale-110 border border-gray-300"
          />
        </div>

        {/* Info Section */}
        <div className="flex-grow w-full text-center md:text-left space-y-2">
          <h1 className="font-semibold text-xl">Name</h1>
          <p className="text-gray-600">Description</p>
          <p className="text-sm text-gray-500">Price: Normal, Discount, %Discount</p>
        </div>

        {/* Price Section */}
        <div className="mt-4 md:mt-0">
            <p className="font-semibold text-lg text-green-600">$15.00</p>
        </div>
        </div>
        <hr className="w-full mx-auto border border-gray-300"/>
        <Map/>
        <hr className="w-full mx-auto border border-gray-300"/>
        <div className="gap-4 flex">
        <button className="bg-green-500 w-full px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Accept
        </button>
        <button className="bg-green-500 w-full px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Reject
        </button>
        </div>
        </div>
      </div>
      <Footer />
    </>
)
}

export default ServicesProviders;
