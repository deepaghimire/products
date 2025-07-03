import React from "react";
import bg from "../img/backimage.jpg";

const Hero = () => {
  return (
    <section
      className="h-[800px] bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" mx-auto flex justify-around items-center h-full absolute right-0 ">
        {/* text */}
        <div className="flex flex-col justify-center backdrop-blur-xl rounded-3xl h-fit px-4 py-5">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-2 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4 mr-20">
            Fresh Fashion Finds
            <br />
            <span className="font-light">new collection</span>
          </h1>
          <div className="self-start uppercase font-semibold border-b-2 border-primary">
            Discover More
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
