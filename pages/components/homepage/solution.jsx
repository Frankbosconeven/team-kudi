import React from "react";

const Solution = () => {
  return (
    <>
      <h5 class="mb-1 text-4xl tracking-tight font-sans font-bold text-green-700 dark:text-white flex justify-center mt-24">
        About Us
      </h5>
      <div className="flex justify-center items-center text-center m-4 mb-[400px]">
        <div class="md:w-[40%] h-[300px] flex text-center justify-center items-center bg-white rounded-lg   dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-[20px] md:p-[30%]  justify-center items-center text-center flex flex-col mt-96">
            <a href="#">
              <h5 class="mb-2 text-center text-2xl font-sans  tracking-tight text-gray-900 dark:text-white">
              We work hand-in-hand with farmers, investors and financial institutions to bring food to your table 
              </h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 font-sans dark:text-gray-400">
              Access to credit score of farmer
            </p>
            <p class="mb-3 font-normal text-gray-700 font-sans dark:text-gray-400">
              Verify contact details of farmer
            </p>
            <p class="mb-3 font-normal text-gray-700 font-sans dark:text-gray-400">
              Access to products of farmer
            </p> */}
            
            {/* <p class="mb-3 font-normal text-gray-700 italic font-serif dark:text-gray-400">
              
            </p> */}
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div class="md:w-[40%] h-[150px] flex text-center items-center bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">
          {/* <h1 className="items-center text-center">Problem3</h1> */}
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-[5px] md:mt-[55%] h-[50vh] justify-center items-center text-center flex flex-col">
          <img
              class="rounded-t-lg h-[100%] w-[100%]"
              src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?cs=srgb&dl=pexels-mikael-blomkvist-6476589.jpg&fm=jpg&_gl=1*i4o751*_ga*MjUwNDcyOTg2LjE2NjczODcxOTY.*_ga_8JE65Q40S6*MTY2NzM5MDg4My4yLjAuMTY2NzM5MDg4My4wLjAuMA.."
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
