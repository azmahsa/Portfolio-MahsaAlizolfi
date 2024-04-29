import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CartDescription,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I like to code things from scratch and I enjoy bringing ideas to life in the browser and picking components.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "web Development",
    description:
      "I'm a Frontend Focused Web Developer This just means I work on the part of software systems that users interact with.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "I am trying to develop myself in this field and in the not too distant future I will be able to design applications with languages ​​such as React Native. coming soon ...",
  },
];
console.log(serviceData)
const Services = () => {
  return (
    <div className="mb-12 xl:mb-36 mt-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          {" "}
          My Services
        </h2>
        {/* grid items*/}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item,index ) => {
            return (
              <Card
                key={index}
                className=" w-full max-x-[424px] h-[330px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className=" w-[140px] h-[88px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className=" text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
