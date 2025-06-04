import React from 'react'
import electrical from "../../assets/electrical.jpg";
import plumbing from "../../assets/plumbing.jpg";
import electronic from "../../assets/electronic.jpg";
import masonry from "../../assets/masonry.png";
import roofing from "../../assets/roofing.jpg";
import decor from "../../assets/decor.jpg";
import video from "../../assets/videos.mp4";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import image9 from "../../assets/image9.png"
import image10 from "../../assets/image10.png"
import image11 from "../../assets/image11.png"
import { GrCompliance } from "react-icons/gr";
import premium from "../../assets/premium.jpg"
import order from "../../assets/order.jpg"

const Hero = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold sm:text-left mb-4">Our Main Services</h1>
        <hr className="w-full border-t-1 border-gray-800 mb-8 mx-auto sm:mx-0" />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electrical Services</h2>
            </div>
            <img
              src={electrical}
              alt="Electrical Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electrical Services...</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Plumbing Services</h2>
            </div>
            <img
              src={plumbing}
              alt="Plumbing Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Plumbing Services...</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Electronic Services</h2>
            </div>
            <img
              src={electronic}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Electronic Services...</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Masonry Services</h2>
            </div>
            <img
              src={masonry}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Masonry Services...</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Roofing Services</h2>
            </div>
            <img
              src={roofing}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Roofing Services...</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-300 hover:shadow-xl cursor-pointer">
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">Decor Services</h2>
            </div>
            <img
              src={decor}
              alt="Electronic Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">See More Decor Services...</p>
            </div>
          </div>
        </div>

        {/* videos */}
        <div className="py-4">
          <h2 className="text-2xl font-semibold mb-2">Video</h2>
          <hr className="w-full border-t border-gray-800 mb-8 mx-auto sm:mx-0" />

          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4">
            {/* Video Section */}
            <div className="rounded overflow-hidden shadow border">
              <video
                autoPlay
                muted
                loop
                controls
                className="w-full h-full object-cover"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Description Section with animation */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded overflow-hidden animate-pulse flex items-center justify-center bg-white 
                 p-4 sm:p-6 md:p-8 w-full"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
              >
                Description
              </motion.h3>
            </motion.div>
          </div>
        </div>
        {/* videos */}
        {/* Processes Repair Service */}
        <div className="py-4">
          <h2 className="text-2xl font-bold mb-4">Our Service Processes</h2>
          <hr className="w-full mb-10 mx-auto" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
            {/* item1  */}
            <div className="border border-gray-300 rounded-md flex items-center gap-4">
              <img src={order} alt="" className="w-30 h-30 border-r-1 border-gray-300 rounded-s-md" />
              <div className="">
                <h1 className="font-semibold text-lg">1. Order</h1>
                <p>Customer makes order.</p>
              </div>
            </div>

            {/* item2  */}
            <div className="border border-gray-300 rounded-md flex items-center gap-4">
              <img src={order} alt="" className="w-30 h-30 border-r-1 border-gray-300 rounded-s-md" />
              <div className="">
                <h1 className="font-semibold text-lg">2. Accept the order</h1>
                <p>service provider accepts the customer order.</p>
              </div>
            </div>
            {/* item3  */}
            <div className="border border-gray-300 rounded-md flex items-center gap-4">
              <img src={order} alt="" className="w-30 h-30 border-r-1 border-gray-300 rounded-s-md" />
              <div className="">
                <h1 className="font-semibold text-lg">3. Make appointment</h1>
                <p>Service provider makes appointment with customer online.</p>
              </div>
            </div>
            {/* item4  */}
            <div className="border border-gray-300 rounded-md flex items-center gap-4">
              <img src={order} alt="" className="w-30 h-30 border-r-1 border-gray-300 rounded-s-md" />
              <div className="">
                <h1 className="font-semibold text-lg">4. Start service</h1>
                <p>The service provider starts delivering service to customer.</p>
              </div>
            </div>
            {/* item5  */}
            <div className="border border-gray-300 rounded-md flex items-center gap-4">
              <img src={order} alt="" className="w-30 h-30 border-r-1 border-gray-300 rounded-s-md" />
              <div className="">
                <h1 className="font-semibold text-lg">5. Confirm Completion</h1>
                <p>Customer confirms service is complete.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Processes Repair Service */}

        {/* Card item start */}
        <div className="py-4">
          <h2 className="text-2xl font-semibold mb-2">Our Export Technicians</h2>
          <hr className="w-full border-t border-gray-800 mb-8 mx-auto sm:mx-0" />

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

        {/* Card item start  */}
        <div className="py-4">
          <h2 className="text-2xl font-semibold mb-2">Projects Completed</h2>
          <hr className="w-full border-t border-gray-800 mb-8 mx-auto sm:mx-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-300 rounded-2xl">
              <img src={premium} alt="" className="rounded-t-2xl" />
              <div className="py-4 mt-5 text-center items-center justify-center">
                <GrCompliance className="w-full text-5xl" />
                <h1 className="mt-5 font-semibold text-3xl">4+</h1>
                <p className="">Premium Projects Completed</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-gray-300 rounded-2xl">
              <img src={premium} alt="" className="rounded-t-2xl" />
              <div className="py-4 mt-5 text-center items-center justify-center">
                <GrCompliance className="w-full text-5xl" />
                <h1 className="mt-5 font-semibold text-3xl">4+</h1>
                <p className="">Professional Projects Completed</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-gray-300 rounded-2xl">
              <img src={premium} alt="" className="rounded-t-2xl" />
              <div className="py-4 mt-5 text-center items-center justify-center">
                <GrCompliance className="w-full text-5xl" />
                <h1 className="mt-5 font-semibold text-3xl">4+</h1>
                <p className="">Standard Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card item end  */}
      </div>
    </section>
  )
}

export default Hero
