import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeaderContent from '../../component/pageHeaderContent';
import data from './utils.js';
import './style.scss';

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent headerText="My Resume" icon={<BsInfoCircleFill size={40} />} />
      <div className='timeline'>
        <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Education</h3>
          <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>
            {
              data.education.map((item, idx) => (
                <VerticalTimelineElement
                  key={idx} className='timeline__exprience__vertical-timeline-element'
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    color: 'var(--yellow-theme-main-color)',
                    background: '#181818',
                  }}
                >
                  <div className='vertical-timeline-element-title-wrapper'>
                    <h3 >{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.date}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Certificate</h3>
          <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>
            {
              data.certificate.map((item, idx) => (
                <VerticalTimelineElement
                  key={idx} className='timeline__exprience__vertical-timeline-element'
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  // date='2022-2022'
                  icon={<MdWork />}
                  iconStyle={{
                    color: 'var(--yellow-theme-main-color)',
                    background: '#181818',
                  }}
                >
                  <div className='vertical-timeline-element-title-wrapper'>
                    <h3 >{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.date}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className='timeline__exprience'>
          <h3 className='timeline__exprience__header-text'>Experience</h3>
          <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>
            {
              data.experience.map((item, idx) => (
                <VerticalTimelineElement
                  key={idx} className='timeline__exprience__vertical-timeline-element'
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  // date='2022-2022'
                  icon={<MdWork />}
                  iconStyle={{
                    color: 'var(--yellow-theme-main-color)',
                    background: '#181818',
                  }}
                >
                  <div className='vertical-timeline-element-title-wrapper'>
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.date}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;