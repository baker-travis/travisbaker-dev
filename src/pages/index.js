import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Jobs from '../components/sections/Jobs';
import Projects from '../components/sections/Projects';

export default () => (
  <Layout>
    <Header />
    <main>
      <About />
      <Jobs />
      <Projects />
    </main>
  </Layout>
);
