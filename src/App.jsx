import React from "react";
import Hero from "./assets/hero.jpg";
import Work from "./assets/work.jpg";
import features from "./assets/features.jpg";
import map from "./assets/map.jpg";
import release from "./assets/release.jpg";
import Telegram from "./assets/telegram.webp";
import Twitter from "./assets/twitter.png";

const App = () => {
  return (
    <section className="min-h-screen text-white bg-black font-serif pt-[20px] pb-[50px]">
      <div className="container flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <a href="">
            <img src={Hero} alt="" loading="lazy" />
          </a>
          <div className="flex justify-center items-center gap-6">
            <a href="" className="w-[2rem] hover:scale-125 transition">
              <img src={Telegram} alt="" />
            </a>
            <a href="" className="w-[2rem] hover:scale-125 transition">
              <img src={Twitter} alt="" />
            </a>
          </div>

          <a
            href=""
            className="px-4  border-x  border-x-[#F4BD15] font-serif text-xl"
          >
            initiate bot
          </a>
        </div>
        <a href="" className="mt-6">
          <img src={Work} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={features} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={release} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={map} alt="" loading="lazy" />
        </a>
      </div>
    </section>
  );
};

export default App;
