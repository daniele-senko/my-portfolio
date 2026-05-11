import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';

const Home = () => (
  <div className="w-full">
    <Hero />
    <About />
    <Experience />
    <Projects />
  </div>
);

export default Home;