import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Jobs from '../components/sections/Jobs';
import Projects from '../components/sections/Projects';
import GithubCorner from 'react-github-corner';

export default () => (
  <Layout>
    <Header />
    <main>
      <About />
      <Jobs />
      <Projects />
    </main>
    <GithubCorner
      href="https://github.com/baker-travis"
      octoColor="#011627"
      bannerColor="#d6deeb"
    />
  </Layout>
);
