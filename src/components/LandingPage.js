import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Data from './components/Data';
import Slide from './components/Slide';


function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Data/>
      <Slide/>
    </div>
  );
}

export default LandingPage;