"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { MsgElement } from "./ui/MsgElement";
import { TextGenerateEffect } from "./ui/TextGen";

const ContactElement = () => {
  return (
    <div className="pb-10 pt-20">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <div className="flex justify-center relative my-5 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="text-center text-5xl font-bold md:text-5xl lg:text-6xl mx-auto px-5">
              <h1 className="heading">
                  Contact Me
              </h1>
            </div>
            <TextGenerateEffect
            words="Feel free to contact me if you have any questions or need further assistance!"
            className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl"
          />
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default ContactElement;
