import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Education from './pages/Education';
import LazySection from './components/LazySection';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <LazySection id="projects">
                  <Projects />
                </LazySection>
                <LazySection id="about">
                  <About />
                </LazySection>
                <LazySection id="services">
                  <Services />
                </LazySection>
                <LazySection id="experience">
                  <Experience />
                </LazySection>
                <LazySection id="education">
                  <Education />
                </LazySection>
              </>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
