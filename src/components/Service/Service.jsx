import { Link } from "react-router-dom";
import SectionTitle from "../../Helpers/SectionTitle/SectionTitle";
import frontEnd from "../../assets/icone/front-end-design.png";
import backend from "../../assets/icone/backend.png";
import reactNative from "../../assets/icone/app.png";
import ux from "../../assets/icone/ux.png";
import webDesign from "../../assets/icone/design.png";
import tecnologies from "../../assets/icone/technologies .png";


const Service = () => {
  return (
    
    <div className="max-w-screen-xl mx-auto my-20">
      <SectionTitle
        heading="service"
        subHeading="This is My Expertise, The Services I'll Provide My Clients"
      />

      {/* cart part start */}
      <div className="md:flex flex-wrap gap-10 justify-center">

      
      <div className="md:w-[30%] mx-10 md:mx-0 h-[480px] bg-slate-100 p-8 rounded-2xl cursor-pointer hover:bg-primary hover:bg-opacity-65 hover:text-white hover:scale-100 transition ease-in-out delay-100 hover:-translate-y-3 duration-300 hover:rounded-xl relative">
        <img src={frontEnd} alt="" width={100}/>
        <div>
          <h2 className="text-xl font-semibold my-4 ">Front-end Development</h2>
          <p>I specialize in converting static designs into dynamic and responsive web applications. Utilizing HTML, CSS, and JavaScript, I focus on creating visually appealing and user-friendly interfaces. </p>
        </div>
        <div className="w-full bg-primary text-white p-2 rounded-xl my-4 inset-x-0 bottom-0 absolute">
          <button className=" text-center w-full py-1 ">Details</button>
        </div>

      </div>

      <div className="md:w-[30%] mx-10 md:mx-0 h-[480px] bg-slate-100 p-8 rounded-2xl cursor-pointer hover:bg-primary hover:bg-opacity-65 hover:text-white hover:scale-100 transition ease-in-out delay-100 hover:-translate-y-3 duration-300 hover:rounded-xl relative">
        <img src={backend} alt="" width={100}/>
        <div>
          <h2 className="text-xl font-semibold my-4 ">Backend Development (Node.js, Express.js, MongoDB)</h2>
          <p>With expertise in Node.js, Express.js, and MongoDB, I craft powerful backend systems. From API development to database management, I ensure your applications are robust, scalable, and capable of handling the demands of modern web and mobile platforms. </p>
        </div>
        <div className="w-full bg-primary text-white p-2 rounded-xl my-4 inset-x-0 bottom-0 absolute">
          <button className=" text-center w-full py-1 ">Details</button>
        </div>
      </div>

      
      <div className="md:w-[30%] mx-10 md:mx-0 h-[480px] bg-slate-100 p-8 rounded-2xl cursor-pointer hover:bg-primary hover:bg-opacity-65 hover:text-white hover:scale-100 transition ease-in-out delay-100 hover:-translate-y-3 duration-300 hover:rounded-xl relative">
        <img src={reactNative} alt="" width={100}/>
        <div>
          <h2 className="text-xl font-semibold my-4 ">React Native App Design and Development</h2>
          <p>Deliver a consistent user experience across iOS and Android platforms. I specialize in React Native app development, blending efficiency and performance to create versatile and visually striking mobile applications. </p>
        </div>
        <div className="w-full bg-primary text-white p-2 rounded-xl my-4 inset-x-0 bottom-0 absolute">
          <button className=" text-center w-full py-1 ">Details</button>
        </div>
      </div>

      
      <div className="md:w-[30%] mx-10 md:mx-0 h-[480px] bg-slate-100 p-8 rounded-2xl cursor-pointer hover:bg-primary hover:bg-opacity-65 hover:text-white hover:scale-100 transition ease-in-out delay-100 hover:-translate-y-3 duration-300 hover:rounded-xl relative">
        <img src={ux} alt="" width={100}/>
        <div>
          <h2 className="text-xl font-semibold my-4 "> UI/UX Design (Figma)</h2>
          <p>Good design is the cornerstone of effective digital experiences. Using Figma, I design interfaces that not only look great but also provide a seamless and enjoyable journey for your users. From wireframes to prototypes, let's shape the future of your digital presence.</p>
        </div>
        <div className="w-full bg-primary text-white p-2 rounded-xl my-4 inset-x-0 bottom-0 absolute">
          <button className=" text-center w-full py-1 ">Details</button>
        </div>
      </div>

      
      <div className="md:w-[30%] mx-10 md:mx-0 h-[480px] bg-slate-100 p-8 rounded-2xl cursor-pointer hover:bg-primary hover:bg-opacity-65 hover:text-white hover:scale-100 transition ease-in-out delay-100 hover:-translate-y-3 duration-300 hover:rounded-xl relative">
        <img src={webDesign} alt="" width={100}/>
        <div>
          <h2 className="text-xl font-semibold my-4 ">Web Design</h2>
          <p>Your website is often the first interaction users have with your brand. I design modern and visually appealing websites that align with your brand identity. Combining creativity with functionality, I create web designs that leave a lasting impression. </p>
        </div>
        <div className="w-full bg-primary text-white p-2 rounded-xl my-4 inset-x-0 bottom-0 absolute">
          <button className=" text-center w-full py-1 ">Details</button>
        </div>
      </div>

      
      <div className="md:w-[30%] mx-10 md:mx-0 h-[480px] bg-slate-100 p-8 rounded-2xl cursor-pointer hover:bg-primary hover:bg-opacity-65 hover:text-white hover:scale-100 transition ease-in-out delay-100 hover:-translate-y-3 duration-300 hover:rounded-xl relative">
        <img src={tecnologies} alt="" width={100}/>
        <div>
          <h2 className="text-xl font-semibold my-4 ">Technologies I Work With</h2>
          <ol>
            <li>Front-end: HTML, CSS, JavaScript, React.js</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Mobile: React Native</li>
            <li>UI/UX Design: Figma</li>
            <li>Web Design: Adobe XD, Sketch</li>
          </ol>
        </div>
        <div className="w-full bg-primary text-white p-2 rounded-xl my-4 inset-x-0 bottom-0 absolute">
          <button className=" text-center w-full py-1 ">Details</button>
        </div>
      </div>

      </div>
      {/* cart part end */}

<div className="bg-slate-100 py-10 mt-10 mx-10 md:mx-0">
      <div className="md:w-3/4 mx-auto text-center my-20">
        <h4 className="text-2xl bold">Have any works you want to done by me? <strong className="text-primary"><Link to='/contact'>Contact Me</Link></strong></h4>
        <p className="my-8">Whether you're a startup, business, or individual, I am here to collaborate on projects that require expertise in front-end and back-end development, mobile app development, UI/UX design, and web design. Let's discuss your vision and create innovative solutions together. <strong className="text-primary"><Link to='/contact'>Contact me</Link></strong> to start the conversation. I look forward to working with you!</p>
      </div>
      </div>
    </div>
  );
};

export default Service;
