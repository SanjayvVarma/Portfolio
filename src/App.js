import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './component/navbar';
import ParticlesComponent from './Utils/particles.js';
import './App.scss';

function App() {
  const location = useLocation();
  const renderParticlesInHomePage = location.pathname === "/"

  return (
    <div className="App">
      { renderParticlesInHomePage && <ParticlesComponent />}
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
        <ToastContainer position="top-center" />
      </div>

    </div>
  );
};

export default App;