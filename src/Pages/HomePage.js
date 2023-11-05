import React from "react";
import heroImg from "../img/hero.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-5xl xl:leading-tight">
              Never Miss an Opportunity again !!
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Feeling gutted for missing the golden chance!? Not anymore...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              // width="616"
              // height="617"
              className="object-cover h-[33rem]"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-5xl xl:leading-tight">
          Explore
        </h1>
        <div></div>
      </div> */}
      <div className="flex items-center justify-center text-gray-500 my-6">
            Created By Love💝
      </div>
    </>
  );
};

export default HomePage;
