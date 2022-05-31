import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion';
import Section from './Section';

const jobs = [
  {
    name: 'Bestow',
    title: 'Senior Software Engineer II',
    startDate: '2021-07-06',
    icon: '/bestow.svg',
    description: (
      <p>
        As a senior engineer on the Bestow team, I've played an integral role in
        starting up the design system, improving the usability of our enrollment
        SDK, and delivering a SaaS platform to enable our enrollment platform
        for partner life insurance agencies.
      </p>
    ),
    projects: [],
    bullets: [],
  },
  {
    name: 'Pumpjack Dataworks',
    title: 'Lead Software Engineer',
    startDate: '2020-01-26',
    endDate: '2021-07-02',
    icon: '/pumpjack-logo.svg',
    description: (
      <p>
        As lead engineer at Pumpjack Dataworks I've had the pleasure to build
        and mentor a team of engineers. Since being a part of the team, I've
        implemented the Agile Scrum framework to improve how the team functions,
        refactored our application and infrastructure to prepare for scale,
        built out the design system, and created a web SDK for mobile analytics.
      </p>
    ),
    projects: [],
    bullets: [],
  },
  {
    name: 'Intuit',
    title: 'Software Engineer',
    icon: '/Intuit.png',
    startDate: '2019-03-04',
    endDate: '2020-01-22',
    description: (
      <p>
        As a software engineer at Intuit, I contributed and expanded our shared
        component library. This contributed to speeding up development time
        immensely and reducing boilerplate. I also had the opportunity to teach
        and mentor others as well as speak at a conference and a meet-up.
      </p>
    ),
  },
  {
    name: 'USAA',
    title: 'Software Engineer',
    icon: '/USAA.png',
    startDate: '2016-01-25',
    endDate: '2019-02-28',
    description: (
      <p>
        I started my career and USAA and had the opportunity to learn from some
        very smart people. While at USAA, I developed our React-based enterprise
        framework, which included build tooling, developer tooling, and a
        component library. I also had the opportunity to work on USAA's emerging
        technologies team, where we got to do projects with cutting-edge
        technologies.
      </p>
    ),
  },
];

const Logo = styled(motion.img)`
  height: 32px;
`;

const JobWrapper = styled(motion.div)`
  border-radius: 10px;
  padding: 15px;
  background-color: white;
  color: ${({ theme: { background } }) => background};
  cursor: pointer;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  overflow-y: hidden;
  ${props =>
    props.isOpen &&
    css`
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      z-index: 1;
      cursor: initial;
      @media screen and (max-width: 480px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        border-radius: 0;
      }
    `}
  margin: 15px;
  overflow: hidden;
`;

const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
});

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    height: 24px;
  }
`;

const Job = ({
  name,
  description,
  title,
  startDate,
  endDate,
  onClick,
  isExpanded,
  icon,
  isOpen,
  layoutId,
}) => {
  return (
    <JobWrapper
      onClick={isOpen ? null : onClick}
      isOpen={isOpen}
      layoutId={layoutId}
    >
      <motion.div
        layoutId={`${layoutId}-initial-wrapper`}
        style={{
          zIndex: 1,
          backgroundColor: 'white',
          margin: '-15px -15px 0 -15px',
          padding: '15px',
        }}
      >
        <HeaderWrapper>
          <motion.h2 layoutId={`${layoutId}-name`}>{name}</motion.h2>
          {isOpen && (
            <CloseButton onClick={onClick}>
              <img src="/close.svg" alt="close" />
            </CloseButton>
          )}
        </HeaderWrapper>
        <Logo src={icon} alt={name} />
        <motion.p layoutId={`${layoutId}-title`}>{title}</motion.p>
        <motion.p layoutId={`${layoutId}-range`}>
          {monthFormat.format(new Date(startDate))} –{' '}
          {endDate ? monthFormat.format(new Date(endDate)) : 'present'}
        </motion.p>
      </motion.div>
      {isExpanded && (
        <motion.div
          animate
          style={{
            flexGrow: 1,
            margin: '0 -15px -15px',
            padding: '15px',
            borderTop: '1px solid black',
            overflowY: 'auto',
          }}
        >
          {description}
        </motion.div>
      )}
    </JobWrapper>
  );
};

const JobsLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const sortByDate = (item1, item2) => {
  if (item1.startDate > item2.startDate) return -1;
  if (item1.startDate < item2.startDate) return 1;
  return 0;
};

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <Section>
      <h2>Jobs</h2>
      <AnimateSharedLayout type="crossfade">
        <JobsLayout>
          {jobs.sort(sortByDate).map((item, i) => (
            <Job
              {...item}
              key={i}
              onClick={() => setSelectedJob(i)}
              layoutId={`jobs-${i}`}
            />
          ))}
        </JobsLayout>
        <AnimatePresence>
          {selectedJob !== null && (
            <Job
              {...jobs[selectedJob]}
              isExpanded
              isOpen
              key={selectedJob}
              initial={{ position: 'absolute', top: '50%' }}
              layoutId={`jobs-${selectedJob}`}
              onClick={() => setSelectedJob(null)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      <p>Click on a job to see more details.</p>
    </Section>
  );
}
