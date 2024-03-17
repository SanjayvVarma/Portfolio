import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './style.scss'

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('./contact')
  }
  return (
    <section id="home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Sanjay
          <br />
          Full Stack Web Developer
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
      </Animate>
    </section>
  )
}

export default Home