import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MsgElement } from "./MsgElement";
import { SocialContacts } from "./social-contacts";

const SocialTab = () => {
  return (
    <Tabs defaultValue="message" className="z-50 w-[400px]">
      <TabsList className="grid w-[65vh] grid-cols-2">
        <TabsTrigger value="message">Mailer</TabsTrigger>
        <TabsTrigger value="social">Social</TabsTrigger>
      </TabsList>
      <TabsContent value="message">
        <MsgElement />
      </TabsContent>
      <TabsContent value="social">
        <SocialContacts />
      </TabsContent>
    </Tabs>
  );
};

export default SocialTab;
