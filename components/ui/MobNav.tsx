import React from 'react'
import { Dock, DockIcon } from './Dock'
import { BookOpenText, BrainCircuit, ContactRound, Home, LogIn, MessagesSquare } from 'lucide-react'

const MobNav = () => {
  return (
    <div className="fixed z-[5000] bottom-0 mb-2 w-full block md:hidden">
      <Dock className="flex justify-around py-2">
        <DockIcon tooltip='Home'>
          <Home className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip='About'>
          <ContactRound className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip='Blogs'>
          <BookOpenText className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip='Projects'>
          <BrainCircuit className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip='Contact'>
          <MessagesSquare className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip='Login'>
          <LogIn className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  )
}

export default MobNav
