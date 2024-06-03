import ContactElement from "@/components/Contact";
import { MsgElement } from "@/components/ui/MsgElement";
import { SocialContacts } from "@/components/ui/social-contacts";
import SocialTab from "@/components/ui/social-tab";
import React from "react";

const Contact = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <ContactElement/>
        <div className="hidden md:flex justify-center items-center mb-10">
        <SocialTab/>
        </div>
        <div className="flex md:hidden  justify-center items-center mb-10">
        <MsgElement/>
        </div>
        <div className="flex md:hidden  justify-center items-center mb-10">
        <SocialContacts/>
        </div>
      </div>
    </main>
  );
};

export default Contact;
