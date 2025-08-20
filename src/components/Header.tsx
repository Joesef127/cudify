import Button from "./ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import cudify_logo from "../assets/cudify_logo.png";
import DropdownNav from "./ui/DropdownNav";
import { Link } from "react-router-dom";
import { navLinks, productDropdown } from "../DataArrays";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false); // desktop dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // close dropdown if user clicks outside
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".product-dropdown")) {
      setIsProductOpen(false);
    }
  };

  // add/remove listener
  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            {cudify_logo && <img src={cudify_logo} alt="Cudify Logo" />}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative product-dropdown">
                  <button
                    onClick={() => setIsProductOpen(!isProductOpen)}
                    className="flex items-center gap-1 text-base relative
                      before:content-[''] before:absolute before:w-full before:h-[2px] 
                      before:bg-[#0D41E1] 
                      before:top-[-5px] before:left-0 before:scale-x-0 before:origin-left 
                      before:transition-transform before:duration-400 before:ease-out 
                      hover:before:scale-x-100 focus:before:scale-x-100 active:before:scale-x-100

                      after:content-[''] after:absolute after:w-full after:h-[2px] 
                      after:bg-[#0D41E1] 
                      after:bottom-[-5px] after:left-0 after:scale-x-0 after:origin-right 
                      after:transition-transform after:duration-400 after:ease-out 
                      hover:after:scale-x-100 focus:after:scale-x-100 active:after:scale-x-100
                    "
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isProductOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {isProductOpen && (
                    <div className="absolute left-0 top-full mt-10 w-max rounded-2xl p-10 grid grid-cols-2 gap-2 bg-white shadow-lg border border-gray-100 animate-fadeIn z-50">
                      {productDropdown.map((item) => (
                        <DropdownNav
                          key={item.heading}
                          icon={item.icon}
                          heading={item.heading}
                          desc={item.desc}
                          route={item.route}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.href}
                  key={link.href}
                  className="text-base relative inline-block 
                    before:content-[''] before:absolute before:w-full before:h-[2px] 
                    before:bg-[#0D41E1] 
                    before:top-[-5px] before:left-0 before:scale-x-0 before:origin-left 
                    before:transition-transform before:duration-400 before:ease-out 
                    hover:before:scale-x-100 focus:before:scale-x-100 active:before:scale-x-100

                    after:content-[''] after:absolute after:w-full after:h-[2px] 
                    after:bg-[#0D41E1] 
                    after:bottom-[-5px] after:left-0 after:scale-x-0 after:origin-right 
                    after:transition-transform after:duration-400 after:ease-out 
                    hover:after:scale-x-100 focus:after:scale-x-100 active:after:scale-x-100
                  "
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#0D41E1] hover:bg-[#0D41E1]/90 rounded-4xl py-5 px-12 text-white">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {/* Product with dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Product <ChevronDown size={16} />
                </button>
                {isMobileDropdownOpen && (
                  <div className="mt-2 flex flex-col space-y-2 pl-4">
                    {productDropdown.map((item) => (
                      <DropdownNav
                        key={item.heading}
                        icon={item.icon}
                        heading={item.heading}
                        desc={item.desc}
                        route={item.route}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Other links */}
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About us
              </a>
              <a
                href="#faq"
                className="text-foreground hover:text-primary transition-colors"
              >
                FAQs
              </a>
              <Button className="bg-[#0D41E1] hover:bg-[#0D41E1]/90 rounded-4xl py-5 px-12 text-white">
                Download App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
