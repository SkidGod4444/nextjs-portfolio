"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Confetti } from "./confetti";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { BorderBeam } from "./BorderBeam";
import { links } from "@/db/fake.data";

const handleClick = (id: string) => {
  Confetti({});

  let url = "";
  switch (id) {
    case "yt":
      url = links.social.youtube;
      break;
    case "git":
      url = links.social.github;
      break;
    case "x":
      url = links.social.twitter;
      break;
    case "ig":
      url = links.social.instagram;
      break;
    case "linkIN":
      url = links.social.linkedin;
      break;
    case "dc":
      url = links.social.discord;
      break;
    default:
      url = "#";
  }

  window.location.href = url;
};

export function SocialContacts() {
  return (
    <Card className="z-50 relative w-[350px]">
      <CardHeader>
        <CardTitle className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Social Contacts
        </CardTitle>
        <CardDescription className="text-center">
          Follow me on social media for daily updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="z-50 flex flex-col gap-y-3">
        <Button
          id="yt"
          onClick={() => handleClick("yt")}
          className="z-50 gap-x-2"
        >
          <Youtube /> YouTube
        </Button>
        <Button
          id="git"
          onClick={() => handleClick("git")}
          className="z-50 gap-x-2"
        >
          <Github /> GitHub
        </Button>
        <Button
          id="x"
          onClick={() => handleClick("x")}
          className="z-50 gap-x-2"
        >
          <Twitter /> Twitter
        </Button>
        <Button
          id="ig"
          onClick={() => handleClick("ig")}
          className="z-50 gap-x-2"
        >
          <Instagram /> Instagram
        </Button>
        <Button
          id="linkIN"
          onClick={() => handleClick("linkIN")}
          className="z-50 gap-x-2"
        >
          <Linkedin /> LinkedIn
        </Button>
        <Button
          id="dc"
          onClick={() => handleClick("dc")}
          className="z-50 gap-x-2"
        >
          <DiscordLogoIcon className="h-6 w-6" /> Discord
        </Button>
      </CardContent>
      <BorderBeam className="z-0" />
    </Card>
  );
}
