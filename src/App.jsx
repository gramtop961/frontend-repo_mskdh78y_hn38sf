import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
