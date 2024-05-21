import React from "react";
import profile from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

function HeroSection() {
  return (
    <section
      className="flex flex-wrap justify-around items-center px-10 py-10 "
      id="home"
    >
      <div className="flex justify-center mt-10 ">
        <img
          src={profile}
          alt="hero"
          className=" drop-shadow-2xl rounded-full h-96 w-80 lg:h-[28rem] lg:w-96 object-cover animate-slideInLeft delay-2000 image-shadow "
        />
      </div>
      <div className=" mt-5">
        <div className="flex mb-8 ml-5 animate-slideInLeft">
          <a href="https://leetcode.com/u/yash304/">
            <SiLeetcode className="text-4xl text-[#FFA116] hover:text-white cursor-pointer mr-5" />
          </a>
          <a href="https://www.codechef.com/users/yash304">
            <SiCodechef className="text-4xl text-[#ad886f] hover:text-white cursor-pointer mr-5" />
          </a>
          <a href="https://codeforces.com/profile/yash304">
            <SiCodeforces className="text-4xl text-[#1F8ACB] hover:text-white cursor-pointer mr-5" />
          </a>
          <a href="https://www.linkedin.com/in/yashvar304/">
            <FaLinkedin className="text-4xl text-[#0A66C2] hover:text-white cursor-pointer mr-5" />
          </a>
        </div>
        <h1 className="text-5xl font-bold text-white animate-slideInLeft">
          👋🏻Hey there,
          <br />
          It's Yash Varshney...
        </h1>
        <p className="text-justify max-w-lg text-sm md:text-md lg:text-xl mt-3 text-gray-400 animate-slideInLeft text-wrap ">
          A passionate Web developer and Designer with a knack for creating
          dynamic and responsive websites.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
