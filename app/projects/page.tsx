import ProjectsHero from '@/components/Projects/Hero'
import ProjectsLayout from '@/components/Projects/ProjectsLayout'
import React from 'react'

const Projects = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <ProjectsHero/>
        <ProjectsLayout/>
      </div>
    </main>
  )
}

export default Projects
