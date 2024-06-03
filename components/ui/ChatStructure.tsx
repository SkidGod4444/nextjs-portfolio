"use client";

import { cn } from "@/lib/utils";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./AnimatedBeams";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedChatStructure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divMe = useRef<HTMLDivElement>(null);
  const divChat = useRef<HTMLDivElement>(null);
  const divEncrypt = useRef<HTMLDivElement>(null);

  return (
    <div
      className="z-10 relative flex flex-col w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-transparent backdrop-blur-lg p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divMe}>
            <Icons.comp className="h-6 w-6" />
          </Circle>
          <Circle ref={divEncrypt} className="h-16 w-16">
            <Icons.firebase className="h-6 w-6" />
          </Circle>
          <Circle ref={divChat}>
            <Icons.comp className="h-6 w-6" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divMe}
        toRef={divEncrypt}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divEncrypt}
        toRef={divChat}
        reverse
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divChat}
        toRef={divEncrypt}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divEncrypt}
        toRef={divMe}
        reverse
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
      />
      <p className="text-balance font-normal text-center text-sm leading-loose text-muted-foreground md:text-center">
        Messages are end-to-end encrypted.
      </p>
    </div>
  );
}

const Icons = {
  comp: (props: IconProps) => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
    >
      <path
        style={{ fill: "#A4A9AD" }}
        d="M482.135,368.307c12.02,0,21.856-9.835,21.856-21.856V69.617c0-12.02-9.835-27.683-21.856-27.683
    	H68.34c-12.02,0-21.856,9.834-21.856,21.855v282.664c0,12.02,9.834,21.856,21.856,21.856h413.795V368.307z"
      />
      <path
        style={{ fill: "#C3C6C8" }}
        d="M457.849,368.307c12.022,0,21.858-9.835,21.858-21.856V63.789c0-12.02-9.835-21.855-21.858-21.855
    	H44.055c-12.02,0-21.855,9.834-21.855,21.855v282.664c0,12.02,9.834,21.856,21.855,21.856h413.794V368.307z"
      />
      <path
        style={{ fill: "#333E48" }}
        d="M457.849,41.933H44.055c-12.02,0-21.855,9.834-21.855,21.855v264.811h457.506V63.789
    	C479.707,51.769,469.872,41.933,457.849,41.933z"
      />
      <rect
        x="51.339"
        y="71.075"
        style={{ fill: "#FFFFFF" }}
        width="399.23"
        height="228.381"
      />
      <rect
        x="82.524"
        y="106.554"
        style={{ fill: "#FF8189" }}
        width="336.848"
        height="39.869"
      />
      <rect
        x="82.524"
        y="170.442"
        style={{ fill: "#F6C65B" }}
        width="122.564"
        height="85.024"
      />
      <rect
        x="228.211"
        y="179.37"
        style={{ fill: " #009BDE" }}
        width="85.389"
        height="23.667"
      />
      <g>
        <rect
          x="333.985"
          y="179.37"
          style={{ fill: "#C3C6C8" }}
          width="85.389"
          height="23.667"
        />
        <rect
          x="228.211"
          y="222.891"
          style={{ fill: "#C3C6C8" }}
          width="85.389"
          height="23.667"
        />
        <rect
          x="333.985"
          y="222.891"
          style={{ fill: "#C3C6C8" }}
          width="85.389"
          height="23.667"
        />
      </g>
      <polygon
        style={{ fill: "#B3B8BA" }}
        points="239.294,447.103 344.202,447.103 317.976,368.307 213.067,368.307 "
      />
      <path
        style={{ fill: "#C3C6C8" }}
        d="M203.6,447.103c-3.989,0-7.224,3.234-7.224,7.225c0,3.99,3.235,7.225,7.224,7.225h104.178v-14.45
    	L203.6,447.103L203.6,447.103z"
      />
      <path
        style={{ fill: "#A4A9AD" }}
        d="M348.283,461.553c6.477,0,11.73-5.252,11.73-11.732c0-1.362-0.231-2.671-0.659-3.888l-0.002-0.002
    	l-25.835-77.625h-15.54l26.227,78.796h-36.424c-3.989,0-7.225,3.234-7.225,7.225c0,3.99,3.235,7.225,7.225,7.225h40.565H348.283z"
      />
      <circle
        style={{ fill: "#333E48" }}
        cx="250.948"
        cy="348.873"
        r="10.928"
      />
      <rect
        x="8.01"
        y="455.62"
        style={{ fill: "#D1D3D3" }}
        width="192.326"
        height="14.449"
      />
      <path
        style={{ fill: "#B3B8BA" }}
        d="M272.215,470.065c3.989,0,7.226-3.235,7.226-7.224c0-3.99-3.236-7.225-7.226-7.225h-71.878v14.449
    	L272.215,470.065L272.215,470.065z"
      />
      <g>
        <rect
          x="239.884"
          y="453.185"
          style={{ fill: "#A4A9AD" }}
          width="19.151"
          height="2.428"
        />
        <rect
          x="210.503"
          y="453.185"
          style={{ fill: "#A4A9AD" }}
          width="19.152"
          height="2.428"
        />
      </g>
      <g>
        <rect
          x="181.122"
          y="453.185"
          style={{ fill: "#B3B8BA" }}
          width="19.152"
          height="2.428"
        />
        <rect
          x="151.742"
          y="453.185"
          style={{ fill: "#B3B8BA" }}
          width="19.151"
          height="2.428"
        />
        <rect
          x="122.35"
          y="453.185"
          style={{ fill: "#B3B8BA" }}
          width="19.151"
          height="2.428"
        />
        <rect
          x="92.97"
          y="453.185"
          style={{ fill: "#B3B8BA" }}
          width="19.152"
          height="2.428"
        />
        <rect
          x="63.589"
          y="453.185"
          style={{ fill: "#B3B8BA" }}
          width="19.151"
          height="2.428"
        />
        <rect
          x="34.197"
          y="453.185"
          style={{ fill: "#B3B8BA" }}
          width="19.151"
          height="2.428"
        />
      </g>
      <path
        style={{ fill: "#D1D3D3" }}
        d="M403.282,470.065c0-9.404-7.626-17.027-17.028-17.027h-25.025c-9.403,0-17.025,7.623-17.025,17.027
    	H403.282z"
      />
      <path
        style={{ fill: "#C3C6C8" }}
        d="M421.752,470.065c0-9.404-7.624-17.027-17.027-17.027h-19.913c-9.405,0-17.027,7.623-17.027,17.027
    	H421.752z"
      />
      <path
        d="M450.565,63.064H51.341c-4.424,0-8.01,3.586-8.01,8.01v228.384c0,4.424,3.586,8.01,8.01,8.01h399.224
	c4.425,0,8.01-3.586,8.01-8.01V71.074C458.575,66.65,454.99,63.064,450.565,63.064z M442.555,291.449H59.351V79.084h383.204
	L442.555,291.449L442.555,291.449z M504.036,46.54c-5.948-8.136-13.727-12.616-21.901-12.616H44.055
	c-16.468,0-29.865,13.397-29.865,29.865v282.664c0,16.468,13.397,29.866,29.865,29.866h163.237l21.709,65.226H8.01
	c-4.424,0-8.01,3.586-8.01,8.01v20.512c0,4.424,3.586,8.01,8.01,8.01h271.43c3.067,0,5.729-1.725,7.074-4.256h50.613
	c1.347,2.531,4.007,4.256,7.074,4.256h85.202c4.425,0,8.01-3.586,8.01-8.01c0-14.732-11.986-26.718-26.718-26.718h-38.422
	l-22.31-67.031h132.169c16.468,0,29.866-13.397,29.866-29.866V69.617C512,61.987,509.022,53.36,504.036,46.54z M388.82,459.368
	h21.877c2.714,0,5.195,1.016,7.084,2.688h-36.045C383.623,460.384,386.105,459.368,388.82,459.368z M192.327,462.055H16.02v-4.492
	h176.307V462.055z M271.43,462.055h-63.084v-4.492h63.084V462.055z M243.654,434.837l-19.477-58.52H312.2l19.478,58.52H243.654z
	 M288.614,457.799h-1.163v-6.942h1.163c-0.204,1.129-0.328,2.284-0.328,3.471C288.287,455.515,288.41,456.671,288.614,457.799z
	 M339.187,457.799h-31.409c-1.914,0-3.471-1.557-3.471-3.471s1.557-3.471,3.471-3.471h35.008c0.613,0,1.216-0.075,1.801-0.21
	C342.409,452.703,340.578,455.119,339.187,457.799z M362.908,459.368h1.435c-0.382,0.874-0.725,1.769-1.014,2.688h-7.504
	C357.713,460.384,360.194,459.368,362.908,459.368z M355.72,444.338c-2.119,0.593-4.131,1.44-6.003,2.508
	c1.137-1.972,1.395-4.344,0.669-6.528l-21.302-64h3.998L355.72,444.338z M471.697,346.452c0,7.634-6.212,13.846-13.848,13.846
	H44.055c-7.634,0-13.845-6.21-13.845-13.846v-9.842h441.486V346.452z M471.697,320.59H30.211V63.789
	c0-7.634,6.21-13.845,13.845-13.845h413.794c7.635,0,13.848,6.21,13.848,13.845V320.59z M495.98,346.452
	c0,6.86-5.02,12.554-11.576,13.643c2.112-4.093,3.313-8.729,3.313-13.643V63.789c0-4.806-1.147-9.345-3.173-13.371
	c5.686,2.161,11.436,11.313,11.436,19.199V346.452z"
      />
    </svg>
  ),
  firebase: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="-47.5 0 351 351"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <path
          d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"
          id="path-1"
        ></path>
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feGaussianBlur
            stdDeviation="17.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset
            dx="0"
            dy="0"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
        <path
          d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z"
          id="path-3"
        ></path>
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feGaussianBlur
            stdDeviation="3.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset
            dx="1"
            dy="-9"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g>
        <path
          d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z"
          fill="#FFC24A"
        ></path>
        <g>
          <use fill="#FFA712" fill-rule="evenodd" xlinkHref="#path-1"></use>
          <use
            fill="#000000"
            fill-opacity="1"
            filter="url(#filter-2)"
            xlinkHref="#path-1"
          ></use>
        </g>
        <path
          d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z"
          fill="#F4BD62"
        ></path>
        <g>
          <use fill="#FFA50E" fill-rule="evenodd" xlinkHref="#path-3"></use>
          <use
            fill="#000000"
            fill-opacity="1"
            filter="url(#filter-4)"
            xlinkHref="#path-3"
          ></use>
        </g>
        <polygon
          fill="#F6820C"
          points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
        ></polygon>
        <path
          d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268"
          fill="#FDE068"
        ></path>
        <path
          d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z"
          fill="#FCCA3F"
        ></path>
        <path
          d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z"
          fill="#EEAB37"
        ></path>
      </g>
    </svg>
  ),
};
