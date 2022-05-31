import React from 'react';
import Section from './Section';

export default function About() {
  return (
    <Section>
      <h2 style={{ display: 'flex', alignItems: 'center' }} id="about-me">
        About Me{' '}
        <a
          href="https://twitter.com/TBakerDev"
          target="__blank"
          style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}
        >
          <img style={{ height: '1em' }} src="/twitter.svg" alt="Twitter" />
        </a>
      </h2>
      <p>
        I'm Travis Baker: software engineer by day and lover of all things tech
        by night. I grew up town-hopping between Oklahoma and Texas every few
        years, with a 3 year stint in Dubai, UAE. After about a year of college,
        I served a 2 year mission for{' '}
        <a href="https://www.churchofjesuschrist.org/">
          The Church of Jesus Christ of Latter-day Saints
        </a>
        . I spent my college years at a combination of{' '}
        <a href="https://www.baylor.edu/">Baylor University</a>,{' '}
        <a href="https://www.byu.edu/">BYU</a>, and{' '}
        <a href="https://byui.edu/">BYU—Idaho</a>. I graduated from BYU—Idaho
        with a Bachelor's degree in Software Engineering.
      </p>
      <p>
        After living in the Dallas, Texas area for 4 years, I moved to rural
        Idaho where I now live with my wife and 3 kids. I love to watch and play
        sports. My favorite teams are the Houston Astros, Dallas Cowboys, and
        Dallas Mavericks. I also love watching all college football and
        basketball.
      </p>
    </Section>
  );
}
