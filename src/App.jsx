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

import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Test from "./components/test/Test";
import HappyClients from "./components/HappyClients/HappyClients";

const App = () => {
  
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Navbar />
          <Banner />
        </ScrollPage>


        <ScrollPage>
          <About />
        </ScrollPage>

          <Service />
          <HappyClients/>

      </ScrollContainer>
        {/* <Test/> */}
    </div>
  );
};

export default App;
