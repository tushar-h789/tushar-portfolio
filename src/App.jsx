
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Service from "./components/Service/Service"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
    </div>
  )
}

export default App