import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'

import './style.scss'

const personalDetails = [
  {
    label: "Name :-",
    value: "Sanjay Varma",
  },
  {
    label: "DOB :-",
    value: "00",
  },
  {
    label: "Address :-",
    value: "Sarangpur, Rajgarh, mp",
  },
  {
    label: "Email :-",
    value: "spverma.sanjay56056@gmail.com",
  },
  {
    label: "Contact No. :-",
    value: "9009782926",
  },
]

const jobSummary = "Passionate, hard-working, and consistent full stack developer. Looking for full-time job opportunities as an SDE and full-stack web developer where I can apply my skills to contribute to real-world projects and help others with available technological solutions."
const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-990px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3>Full Stack Web Developer</h3>
            <p>{jobSummary}</p>
          </Animate>


          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >

            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <span className='title'>{item.label}</span>
                      <span className='value'>{item.value}</span>
                    </li>
                  )
                })
              }
            </ul>
          </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >

            <div className='about__content__servicesWrapper__innerContent__img'>
              <div className='about__content__servicesWrapper__innerContent'>
                <div>
                  <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaReact size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaJava size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaCss3Alt size={60} color="var(--yellow-theme-main-color)" />
                </div>
              </div>
            </div>

          </ Animate>

        </div>

      </div>

    </section>
  )
}

export default About
