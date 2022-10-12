import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Auth from './components/auth/Auth';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Auth/>
    </div>
  );
}

export default App;
