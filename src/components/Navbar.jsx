import { useState } from "react";
import Navlogo from "../assets/DigiTools.png"
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 md:px-10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        {/* Logo */}
              <a href="/" className="text-lg sm:text-xl font-extrabold text-primary tracking-tight">
                  <img src={Navlogo} alt="Navlogo" className="w-[100px] md:w-[160px]"  />
          
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className=" text-black hover:text-primary font-semibold transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Cart */}
          <div className="relative">
            <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-black" />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login - Desktop only */}
          <a href="#" className="hidden md:block font-semibold  text-black hover:text-primary transition-colors px-2">
            Login
          </a>

          {/* Get Started - Desktop only */}
          <button className="hidden md:block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]  text-white font-semibold px-4 py-3 rounded-full transition-colors shadow-md shadow-purple-200">
            Get Started
          </button>

          {/* Hamburger - Mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 top-16 w-full bg-white border-t border-gray-300 px-5 py-5 flex flex-col gap-2 shadow-lg">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className=" text-black hover:text-primary font-semibold py-3 border-b border-gray-300  transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4">
            <a href="#" className="font-semibold text-black hover:text-primary transition-colors">
              Login
            </a>
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-purple-700 text-white font-semibold px-4 py-3 rounded-full transition-colors shadow-md shadow-purple-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;