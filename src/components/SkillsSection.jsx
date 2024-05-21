import React from "react";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiReact,
  SiRedux,
  SiFlutter,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { icon: <SiCplusplus size={50} color="#00599C" />, name: "C/C++" },
  { icon: <FaJava size={50} color="#007396" />, name: "Java" },
  { icon: <FaPython size={50} color="#3776AB" />, name: "Python" },
  { icon: <FaJsSquare size={50} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaHtml5 size={50} color="#E34F26" />, name: "HTML+CSS" },
  { icon: <FaDatabase size={50} color="#003B57" />, name: "SQL" },
  { icon: <SiReact size={50} color="#61DAFB" />, name: "ReactJS" },
  { icon: <SiRedux size={50} color="#764ABC" />, name: "React Redux" },
  { icon: <SiCplusplus size={50} color="#00599C" />, name: "C++ STL" },
  { icon: <SiFlutter size={50} color="#02569B" />, name: "Flutter" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiBootstrap size={50} color="#7952B3" />, name: "Bootstrap" },
];

function SkillsSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-8" id="skills">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="relative overflow-hidden">
          <div className="animate-scroll flex items-center justify-around whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex flex-col items-center mx-8">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
