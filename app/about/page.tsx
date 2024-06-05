import AboutBio from '@/components/About/Bio'
import AboutCareer from '@/components/About/Career'
import AboutConnect from '@/components/About/Contact'
import AboutHero from '@/components/About/Hero'
import AboutReviews from '@/components/About/Reviews'
import AboutWorkExp from '@/components/About/Work'
import React from 'react'

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <AboutHero/>
        <AboutBio/>
        <AboutCareer/>
        <AboutReviews/>
        {/* <AboutWorkExp/> */}
        <AboutConnect/>
      </div>
    </main>
  )
}

export default About
