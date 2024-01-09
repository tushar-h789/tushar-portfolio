// import banner from '../../assets/banner1.jpg'

import "./banner.css";

const Banner = () => {
  return (
    <div>
      <div className=" bg-cover h-screen w-screen banner ">
        <div className=" mr-2"> </div>
        <div className=" mx-auto pt-20 max-w-screen-xl pr-20 text-white">
          <div className="w-[650px] ">
          <p className="bg-white text-black inline-block p-2 rounded mb-1">Hi There !</p>
          <h2 className=" text-3xl">
            I am Tushar Hossen <br />A Front End React JS Developer. <br /> A Backend
            Developer. <br /> I Love Design and Development.
          </h2>
          <p className="my-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

          <div className="flex items-center gap-2">
            <button className=" bg-blue-600 text-white rounded hover:bg-white hover:text-slate-900 px-6 py-2 text-lg uppercase transition duration-700 ease-in-out">Hire me </button>
            <button className=" hover:bg-blue-600 hover:text-white rounded bg-white text-slate-900 px-6 py-2 text-lg uppercase transition duration-700 ease-in-out">View Portfolio </button>
          </div>

          <div className="flex items-center gap-8 my-6">
            <p className="uppercase ">+Facebook</p>
            <p className="uppercase">+Twitter</p>
            <p className="uppercase">+Linkedin</p>
          </div>
          </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Banner;
