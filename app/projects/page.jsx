"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCart from "@/components/ProjectCart";
const projectData = [
  {
    image: "/work/Project-7.jpg",
    category: "React Js",
    name: "Product Landing website ",
    description:
      "This site designed using React, Vite JS, Tailwind  and other functional features such as aos and swiper.",
    link: "https://product-landing-website.vercel.app/",
    git: "https://github.com/azmahsa/Product-Landing-website.git",
  },
  {
    image: "/work/Project-9.jpg",
    category: "React Js",
    name: "Shopping Cart",
    description:
      " This site is designed using React Js. In this project, a shopping card is designed using API.",
    link: "https://shopping-website-tawny.vercel.app/",
    git: "https://github.com/azmahsa/Shopping-Website-Template-React.git",
  },

  {
    image: "/work/Project-4.jpg",
    category: "React Js",
    name: "BRAND.website ",
    description:
      "This site is an example of a portfolio template designed using React, Vite JS, Tailwind",
    link: "https://website-template-react-sand.vercel.app/",
    git: "https://github.com/azmahsa/Website-Template-React.git",
  },

  {
    image: "/work/Project-3.jpg",
    category: "React Js",
    name: "Portfolio website katty",
    description:
      "This site is an example of a portfolio template designed using React, Vite JS, Tailwind",
    link: "https://react-project-portfolio-neon.vercel.app/",
    git: "https://github.com/azmahsa/ReactProject-Portfolio.git",
  },

  {
    image: "/work/Project-5.jpg",
    category: "React Js",
    name: "XYZ website ",
    description:
      "This site designed using React, Vite JS, Tailwind CSS and other functional features such as framer-motion ",
    link: "https://website-template-cyan.vercel.app/",
    git: "https://github.com/azmahsa/Website-Template-whith-React.git",
  },
  {
    image: "/work/Project-6.jpg",
    category: "React Js",
    name: "3D website ",
    description:
      "This app is built with React along with stunning animations, 3D elements.",
    link: "/",
    git: "https://github.com/azmahsa/3D-Project-Template-React.git",
  },
  {
    image: "/work/Project-8.jpg",
    category: "React Js",
    name: "Login page",
    description:
      "This site designed using React, Vite JS, Tailwind and other functional features such as aos and swiper.",
    link: "https://login-page-template-brown.vercel.app/",
    git: "https://github.com/azmahsa/Login-Page-Template.git",
  },
  {
    image: "",
    category: "Next Js",
    name: "Mahsa Alizolfi Portfolio ",
    description:
      "This site designed using React, Vite JS, Tailwind  and other functional features such as aos and swiper.",
    link: "/",
    git: "/",
  },
  {
    image: "/work/Project-2.jpg",
    category: "HTML-CSS",
    name: "Portfolio website Satin",
    description:
      "An example site that is completely designed with Html and Css.",
    link: "/",
    git: "https://github.com/azmahsa/Portfolio-Project.git",
  },
  {
    image: "/work/Project-1.jpg",
    category: "HTML-CSS",
    name: "Kasuka website",
    description:
      "An example site that is completely designed with Html and Css.",
    link: "https://zen-colden-m7yqv2wyn.liara.run/",
    git: "https://github.com/azmahsa/HtmlCssWebsite.github.io.git",
  },
];

const unqueCategories = [
  "All Project",
  ...new Set(projectData.map((item) => item.category)),
];
console.log(unqueCategories);

const Projects = () => {
  const [categories, setCategories] = useState(unqueCategories);
  const [category, setCategoty] = useState("All Project");
  const filteredProjects = projectData.filter((project) => {
    //* if category is 'All Project' return all project else filter by category
    return category === "All Project" ? project : project.category === category;
  });
  return (
    <section className=" min-h-screen pt-12">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs className="mb-24 xl:mb-48" defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategoty(category)}
                  value={category}
                  key={index}
                  className=" capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/*tabs content */}
          <div className="  xl:mt-8 mx-auto xl:max-w-[2000px] grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent className="" value={category} key={index}>
                  <ProjectCart project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
