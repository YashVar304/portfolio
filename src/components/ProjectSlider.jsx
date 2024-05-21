import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from "../assets/blogApp/blog1.png";
import blog2 from "../assets/blogApp/blog2.png";
import blog3 from "../assets/blogApp/blog3.png";
import blog4 from "../assets/blogApp/blog4.png";
import blog5 from "../assets/blogApp/blog5.png";
import blog6 from "../assets/blogApp/blog6.png";
import weather from "../assets/weatherApp/weather.png";
import todo1 from "../assets/todoApp/todo1.png";
import todo2 from "../assets/todoApp/todo2.png";

const projects = [
  {
    title: "Blog Website",
    description:
      "Yash Blogs is a Dynamic blogging platform designed to empower users to share their thoughts, ideas, and stories effortlessly. Leveraging cutting-edge technologies like React.js, Redux, Tailwind CSS, and Appwrite, Blogify offers a seamless user experience with robust backend functionalities. Whether you're a seasoned blogger or just starting your journey, Blogify provides the tools you need to create, manage, and publish captivating content.",
    images: [blog1, blog2, blog3, blog4, blog5, blog6],
    link: "https://yashblogs.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Developed a dynamic Weather App that provides real-time weather updates for both current location and searched cities. Utilizing the OpenWeather API, users can seamlessly check weather conditions with just a few clicks. Instantly fetches and displays weather data for the user's current location.Allows users to search for weather forecasts in any city worldwide.Implemented a user-friendly dashboard where users can add multiple cities and easily view the weather by clicking on them.Utilized local storage to store added cities, ensuring a personalized experience for returning users.",
    images: [weather, weather, weather],
    link: "https://celciuz.netlify.app/",
  },
  {
    title: "Todo Website",
    description:
      "Developed a dynamic todo list web application using React.js, Tailwind CSS, and Context API. The application allows users to efficiently manage their tasks with features such as adding, deleting, and editing todos. Leveraging the Context API for state management ensures seamless communication between components, enhancing user experience and application performance. Implemented local storage functionality to persist data, enabling users to access their todo list across sessions without data loss. This project demonstrates proficiency in frontend development, state management, and data persistence techniques.",
    images: [todo2, todo1],
    link: "#",
  },
  // Add more projects as needed
];

function ProjectSlider() {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-8" id="project">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <Slider {...mainSliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4 block">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <Slider {...projectSliderSettings}>
                  {project.images.map((image) => (
                    <div key={image}>
                      <img
                        src={image}
                        alt={`${project.title}`}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">
                    {expanded[index]
                      ? project.description
                      : `${project.description.substring(0, 100)}...`}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-blue-500 mt-2 inline-block hover:underline"
                  >
                    {expanded[index] ? "Show Less" : "See More"}
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-2 ml-4 inline-block hover:underline"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProjectSlider;
