import React from "react";
import Link from "next/link";
import { BsFillCloudsFill } from "react-icons/bs";
function NavBar() {
  return (
    <div>
      <nav
        className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded 
            dark:bg-gray-900"
      >
        <div className="container flex flex-wrap lg:justify-between items-center mx-auto mt-10">
          <Link href="">
            <a class="flex items-center">
              {/* <BsFillCloudsFill class="mr-3 h-8" /> */}
              <span
                class="self-center text-green-700  text-2xl font-semibold whitespace-nowrap 
                            dark:text-white"
              >
                FARMACIA
              </span>
            </a>
          </Link>
          <div className="flex space-x-4  lg:mr-[40%]">
            <div>
              <Link href="">
                <a className="text-gray-500 hover:text-green-600 text-xl font-medium">
                  Products
                </a>
              </Link>
            </div>
            {/* <div>
              <Link href="">
                <a className="hover:bg-blue-700">Services</a>
              </Link>
            </div> */}
            <div>
              <Link href="/components/aboutus/aboutus">
                <a className=" text-gray-500 hover:text-green-600 text-xl font-medium">
                  About Us
                </a>
              </Link>
            </div>
          </div>
          {/* <Link href="/">
            <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign in
            </button>
          </Link> */}
        </div>
      </nav>



      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <nav
        className="bg-green-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded 
            dark:bg-gray-900"
      >
        <div className="container flex flex-wrap justify-center gap-5 items-center mx-auto mt-10">
          {/* <Link href="">
            <a class="flex items-center">
             
              <span
                class="self-center text-white  text-2xl font-semibold whitespace-nowrap 
                            dark:text-white"
              >
                FARMACIA
              </span>
            </a>
          </Link> */}
          <div className="flex space-x-4 gap-52">
            <div>
              <Link href="">
                <a className="text-white hover:text-green-600 text-xl font-medium">
                  Home
                </a>
              </Link>
            </div>
            <div>
              <Link href="">
                <a className="text-white hover:text-green-600 text-xl font-medium">
                  About Us
                </a>
              </Link>
            </div>
            <div>
              <Link href="">
                <a className="text-white hover:text-green-600 text-xl font-medium">
                  Our Services
                </a>
              </Link>
            </div>
            {/* <div>
              <Link href="">
                <a className="hover:bg-blue-700">Services</a>
              </Link>
            </div> */}
            <div>
              <Link href="/components/aboutus/aboutus">
                <a className=" text-white hover:text-green-600 text-xl font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          {/* <Link href="/">
            <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign in
            </button>
          </Link> */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
