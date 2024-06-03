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
        <DockIcon tooltip="Home" slug="/">
          <Home className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip="About" slug="/about">
          <ContactRound className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip="Blogs" slug="/blogs">
          <BookOpenText className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip="Projects" slug="/projects">
          <BrainCircuit className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip="Contact" slug="/contact">
          <MessagesSquare className="h-6 w-6" />
        </DockIcon>
        <DockIcon tooltip="Login" slug="/auth">
          <LogIn className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default MobNav;
