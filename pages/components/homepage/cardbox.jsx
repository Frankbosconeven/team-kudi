import React from "react";

export default function CardBox() {
  return (
    <>
      <h5 class="mb-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center mt-10">
        Problem
      </h5>
      <div className="flex justify-evenly m-4 gap-8 flex-col lg:flex-row">
        <div class="md:w-[30%] flex justify-center text-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
                Lack of access to data and information
              </h5>
            </a>
            <p class="mb-3 font-normal italic font-serif text-gray-700 dark:text-gray-400">
              Farmers lack access to information on good agricultural practices
            </p>
          </div>
        </div>

        <div class="md:w-[30%] h-[300px] flex text-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
                Lack access to Finance
              </h5>
            </a>
            <p class="mb-3 font-normal italic font-serif text-gray-700 dark:text-gray-400">
              Out of the total formaing population ,70% are small holder farmers but these farmers lack access to finance to increase their production
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
