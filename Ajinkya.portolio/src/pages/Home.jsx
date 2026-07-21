

import React from 'react'
import Hero from '../components/hero'
import About from '../components/About'
import Skills from '../components/skills'
import Project from '../components/project'
import Contact from '../components/contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default Home