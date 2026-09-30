import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience, { experiences } from './components/WorkExperience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Default item shown in the detail panel on first load
const DEFAULT_ITEM = { ...experiences[0], title: experiences[0].role };

function Home() {
  const [selectedItem, setSelectedItem] = useState(DEFAULT_ITEM);

  const handleSelect = (item) => {
    // Clicking the same active card collapses back to default
    if (selectedItem && selectedItem.id === item.id && selectedItem.source === item.source) {
      setSelectedItem(DEFAULT_ITEM);
    } else {
      setSelectedItem(item);
    }
  };

  const handleClose = () => setSelectedItem(DEFAULT_ITEM);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f4f0' }}>
      <Navbar />
      <main>
        <Hero />
        <WorkExperience onSelect={handleSelect} selectedItem={selectedItem} />
        <Projects onSelect={handleSelect} selectedItem={selectedItem} />
        <ProjectDetail item={selectedItem} onClose={handleClose} isDefault={selectedItem?.id === DEFAULT_ITEM.id && selectedItem?.source === DEFAULT_ITEM.source} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
