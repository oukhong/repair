import React from 'react'
import logo from "../../assets/Logo/logo.jpg";
import img from "../../assets/img.jpg";
import kh from "../../assets/kh.png";
import en from "../../assets/en.png";
import plumbing from "../../assets/plumbing.jpg"
import { FaStar } from "react-icons/fa";
import image9 from "../../assets/image9.png"
import image10 from "../../assets/image10.png"
import image11 from "../../assets/image11.png"
import Footer from '../../components/Footer/Footer';


const ProductDetail = () => {
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
            {/* card img  */}
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-10">
                {/* Left Section */}
                <div className="grid justify-center items-start space-y-6 p-5">
                    <h1 className="font-semibold text-2xl text-center">Service Details</h1>

                    <img
                        src={plumbing}
                        alt="plumbing"
                        className="w-full max-w-md h-auto rounded-lg transition duration-300 hover:scale-105 mx-auto border border-gray-300 shadow-sm"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                        {[1, 2, 3, 4].map((_, idx) => (
                            <img
                                key={idx}
                                src={plumbing}
                                alt={`thumbnail-${idx}`}
                                className="w-20 h-20 rounded-lg object-cover transition duration-300 hover:scale-110 border border-gray-300 shadow-sm"
                            />
                        ))}
                    </div>

                </div>

                {/* Right Section */}
                <div className="bg-white rounded-lg border border-gray-300 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800 ">Description</h2>
                        <hr className="border border-gray-300" />
                        <h3 className="text-lg font-medium text-gray-700 h-100">Descriptin</h3>
                        <hr className="border border-gray-300" />
                        <p>Please choose our service package below.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold sm:text-left mb-4">Price Rank</h1>
                <hr className="w-full border-t-1 border-gray-800 mb-8 mx-auto sm:mx-0" />
                {/* Card item start */}
                <div className="py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl cursor-pointer">
                            <img src={image9} alt="" className="w-full h-48 object-cover" />
                            <h1 className="text-center text-2xl font-semibold mt-4">Premium Services</h1>
                            <div className="p-3">
                                <div className="flex pt-7 text-yellow-500 text-xl gap-2">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <div className="flex flex-col items-end -mt-12 justify-center text-lg font-semibold">
                                    <p className="text-lg mr-4">15</p>
                                    <p>Reviews</p>
                                </div>
                                <hr className="my-3" />
                                <textarea
                                    className="p-2 w-full bg-white shadow rounded-sm border border-gray-300 text-gray-700"
                                    defaultValue="Description"
                                />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl cursor-pointer">
                            <img src={image10} alt="" className="w-full h-48 object-cover" />
                            <h1 className="text-center text-2xl font-semibold mt-4">Professional Services</h1>
                            <div className="p-3">
                                <div className="flex pt-7 text-yellow-500 text-xl gap-2">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <div className="flex flex-col items-end -mt-12 justify-center text-lg font-semibold">
                                    <p className="text-lg mr-4">15</p>
                                    <p>Reviews</p>
                                </div>
                                <hr className="my-3" />
                                <textarea
                                    className="p-2 w-full bg-white shadow rounded-sm border border-gray-300 text-gray-700"
                                    defaultValue="Description"
                                />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl cursor-pointer">
                            <img src={image11} alt="" className="w-full h-48 object-cover" />
                            <h1 className="text-center text-2xl font-semibold mt-4">Standard Services</h1>
                            <div className="p-3">
                                <div className="flex pt-7 text-yellow-500 text-xl gap-2">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <div className="flex flex-col items-end -mt-12 justify-center text-lg font-semibold">
                                    <p className="text-lg mr-4">15</p>
                                    <p>Reviews</p>
                                </div>
                                <hr className="my-3" />
                                <textarea
                                    className="p-2 w-full bg-white shadow rounded-sm border border-gray-300 text-gray-700"
                                    defaultValue="Description"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card item end */}
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail
