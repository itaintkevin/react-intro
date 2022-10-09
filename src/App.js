import { Routes, Route, Link } from "react-router-dom";
import Hero from './pages/Hero';
import About from './pages/About';

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
