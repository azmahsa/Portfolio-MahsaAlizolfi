import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Mahsa Alizolfi",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+98 939 079 0059",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mahsa.alizolfii2@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born 24 Agu, 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Software Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "IR/Isfahan",
  },
];

const description = [
  {
    title: "About me",
    subtitle: "A description of me and my performance so far :",
    dec: "I am a programming enthusiast,And because of this interest, I entered the field of software when I chose my education path.Over time and working with different programming languages, I realized my interest in designing web pages and creating dynamic designs. I started front-end programming by learning HTML, CSS and JAVA SCRIPTS, and I am practicing and developing this skill with REACT, Next Js. I have the skills to use tools such as SASS, Tailwind. Collaboration on my projects is simplified with Git/Github.I am very interested in progress in this field and all my efforts are in this direction.I am very personally responsible and have a high team spirit.",
  },
];

const skills = [
  {
    title: "Skills",
    data: [
      {
        name: "Front-end Development :",
      },
      {
        name: "HTML, CSS, Bootstrap",
      },
      {
        name: "Tailwind, Saas",
      },

      {
        name: "Javascript, React",
      },
      {
        name: "Back-end Development :",
      },
      {
        name: "Asp.net, PHP",
      },
    ],
    image: [
      {
        imgPath: "/about/html.svg",
      },
      {
        imgPath: "/about/css.png",
      },

      {
        imgPath: "/about/bootstrap.png",
      },
      {
        imgPath: "/about/tailwind.png",
      },
      {
        imgPath: "/about/sass.png",
      },
      {
        imgPath: "/about/js.svg",
      },
      {
        imgPath: "/about/react.png",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.png",
      },
      {
        imgPath: "/about/Git.png",
      },
      {
        imgPath: "/about/photoshop.png",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className=" xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto  ">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          About me
        </h2>
        <div className="flex  xl:ml-32 xl:flex-row flex-col ">
          {/* image */}
          <div className="relative mx-auto my-16 xl:my-0  bg-[#FE6E58] dark:bg-[#32334C] flex rounded-[40px] shadow-lg  justify-center items-center w-[350px] h-[350px] ">
            <Image
              src="/about/developer.png"
              className=" absolute shadow-lg rounded-[40px] -rotate-[10deg] "
              width={360}
              height={360}
            />
          </div>
          {/* tabs */}
          <div className=" flex-1 xl:pl-32 ">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  {" "}
                  Personal Info{" "}
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="description"
                >
                  {" "}
                  Description{" "}
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  {" "}
                  Skills{" "}
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className=" text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div>
                    <h4 className="h4 mb-4 xl:w-[65%]">
                      Hello, I am Mehsa and you are going to get to know me more
                      in this section.
                    </h4>
                    <p className="subtitle max-w-xl max-auto xl:max-0 ">
                      I specialize in crafting intuitive websits whith
                      cutting-edge technology, delivering daynamic and engaging
                      user experience.
                    </p>
                    {/* icons */}
                    <div className=" grid xl:grid-cols-2 gap-4 mb-12 ">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-6 "
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* description */}
                <TabsContent value="description">
                  <div>
                    {description.map((item, index) => {
                      return (
                        <div key={index}>
                          <h4 className="h4 text-[24px]  mb-8 text-center xl:text-left">
                            {item.subtitle}
                          </h4>
                          <p className="subtitle font-normal text-[20px] text-justify max-w-xl max-auto xl:max-0 ">
                            {item.dec}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
                {/*skills*/}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    {/* skills */}
                    <div className=" mb-10">
                      <h3 className="h3 mb-8">What I Use Evryday</h3>
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div>
                        {getData(skills, "Skills").data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-2/4 text-center mx-auto xl:mx-0 xl:text-left"
                              key={index}
                            >
                              <div
                                className={`${
                                  name === "Front-end Development :" ||
                                  name === "Back-end Development :"
                                    ? "text-primary mb-2 font-semibold mt-1"
                                    : " text-black dark:text-muted-foreground "
                                } font-medium  `}
                              >
                                {name}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex gap-x-8 justify-center xl:justify-start mt-8">
                        {getData(skills, "Skills").image.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* tools */}
                    <div>
                      <h4 className=" text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skills, "Tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
