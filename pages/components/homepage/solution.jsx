import React from "react";

const Solution = () => {
  return (
    <>
      <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center mt-10">
        Solution
      </h5>
      <div className="flex justify-center m-4">
        <div class="w-[50%] h-[300px] flex text-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sa
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Solution;
