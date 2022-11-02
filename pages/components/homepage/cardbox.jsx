import React from "react";

export default function CardBox() {
  return (
    <>
      <h5 class="mb-5 text-4xl tracking-tight font-sans font-bold text-green-700 dark:text-white flex justify-center mt-1">
        Our Services
      </h5>
      <div className="flex justify-evenly m-4 mt-20 gap-8 flex-col lg:flex-row">
        <div class="md:w-[30%] flex justify-center text-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5 text-justify">
            <a href="#">
              <h5 class="mb-2 text-2xl font-sans font-bold tracking-tight text-gray-900 dark:text-white">
              As a farmer 
              </h5>
            </a>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            1. Access to reliable funding
            </p>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            2. Access to technical and technological support
            </p>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            3. Profitability
            </p>
          </div>
        </div>
        <div class="md:w-[30%] flex justify-center text-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5 text-justify">
            <a href="#">
              <h5 class="mb-2 text-2xl font-sans font-bold tracking-tight text-gray-900 dark:text-white">
              As an investor
              </h5>
            </a>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            1. Get the right data
            </p>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            2. Assured farm visibility
            </p>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            3. Monitoring and Evaluation of investment
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
          <div class="p-5 text-justify">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold font-sans tracking-tight text-gray-900 dark:text-white">
              As a Financial institution
              </h5>
            </a>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            1. Access to data of farmers
            </p>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            2. Access to investment opportunities available
            </p>
            <p class="mb-3 font-normal  font-sans text-gray-700 dark:text-gray-400">
            3. Opportunity to make an impact
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
