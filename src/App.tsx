import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from "./components/Home"
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactPage from './components/ContactMe'
import Blob from './components/Blob';
import Squiggly from './components/Squiggly'
import ColorWheel from './components/ColorWheel'
import GithubLogo from './components/TechStack'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const location = useLocation();
  const [isAboutMe, setIsAboutMe] = useState(false);

  useEffect(() => {
    setIsAboutMe(location.pathname === "/about-me");
  }, [location]);

  const meContainerStyle = {
    overflow: isAboutMe ? 'initial' : 'hidden',
    maxHeight: isAboutMe ? 'initial' : '800px' // Set your desired max height value here
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/portfolio-site" element={
          <>
            <div className='container'>
              <Home />
              <Blob />
            </div>
          </>
        }
        />
        <Route path="/about-me" element={
          <>
            <div className="container" style={meContainerStyle}>
              <ColorWheel />
              <AboutMe />
            </div>
          </>
        } />
        <Route path="/projects" element={
        <>
          <div className="container">
            <MyProjects />
            <GithubLogo />
          </div>
        </>
        } />
        <Route path="/contact-me" element={
          <>
            <div className="container">
              <Squiggly />
              <ContactPage />
            </div>
          </>
        } />
      </Routes>
    </>
  )
}

export default App
