import { AuthForm } from "@/components/ui/AuthElement";
import DotPattern from "@/components/ui/DotPattern";
import { cn } from "@/lib/utils";
import React from "react";

function Auth() {
  return (
    <div className="relative bg-black-100 flex h-full w-full justify-center items-center overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <div className="pb-10 pt-20">
          <AuthForm />
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}

export default Auth;
