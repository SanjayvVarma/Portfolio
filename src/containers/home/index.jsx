import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import TypingAnimator from "react-typing-animator";
import './style.scss'
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState('');

  const handleNavigateToContactMePage = () => {
    navigate('./contact')
  }

  const textArray = [
    "A Full Stack Developer    ",
    "Active Learner   ",
    "Computer Science Engineer    ",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setFontSize('2.7rem');
      } else if (window.innerWidth >= 551 && window.innerWidth <= 768) {
        setFontSize('4rem');
      }
      else {
        setFontSize('6rem');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section id="home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello 👋, I'm <span className='my__name'>Sanjay</span>
          <br />
          <div >
            <TypingAnimator
              textArray={textArray}
              cursorColor="transparent"
              textColor="var(--yellow-theme-main-color)"
              // fontSize="4rem"
              fontSize={fontSize}
              loop
              typingSpeed={60}
              delaySpeed={1000}
              backspace

            />
          </div>
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
      >
        <div className='home__contact-me'>
          <button onClick={handleNavigateToContactMePage}>Hire Me! </button>

        </div>

        <div className='home__social__icons'>
          <ul className='home__social__icons__list'>
            <li><a href="https://www.instagram.com/sanjayazad_/"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/sanjaykvarma/"><FaLinkedin /></a></li>
            <li><a href="https://github.com/SanjayvVarma"><FaGithub /></a></li>
            <li><a href="https://twitter.com/SanjayAzad_"><FaTwitter /></a></li>
            <li><a href="gmail.comto:spverma.sanjay56056@gmail.com"><IoMail /></a></li>
          </ul>
        </div>
      </Animate>
    </section>
  )
}

export default Home



// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Animate } from 'react-simple-animate'
// import './style.scss'

// const Home = () => {
//   const navigate = useNavigate();

//   const handleNavigateToContactMePage = () => {
//     navigate('./contact')
//   }
//   return (
//     <section id="home" className='home'>
//       <div className='home__text-wrapper'>
//         <h1>
//           Hello, I'm Sanjay
//           <br />
//           Full Stack Web Developer
//         </h1>
//       </div>
//       <Animate
//         play
//         duration={1.5}
//         delay={1}
//         start={{
//           transform: 'translateY(550px)'
//         }}
//         end={{
//           transform: 'translateX(0px)'
//         }}
//       >
//         <div className='home__contact-me'>
//           <button onClick={handleNavigateToContactMePage}>Hire Me! </button>

//         </div>
//       </Animate>
//     </section>
//   )
// }

// export default Home