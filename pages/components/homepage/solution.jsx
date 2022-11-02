import React from "react";

const Solution = () => {
  return (
    <>
      <h5 class="md:mb-1  text-4xl tracking-tight font-sans font-bold text-green-700  flex justify-center mt-24">
        About Us
      </h5>
      <div className="flex justify-center items-center text-center m-4 mb-[200px] md:mb-[250px] lg:mb-[300px]">
        <div class="md:w-[40%] h-[300px] flex text-center justify-center items-center bg-white rounded-lg">
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
              <h5 class="mb-2 text-center text-2xl font-sans  tracking-tight text-gray-900 ">
              We work hand-in-hand with farmers, investors and financial institutions to bring food to your table 
              </h5>
            </a>
         
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div class="md:w-[40%] h-[150px] flex text-center items-center bg-white rounded-lg  ">
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
