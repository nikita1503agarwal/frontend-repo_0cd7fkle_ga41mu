import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import About from './components/About';

function App() {
  const [unlocked, setUnlocked] = useState({});

  function handleUnlock(section) {
    setUnlocked((u) => ({ ...u, [section]: true }));
  }

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <Challenges onUnlock={handleUnlock} />
      <About unlocked={unlocked} />
      <footer className="py-10 text-center text-white/50 text-sm border-t border-white/10 bg-black">
        <p>© {new Date().getFullYear()} CTFfolio • Built as an interactive CTF-style portfolio experience.</p>
      </footer>
    </div>
  );
}

export default App;
