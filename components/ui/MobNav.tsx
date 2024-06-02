import React from "react";
import { Dock, DockIcon } from "./Dock";
import {
  BookOpenText,
  BrainCircuit,
  ContactRound,
  Home,
  LogIn,
  MessagesSquare,
} from "lucide-react";
// import Link from "next/link";

const MobNav = () => {
  return (
    <div className="fixed z-[5000] bottom-0 mb-4 w-full block md:hidden">
      <Dock className="flex justify-around py-2">
        {/* <Link href="/"> */}
          <DockIcon tooltip="Home">
            <Home className="h-6 w-6" />
          </DockIcon>
        {/* </Link> */}
        {/* <Link href="/about"> */}
          <DockIcon tooltip="About">
            <ContactRound className="h-6 w-6" />
          </DockIcon>
        {/* </Link> */}
        {/* <Link href="/blogs"> */}
          <DockIcon tooltip="Blogs">
            <BookOpenText className="h-6 w-6" />
          </DockIcon>
        {/* </Link> */}
        {/* <Link href="/projects"> */}
          <DockIcon tooltip="Projects">
            <BrainCircuit className="h-6 w-6" />
          </DockIcon>
        {/* </Link> */}
        {/* <Link href="/contact"> */}
          <DockIcon tooltip="Contact">
            <MessagesSquare className="h-6 w-6" />
          </DockIcon>
        {/* </Link> */}
        {/* <Link href="/login"> */}
          <DockIcon tooltip="Login">
            <LogIn className="h-6 w-6" />
          </DockIcon>
        {/* </Link> */}
      </Dock>
    </div>
  );
};

export default MobNav;
