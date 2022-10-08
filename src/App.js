import { Routes, Route, Link } from "react-router-dom";
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
