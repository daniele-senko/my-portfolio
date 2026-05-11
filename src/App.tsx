import { Footer } from './components/layout/Footer';
import { NavBar } from './components/layout/Navbar';
import Home from './pages/Home/Home'

function App() {
  return (
    // Um container principal garantindo ocupação total da tela
    <main className="w-full min-h-screen">
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;