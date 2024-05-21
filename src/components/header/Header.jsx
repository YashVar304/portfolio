import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/#" },
    { name: "About", path: "/#about" },

    { name: "Projects", path: "/#project" },
    { name: "Skills", path: "/#skills" },
    { name: "Resume", path: "/#resume" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header className="flex text-gray-400 bg-gray-900 p-4 justify-between items-center z-50 top-0 sticky">
      <div className="ml-[5%]">
        <a href="/">
          <h1 className="text-white text-2xl font-bold text-transparent bg-gradient-to-r from-orange-700 to-yellow-300 bg-clip-text">
            Yash Varshney...
          </h1>
        </a>
      </div>
      <nav>
        <ul className="hidden md:flex ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="ml-4 hover:bg-blue-500 hover:text-white px-5 py-1.5 rounded-full"
            >
              <HashLink smooth to={item.path} className="active:bg-blue-400">
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsDrawerOpen(true)}
        >
          <CiMenuFries />
        </button>
      </nav>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-64 bg-[#25262f] h-full shadow-lg z-50 p-4">
            <button
              className="text-gray-400 text-2xl absolute top-4 right-4"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✕
            </button>
            <ul className="mt-8">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="mt-4 text-gray-400 hover:bg-[#1561ac] hover:text-white px-4 py-2 rounded"
                >
                  <HashLink
                    smooth
                    to={item.path}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
