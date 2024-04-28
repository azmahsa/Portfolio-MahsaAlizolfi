"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//* import swiper style
import "swiper/css";
import "swiper/css/pagination";

//*import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//* import required swiper
import { Pagination, pagination } from "swiper/modules";

//import component
import ProjectCart from "./ProjectCart";

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
    image: "/work/Project-1.jpg",
    category: "HTML-CSS",
    name: "Kasuka website",
    description:
      "An example site that is completely designed with Html and Css.",
    link: "https://zen-colden-m7yqv2wyn.liara.run/",
    git: "https://github.com/azmahsa/HtmlCssWebsite.github.io.git",
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
    image: "/work/Project-2.jpg",
    category: "HTML-CSS",
    name: "Portfolio website Satin",
    description:
      "An example site that is completely designed with Html and Css.",
    link: "/",
    git: "https://github.com/azmahsa/Portfolio-Project.git",
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
    image: "/work/Project.jpg",
    category: "Next Js",
    name: "Mahsa Alizolfi Portfolio ",
    description:
      "This site designed using React, Vite JS, Tailwind  and other functional features such as aos and swiper.",
    link: "/",
    git: "/",
  },
];

const Work = () => {
  return (
    <section className="relative  mb-12 xl:mb-48 mt-24">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h2 className="section-title mb-4 ">My Work</h2>
          <p className=" subtitle mb-8">
            Here are a few past design projects I've worked on.
          </p>
          <Link href="projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px]  xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[488px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 project for the slids */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide  key={index}>
                  <ProjectCart project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
