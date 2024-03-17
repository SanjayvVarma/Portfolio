import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './component/navbar';
import ParticlesComponent from './Utils/particles.js'


function App() {
  const location = useLocation();
  console.log(location);

  const renderParticlesInHomePage = location.pathname === "/"

  return (
    <div className="App">
      {/*particles js */}
      {
        renderParticlesInHomePage && <ParticlesComponent />
      }

      {/* <ParticlesComponent /> */}

      {/*navbar */}
      <Navbar />
      <div className='App__main-page-container'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </div>

    </div>
  );
}

export default App;
