import React from 'react'
import { ThemeToggle } from '../component/ThemeToggle'
import { StarBackground } from '../component/StarBackground'
import { Navbar } from '../component/Navbar'
import { HeroSection } from '../component/HeroSection'
import { AboutSection } from '../component/AboutSection'
import { SkillsSection } from '../component/SkillsSection'
import { ProjectsSection } from '../component/ProjectsSection'
import { ContactSection } from '../component/ContactSection'
import { Footer } from '../component/ui/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/*Theme Toggle  */}
      <ThemeToggle/>
      <StarBackground/>
      <Navbar/>

      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>

      <Footer/>
    </div>
  )
}

export default Home



