import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 h-full lg:h-[90%]">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 text-white w-[95%]">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-80 md:w-100 lg:w-120 my-15 animate__animated animate__fadeInUp animate__fadeInUpBig">
            Latest Fashion <span className="text-yellow-300">Trends</span>
          </h1>
          <p className="w-85 md:w-100 lg:w-115 animate__animated animate__fadeInLeft animate__fadeInLeft animat__delay-2s">
            Discover the newest styles and trends in clothing. From casual wear
            to formal attire, find everything you need to express your unique
            style.
          </p>
          <div className="flex flex-col gap-5 mt-10 lg:flex-row w-full">
            <a
              href="#sale"
              className="btn  bg-white text-blue-500 border-none hover:bg-gray-100"
            >
              Shop Now
            </a>

            <a
              href="#collection"
              className="btn bg-white text-blue-500 border-none hover:bg-gray-100"
            >
              View Collection
            </a>
          </div>
        </div>
        <div className="my-10 ml-10 lg:mt-20">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
            alt="Fashion Collection"
            className="rounded-lg shadow-2xl w-full h-96 object-cover lg:mt-10 lg:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
