import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

function Phone({ imgSrc, dark = false, className, ...props }: PhoneProps) {
  return (
    <div
      className={cn("relative pointer-events-none z-50 overflow-hidden")}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none select-none z-50"
        alt="Phone Template Image"
      />

      <div className="absolute -z-10 inset-0">
        <img alt="overlaying phone image" src={imgSrc} className="object-cover"/>
      </div>
    </div>

  );
}

export default Phone;
