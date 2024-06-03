import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ActernityInput"
import ShinyButton from "./ShinyButton"
import { BorderBeam } from "./BorderBeam"

export function MsgElement() {
  return (
    <Card className="relative w-[350px]">
      <CardHeader>
        <CardTitle className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Mailer</CardTitle>
        <CardDescription className="text-center">DM me directly through this mail box.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="z-10">
          <div className="grid w-full items-center gap-4">
            <div className="flex z-10 flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Who is this?" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Annonymous</SelectItem>
                  <SelectItem value="sveltekit">Saidev Dhal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="z-10 flex flex-col space-y-1.5">
              <Input id="name" placeholder="Type your message." type="text" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="z-20">
        <ShinyButton text="send"/>
        </div>
      </CardFooter>
        <p className="text-balance font-normal p-2 text-center text-sm leading-loose text-muted-foreground md:text-center">
          You will get your reply directly in your mail.
        </p>
      <BorderBeam className="z-0"/>
    </Card>
  )
}
