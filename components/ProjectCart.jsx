import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
const ProjectCart = ({ project }) => {
  return (
    <Card className=" group overflow-hidden relative  ">
      <CardHeader className="p-0 mt-[-10px]">
        {/* image */}
        <div className=" relative w-full h-[300px] flex items-center  bg-cover  justify-center  rounded-lg dark:bg-secondary/40 xl:bg-bg_work_light   dark:xl:bg-bg_work_dark xl:bg-[110%] mt-[10px] ">
          <Image
            className=" absolute bottom-4 rounded-[30px] md:p-[10px]  "
            src={project.image}
            width={460}
            height={460}
            alt=""
            priority
          ></Image>
          {/* btn link */}
          <div className="flex gap-x-4 ">
            <Link
              className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              href={project.link}
            >
              <Link2Icon className=" text-white" />
            </Link>
            <Link
              className=" bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              href={project.git}
            >
              <Github className=" text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6 ">
        <Badge className=" uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className=" text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCart;
