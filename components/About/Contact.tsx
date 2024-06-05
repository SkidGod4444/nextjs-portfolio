import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/WobbleCard";
import Link from "next/link";
import JadooyiButton from "../ui/JadooyiButton";
import { MessageCirclePlus } from "lucide-react";

const AboutConnect = () => {
  return (
    <div className="text-start text-3xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-5">
      {/* <h1 className="heading">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-indigo-400 before:dark:bg-indigo-500 relative inline-block">
          <span className="relative head-text text-white">Let&apos;s</span>{" "}
        </span>{" "}
        Connect
      </h1> */}
      <div className="relative mt-5 flex-col grid grid-cols max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Are you interested in working together but don&apos;t know how?
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              I am open to learning about prospective prospects, discussing them
              with you, and even partnering if they are a good fit.
            </p>
          </div>
          <div className="relative md:mt-0 lg:mt-0 mt-2">
            <Link href="/contact">
              <JadooyiButton
                title="Let's get in touch"
                position="right"
                icon={<MessageCirclePlus className="w-5 h-5" />}
              />
            </Link>
          </div>
          <Image
            src="/contact.png"
            width={300}
            height={300}
            alt="Contact Image"
            className="absolute -right-5 md:-right-[5%] lg:-right-[5%] md:-bottom-10 lg:-bottom-10 -bottom-20 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default AboutConnect;
