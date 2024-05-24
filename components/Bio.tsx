import React from 'react'
import { FlipWords } from './ui/FlipWords';
import { BackgroundBeams } from './ui/BgBeams';

const Bio = () => {
    
  const words = ["content", "projects", "tools", "communities", "resources", "tutorials", "guides", "courses", "apps"];
  return (
    <div className="my-20 flex justify-center items-center px-4 bg-transparent">
      <div className="text-2xl md:text-3xl lg:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      I also create 
      <FlipWords words={words} duration={8000}/>
    to inspire and help others get started with coding, and share my experiences as a developer and entrepreneur.
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Bio;
