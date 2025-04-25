import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import  SpaceBackground from './components/SpaceBackground/SpaceBackground';
import Header from './components/Header/Header';
//import TimelineExperience from './components/TimelineExperience/TimelineExperience';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import  Projects  from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

function App() {

  // Determinar si estamos en producción
  const isProduction = process.env.NODE_ENV === 'production';
  
  // En produccion usamos HashRouter, en desarrollo Router
  const RouterComponent = isProduction ? HashRouter : Router;
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterComponent>
        <div className='app' id='top'>
          <SpaceBackground />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Skills />
                  <AboutMe />
                  <Projects />
                  <Education />
                  <Contact />
                </>
              } />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
          <Navigation />
        </div>
      </RouterComponent>
    </ThemeProvider>
  );
}

export default App;
