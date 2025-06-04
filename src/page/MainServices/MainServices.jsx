import React from 'react'
import logo from "../../assets/Logo/logo.jpg";
import img from "../../assets/img.jpg";
import kh from "../../assets/kh.png";
import en from "../../assets/en.png";
import image7 from "../../assets/image7.png";
import Footer from '../../components/Footer/Footer';
const MainServices = () => {
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
      {/* card1 */}
      <div className="flex bg-white p-7 gap-4 items-center">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={image7}
            alt="Product"
            className="rounded-md h-48 w-48 object-cover transform transition duration-300 hover:scale-110 border border-gray-300 shadow-sm "
          />
        </div>
        <div className="grow gap-4 grid">
          <h1 className="font-semibold">Name</h1>
          <p>Description</p>
          <p>Price: Normal, Decount, %Decount</p>
        </div>
        <div className="gap-4 flex flex-col items-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Book Now
          </button>
          <button className=" text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Chat Now
          </button>
        </div>
      </div>
      {/* card2 */}
      <div className="flex bg-white p-7 gap-4 items-center">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={image7}
            alt="Product"
            className="rounded-md h-48 w-48 object-cover transform transition duration-300 hover:scale-110 border border-gray-300 shadow-sm"
          />
        </div>
        <div className="grow gap-4 grid">
          <h1 className="font-semibold">Name</h1>
          <p>Description</p>
          <p>Price: Normal, Decount, %Decount</p>
        </div>
        <div className="gap-4 flex flex-col items-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Book Now
          </button>
          <button className=" text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Chat Now
          </button>
        </div>
      </div>
      {/* card3 */}
      <div className="flex bg-white p-7 gap-4 items-center">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={image7}
            alt="Product"
            className="rounded-md object-cover h-48 w-48 transform transition duration-300 hover:scale-110 border border-gray-300 shadow-sm"
          />
        </div>
        <div className="grow gap-4 grid">
          <h1 className="font-semibold">Name</h1>
          <p>Description</p>
          <p>Price: Normal, Decount, %Decount</p>
        </div>
        <div className="gap-4 flex flex-col items-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Book Now
          </button>
          <button className=" text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Chat Now
          </button>
        </div>
      </div>
      {/* card4 */}
      <div className="flex bg-white p-7 gap-4 items-center">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={image7}
            alt="Product"
            className="rounded-md h-48 w-48 object-cover transform transition duration-300 hover:scale-110 border border-gray-300 shadow-sm"
          />
        </div>
        <div className="grow gap-4 grid">
          <h1 className="font-semibold">Name</h1>
          <p>Description</p>
          <p>Price: Normal, Decount, %Decount</p>
        </div>
        <div className="gap-4 flex flex-col items-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Book Now
          </button>
          <button className=" text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Chat Now
          </button>
        </div>
      </div>
      {/* card5 */}
      <div className="flex bg-white p-7 gap-4 items-center">
        {/* Image Section */}
        <div className="flex-none">
          <img
            src={image7}
            alt="Product"
            className="rounded-md h-48 w-48 object-cover transform transition duration-300 hover:scale-110 border border-gray-300 shadow-sm"
          />
        </div>
        <div className="grow gap-4 grid">
          <h1 className="font-semibold">Name</h1>
          <p>Description</p>
          <p>Price: Normal, Decount, %Decount</p>
        </div>
        <div className="gap-4 flex flex-col items-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Book Now
          </button>
          <button className=" text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Chat Now
          </button>
        </div>
      </div>
      <hr />
      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div class="flex flex-1 justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">97</span>
        results
      </p>
    </div>
    <div>
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Previous</span>
          <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
        </a>
        {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Next</span>
          <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};
export default MainServices;
