import React from 'react';

import Image from "../assets/img/hero-bg.png";
// import {IoIosArrowDroprightCircle} from "react-icons/io";

const Hero = () => {
  return <section>
    <div className="container mx-auto">
      <div>
        <div>

          <div className="bg-black/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]">
            <div className="flex items-center justify-between text-sm lg:text-base">
              <div className="bg-black text-white rounded-full font-medium py-1 px-4">1st Move</div>
              <div>Your turn to checkmate</div>
            </div>
          </div>

          <h1 className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6">Abdallah Ismaili</h1>
          <h1 className="max-w-[800px] text-[24px] lg:text-[48px] font-bold leading-tight mb-6 text-gray-500">About web? you're on the chessboard with me then.</h1>
          <p className="max-w-[440px] leading-relaxed mb-8">I'm a full-stack web developer (building dynamic websites) exceptional Back-end experiences. Currently, I direct all my attention to developing my skills further <span>in the field.</span></p>
          <button className="btn gap-x-6 ">My Chessboard!</button>
        </div>
        <div>image</div>
      </div>
    </div>
  </section>;
};

export default Hero;
