import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import aboutImg from "../../assets/about.jpg";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import SectionTitle from "../../Helpers/SectionTitle/SectionTitle";

const About = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <SectionTitle
        heading="About Me"
        subHeading="This is my about section"
      ></SectionTitle>
      <div className="md:flex justify-between gap-8 mt-20 md:max-w-screen-xl mx-auto ">
        <div className="md:w-1/2 mx-4 md:mx-0">
          <div>
            <img src={aboutImg} alt="about img" />
          </div>
        </div>
        <div className="md:w-1/2 mx-4 md:mx-0">
          <Tabs>
            <TabList>
              <Tab>ABOUT ME</Tab>
              <Tab>SKILLS</Tab>
              <Tab>EXPERIENCE</Tab>
            </TabList>

            <TabPanel>
              <div className="h-96 overflow-scroll overflow-x-hidden mx-4 md:mx-0">
                <h2 className="text-3xl font-bold my-8">My Story</h2>
                <p className="text-slate-600">
                  Hello, I am Tushar Hossen, a passionate and skilled Front-End
                  and Back-End Developer hailing from the vibrant country of
                  Bangladesh. With a deep love for coding and a keen eye for
                  design, I thrive on turning ideas into interactive and
                  functional digital experiences.{" "}
                </p>
                <p className="text-xl font-bold my-8">
                  I Do Web Design & Development since I was 2 Years
                </p>
                <p className="text-slate-600">
                  I am always open to exciting new projects and collaborations.
                  Whether you have a specific idea in mind or need guidance on
                  enhancing your digital presence, let connect and bring your
                  vision to life. Your success is my priority, and I look
                  forward to the opportunity to contribute to it through my
                  skills and expertise
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="h-96 overflow-scroll overflow-x-auto">
              <div>
                <h2 className="text-3xl font-bold my-8">Skills & Expertise</h2>
                <p className="text-slate-600">
                  My journey in the world of web development has equipped me
                  with a versatile skill set. From crafting seamless user
                  interfaces using HTML, CSS, and JavaScript on the front end to
                  architecting robust and efficient server-side solutions with
                  languages like Node.js and Python on the back end, I take
                  pride in my ability to bridge the gap between design and
                  functionality.{" "}
                </p>
              </div>
              <div className="flex items-center md:gap-10 ">
                <div className="flex flex-col my-10 ">
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    90%
                  </div>
                  <h4 className=" inline-block my-2 text-center">HTML</h4>
                </div>
                <div className="flex flex-col my-10">
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    90%
                  </div>
                  <h4 className=" inline-block my-2 text-center">CSS</h4>
                </div>
                <div className="flex flex-col my-10">
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    70%
                  </div>
                  <h4 className=" inline-block my-2 text-center">JS</h4>
                </div>
                <div className="flex flex-col my-10">
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    80%
                  </div>
                  <h4 className=" inline-block my-2 text-center">React</h4>
                </div>
                <div className="flex flex-col my-10">
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    50%
                  </div>
                  <h4 className=" inline-block my-2 text-center">Node JS</h4>
                </div>
                <div className="flex flex-col my-10">
                  <div
                    className="radial-progress text-primary"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    65%
                  </div>
                  <h4 className=" inline-block my-2 text-center">Express JS</h4>
                </div>
              </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="h-96 overflow-scroll overflow-x-hidden">
                <div>
                  <h2 className="text-xl font-semibold">
                    Fatema Agro - E-commerce || Full Stack{" "}
                  </h2>
                  <p>(20 Dec 2023 - 10 Jan 2024)</p>
                  <ul>
                    <li className="my-2">
                      <strong>Technology Stack:</strong> React, React Hooks,
                      Custom Hooks, Context API, TanStackQuery, Tailwind CSS,
                      Daisy UI, Node.js, Express.js, MongoDB, React Formik,
                      Firebase Authentication, JWT Token for Security, swiper.
                    </li>
                    <li>
                      <strong>Features:</strong> E-commerce functionalities,
                      User and Admin Dashboards,{" "}
                    </li>
                  </ul>
                </div>

                <div className="my-10">
                  <h2 className="text-xl font-semibold">
                    TrustBook - Social Media Application || Design and Social
                    media application feature{" "}
                  </h2>
                  <p>(01 March 2023 - 01 April 2023)</p>
                  <ul>
                    <li className="my-2">
                      <strong>Technology Stack:</strong> : React, React Hooks,
                      Custom Hooks, Tailwind CSS, React Redux Toolkit, Flowbite,
                      Firebase Authentication, Firebase Realtime Database.
                    </li>
                    <li>
                      <strong>Features:</strong>: Social media functionalities{" "}
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    TSR Restaurant - Restaurant || Restaurant functionalities
                    application feature{" "}
                  </h2>
                  <p>(01 Jun 2023 - 01 July 2023)</p>
                  <ul>
                    <li className="my-2">
                      <strong>Technology Stack:</strong> React, Custom Hooks,
                      React Hooks, Context API, React Query, Tailwind CSS, Daisy
                      UI, Node.js, Express.js, MongoDB, React Tab, React Formik,
                      Firebase Authentication, JWT Token for Security
                    </li>
                    <li>
                      <strong>Features:</strong>: User and Admin Dashboards,
                      Restaurant functionalities
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default About;
