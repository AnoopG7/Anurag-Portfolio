import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Portfolio />
                <Projects />
                <About />
                <Services />
                <Experience />
                <Education />
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
