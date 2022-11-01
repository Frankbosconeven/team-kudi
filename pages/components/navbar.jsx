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
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="">
            <a class="flex items-center">
              <BsFillCloudsFill class="mr-3 h-8" />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap 
                            dark:text-white"
              >
                Team Kudi
              </span>
            </a>
          </Link>
          <div className="flex space-x-4">
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
    </div>
  );
}

export default NavBar;
