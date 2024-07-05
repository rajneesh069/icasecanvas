/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, StarIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"></div>
            <div className="absolute top-3 left-5 md:left-20 lg:top-20 lg:left-16 xl:left-36 w-28 lg:block">
              <img
                src="/iCaseCanvas.png"
                className="w-full"
                alt="iCaseCanvas Logo"
              />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your image on a{" "}
              <span className="bg-black text-white px-2">Custom</span> iPhone
              Case.
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-balance lg:text-left md:text-wrap">
              Unleash your creativity with iCaseCanvas! Turn cherished memories
              and unique designs into{" "}
              <span className="font-semibold">one-of-a-kind</span> custom iPhone
              cases that protect your phone with style.
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />{" "}
                  Unmatched Durability
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> Vibrant,
                  Lasting Designs
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> Modern
                  iPhone Models Supported
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex -space-x-4">
                <img
                  alt="user image"
                  src="/users/user-1.png"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                />
                <img
                  alt="user image"
                  src="/users/user-2.png"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                />
                <img
                  alt="user image"
                  src="/users/user-3.png"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                />
                <img
                  alt="user image"
                  src="/users/user-4.jpg"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                />
                <img
                  alt="user image"
                  src="/users/user-5.jpg"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                />
              </div>

              <div className=" flex flex-col items-center sm:items-start">
                <div className="flex gap-0.5">
                  <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                  <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                  <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                  <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                  <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                </div>
                <p>
                  <span className="font-semibold">1,250</span> happy customers
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt=""
                className="absolute w-40 md:w-32 md:-right-20 md:-top-16 lg:-right-20 lg:-top-16 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt=""
                className="absolute w-20 -left-6 -bottom-6 select-none "
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
