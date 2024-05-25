import React from 'react'

import JadooyiButton from './ui/JadooyiButton'
import { Navigation } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 mb-10'>
      <div className="flex flex-col items-center">
        <h1 className='heading text-3xl text-center font-bold lg:text-6xl px-40'>Open for collab, <span className='text-indigo-500'>drop a message.</span> Don&apos;t forget to follow me on social media.</h1>
        <p className='text-white md:mt-10 my-5 text-center'>Let&apos;s discuss how I can help you achive your goals</p>
        <JadooyiButton
              title="Let's get in touch"
              position="right"
              icon={<Navigation className='w-6 h-6'/>}
            />
      </div>
    </footer>
  )
}

export default Footer
