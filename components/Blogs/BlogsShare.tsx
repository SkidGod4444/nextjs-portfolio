import React from "react";
import { Button } from "../ui/button";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCopy,
  IconShare,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/ActernityInput";
import { Label } from "../ui/ActernityLabel";
import Link from "next/link";

const BlogsShare = () => {
  return (
    <div className="flex mb-20 pb-10 md:mb-10 lg:mb-10 flex-col justify-center items-center">
      <span className="text-center font-normal md:text-xl text-white text-base mb-2 p-3">Share this blog</span>
      <div className="flex flex-row gap-x-5">
        <Link href="https://x.com/intent/tweet?text=Hii&url=lol.com">
        <Button variant="outline" size="icon">
          <IconBrandTwitter stroke={2} />
        </Button>
        </Link>

        <Link href="https://www.facebook.com/sharer/sharer.php?u=httpsok.me">
        <Button variant="outline" size="icon">
          <IconBrandFacebook stroke={2} />
        </Button>
        </Link>

        <Link href="https://www.linkedin.com/shareArticle?mini=true&text=Okkokobro&url=http://developer.linkedin.com&title=Lol&source=saidevdhal.xyz">
        <Button variant="outline" size="icon">
          <IconBrandLinkedin stroke={2} />
        </Button>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <IconShare stroke={2} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share blog</DialogTitle>
              <DialogDescription>
                Anyone with this link will be able to view this blog.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <IconCopy className="h-4 w-4" />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BlogsShare;
