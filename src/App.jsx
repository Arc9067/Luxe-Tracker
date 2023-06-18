import React, { useState } from "react";
import Hero from "./assets/hero.jpg";
import Work from "./assets/work.jpg";
import features from "./assets/features.jpg";
import map from "./assets/map.jpg";
import release from "./assets/release.jpg";
import Telegram from "./assets/telegram.webp";
import Twitter from "./assets/twitter.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <section className="min-h-screen text-white bg-black font-serif pt-[20px] ">
      <div className="container flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center gap-6 relative">
          <a href="">
            <img src={Hero} alt="" loading="lazy" />
          </a>
          <div className="flex justify-center items-center gap-6 absolute top-0 md:top-2 right-0">
            <a href="" className="w-[2rem] hover:scale-125 transition">
              <img src={Telegram} alt="" />
            </a>
            <a
              href="https://twitter.com/LuxeTrackerERC" target="_blank"
              className="w-[2rem] hover:scale-125 transition"
            >
              <img src={Twitter} alt="" />
            </a>
          </div>

          <button
            className="px-4  border-x  border-x-[#F4BD15] font-serif text-xl text-[#F4BD15]"
            onClick={onOpenModal}
          >
            initiate bot
          </button>
        </div>

        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <h2 className="text-center">coming soon!</h2>
        </Modal>
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

        <footer className="py-[20px] w-full">
          <div className="container flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-6">
              <a href="" className="w-[2rem] hover:scale-125 transition">
                <img src={Telegram} alt="" />
              </a>
              <a
                href="https://twitter.com/LuxeTrackerERC" target="_blank"
                className="w-[2rem] hover:scale-125 transition"
              >
                <img src={Twitter} alt="" />
              </a>
            </div>
            <p className="text-xl">
              Copyright &copy; {new Date().getFullYear()} LuxeTracker
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default App;
