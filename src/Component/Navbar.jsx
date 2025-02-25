import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { navItems } from "../constants/index";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileDrawerOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-blue-300">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight text-blue-700 font-bold">
              Comp Soc
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className="py-2 px-3 border rounded-md text-blue-700">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden shadow-lg">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="py-2 px-3 border rounded-md text-blue-700">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
