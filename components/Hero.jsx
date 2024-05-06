import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiArrowDownSLine } from "react-icons/ri";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 xl:px-32 xl:py-20 h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className=" container  mx-auto">
        <div className="flex justify-between gap-x-24 ">
          {/* text */}
          <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=" text-xl font-semibold mb-4 text-primary tracking-[2px]">
              Hi! my name is Mahsa.
            </div>
            <h1 className="h1 mb-4">I am a frontend developer.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              brief description into myself, my projects, and what i engage in
              professionally.
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button size="default" className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button size="default" variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyle="flex gap-x-6 mx-auto xl:mx-0"
              iconStyle=" text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="relative ">
              <div className="hidden xl:flex xl:after:bg-[url('/hero/large-long.png')] dark:after:bg-[url('/hero/large-long2.png')] after:bg-contain after:block after:bg-no-repeat after:w-[400px] after:h-[400px] after:absolute after:top-[-50px]  xl:after:left-[-380px] before:bg-[url('/hero/small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[200px] before:h-[200px] before:absolute before:bottom-[60px] before:right-[100px]">
                <img src='/hero/developer.png' className="relative rounded-full z-10  right-40 m-auto xl:w-[300px] xl:h-[300px]" />
              </div>
            </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce  ">
          <RiArrowDownSLine className="text-3xl text-primary " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
