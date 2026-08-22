import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${isSticky
        ? "md:fixed md:top-0 md:left-0 md:w-full md:bg-white md:shadow-lg"
        : "bg-gradient-to-l from-[#fc6404] to-[#f88b2b]"
        }`}
    >
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-10 py-2">

        {/* Logo */}
        <div className="flex items-center">
            <NavLink to="/" end>
    <img
      src={logo}
      alt="Logo"
      className="w-20 h-14 md:w-24 md:h-16 object-contain cursor-pointer"
    />
  </NavLink>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center space-x-6 font-medium text-sm ${isSticky ? "text-orange-700" : "text-white"
            }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-orange-700 transition ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-orange-700 transition ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/brand"
            className={({ isActive }) =>
              `hover:text-orange-700 transition ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Brand
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-orange-700 transition ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/internship"
            className={({ isActive }) =>
              `hover:text-orange-700 transition ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Internship
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-orange-700 transition ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Contact Us
          </NavLink>

          <button
            className={`px-5 py-2 rounded-full font-bold transition ${isSticky
              ? "bg-[#fc7b0c] text-white hover:bg-orange-600 login-btn"
              : "bg-white text-[#fc7b0c] hover:bg-orange-100"
              }`}
          >
            Login
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden text-3xl transition duration-300 ${isSticky ? "text-orange-600" : "text-white"
            }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <nav
          className="
      flex flex-col
      px-6 pb-6 pt-2
      space-y-5
      font-medium
      bg-gradient-to-b
      from-[#f88b2b]
      to-[#fc6404]
      text-white
  "
        >
          <NavLink
            to="/"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b border-white/20 pb-2 ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/products"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b border-white/20 pb-2 ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/brand"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b border-white/20 pb-2 ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Brand
          </NavLink>

          <NavLink
            to="/about"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b border-white/20 pb-2 ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            About Us
          </NavLink>


          <NavLink
            to="/internship"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b border-white/20 pb-2 ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Internship
          </NavLink>


          <NavLink
            to="/contact"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `border-b border-white/20 pb-2 ${isActive ? "underline underline-offset-8 font-bold" : ""
              }`
            }
          >
            Contact Us
          </NavLink>


          <button
            className="
        py-3
        rounded-full
        font-bold
        bg-white
        text-[#fc6404]
        hover:bg-orange-100
        transition
      "
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;