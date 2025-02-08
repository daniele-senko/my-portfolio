import Navbar from "../../components/NavBar/NavBar"
import Footer from "../Footer/Footer"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const Home = () => {

    return (
      <>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Footer />
      </>
    )
  }
  
  export default Home
  