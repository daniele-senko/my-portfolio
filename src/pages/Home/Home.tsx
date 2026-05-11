import About from './sections/About/About';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';

const Home = () => (
  <div className="w-full">
    <Hero />
    <About />
    <Projects />
  </div>
);

export default Home;