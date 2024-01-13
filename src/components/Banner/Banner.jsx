// import banner from '../../assets/banner1.jpg'
import {
  Animator,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

import "./banner.css";

const Banner = () => {
  return (
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <div className=" bg-cover md:h-screen md:w-screen banner ">
        <div className=" md:mr-2"> </div>
        <div className=" mx-auto md:pt-20 md:max-w-screen-xl md:pr-20 text-white">
          <div className="md:w-[650px] ">
          <p className="bg-white text-black inline-block p-2 rounded mb-1">Hi There !</p>
          <h2 className=" text-xl md:text-3xl">
            I am Tushar Hossen <br />A Front End React JS Developer. <br /> A Backend
            Developer. <br /> I Love Design and Development.
          </h2>
          <p className="my-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

          <div className="md:flex items-center gap-2">
            <button className=" bg-blue-600 text-white rounded hover:bg-white hover:text-slate-900 px-6 py-2 text-lg uppercase transition duration-700 ease-in-out">Hire me </button>
            <button className=" hover:bg-blue-600 hover:text-white rounded bg-white text-slate-900 px-6 py-2 text-lg uppercase transition duration-700 ease-in-out my-4 md:my-0">View Portfolio </button>
          </div>

          <div className="md:flex items-center gap-8 my-6">
            <p className="uppercase ">+Facebook</p>
            <p className="uppercase">+Twitter</p>
            <p className="uppercase">+Linkedin</p>
          </div>
          </div>
        </div>
        </div>
    </Animator>
  );
};

export default Banner;
