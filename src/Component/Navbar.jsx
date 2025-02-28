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
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-gradient-to-b from-[#0A1F44] to-[#06172E] shadow-md">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight text-white font-bold">
              Comp Soc
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className="py-2 px-3 border rounded-md text-white hover:text-yellow-500">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-2 px-3 rounded-md hover:scale-105 transition"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gradient-to-b from-[#0A1F44] to-[#06172E] w-full p-12 flex flex-col justify-center items-center lg:hidden shadow-lg border border-neutral-700/80">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="text-white hover:text-yellow-500 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="py-2 px-3 border rounded-md text-white hover:text-yellow-500">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 text-white hover:scale-105 transition"
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
