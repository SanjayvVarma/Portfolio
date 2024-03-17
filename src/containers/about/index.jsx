import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'

import './style.scss'

const personalDetails = [
  {
    label: "Name",
    value: "Sanjay Varma",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "Sarangpur, Rajgarh, mp",
  },
  {
    label: "Email",
    value: "spverma.sanjay56056@gmail.com",
  },
  {
    label: "Contact No.",
    value: "9009782926",
  },
]

const jobSummary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit magnam officia ipsum ea, ipsa voluptate at id consectetur recusandae, voluptates repellat aliquid quia nam, molestias voluptatem? Alias minus accusamus itaque praesentium quos veritatis voluptatum similique quae rem ipsum! Eligendi atque vero tenetur harum, impedit eveniet, fuga quam sit perferendis, odio nulla deleniti! Porro nihil animi ad, ipsam ut voluptas"
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

          <div className='about__content__servicesWrapper__innerContent'>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>

          </div>

          </ Animate>

        </div>

      </div>

    </section>
  )
}

export default About
