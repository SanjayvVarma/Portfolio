import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../component/pageHeaderContent'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

    </section>
  )
}

export default Resume
