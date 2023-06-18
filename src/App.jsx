import React from "react";
import Hero from "./assets/hero.jpg";
import Work from "./assets/work.jpg";
import features from "./assets/features.jpg";
import map from "./assets/map.jpg";
import release from "./assets/release.jpg";

const App = () => {
  return (
    <section className="min-h-screen bg-black font-serif py-[50px]">
      <div className="container flex flex-col gap-10">
        <a href="">
          <img src={Hero} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={Work} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={map} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={features} alt="" loading="lazy" />
        </a>
        <a href="">
          <img src={release} alt="" loading="lazy" />
        </a>
      </div>
    </section>
  );
};

export default App;
