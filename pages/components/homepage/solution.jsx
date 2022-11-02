import React from "react";

const Solution = () => {
  return (
    <>
      <h5 class="mb-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center mt-10">
        Solution
      </h5>
      <div className="flex justify-center items-center text-center m-4">
        <div class="md:w-[40%] h-[300px] flex text-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-[20px] md:p-[30%]  justify-center items-center text-center flex flex-col">
            <a href="#">
              <h5 class="mb-2 text-center text-2xl font-serif   font-bold tracking-tight text-gray-900 dark:text-white">
                Data Driven Decision Making Model
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 italic font-serif dark:text-gray-400">
              Data-Driven DecisionMaking
            </p>
            <p class="mb-3 font-normal text-gray-700 italic font-serif dark:text-gray-400">
              Credit Scoring Algorithm
            </p>
            <p class="mb-3 font-normal text-gray-700 italic font-serif dark:text-gray-400">
              Increase Farmers access to Finance
            </p>
            <p class="mb-3 font-normal text-gray-700 italic font-serif dark:text-gray-400">
              Increase Supply to Market
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
