import React from "react";
import Designer from "../assets/Designer.png";

function AboutSection() {
  return (
    <section className="text-white  py-20 px-8" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row  items-center justify-center">
          <img
            src={Designer} // Replace with your profile picture URL
            alt="Yash"
            className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover mb-6 md:mb-0 md:mr-20"
          />
          <div className="text-lg ">
            <p className="mb-4 text-gray-400">
              Hi, I'm Yash, a passionate web developer with a knack for creating
              dynamic and responsive websites. With a strong foundation in
              front-end and back-end technologies, I enjoy bringing ideas to
              life in the browser.
            </p>
            <p className="mb-4 text-gray-400">
              I have a background in Computer Science and have worked on various
              projects ranging from small business websites to large-scale web
              applications. My expertise includes JavaScript, React, Node.js,
              and more.
            </p>
            <p className="mb-4 text-gray-400">
              In my free time, I love exploring new technologies, contributing
              to open-source projects, and staying updated with the latest
              trends in web development. I'm also an avid reader and enjoy
              learning about different cultures and histories.
            </p>
            <p className="text-gray-400">
              Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
