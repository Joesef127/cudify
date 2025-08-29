import React, { useRef, useState } from "react";
import Button from "./ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import cudify_full_logo from "../assets/cudify_full_logo.png";
import DropdownNav from "./ui/DropdownNav";
import { Link } from "react-router-dom";
import { navLinks, productDropdown } from "../DataArrays";

const Header = () => {
  // helper to close all menus
  const closeMenus = () => {
    setIsProductOpen(false);
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false); // desktop dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // refs for header and hamburger button
  const headerRef = useRef<HTMLHeadingElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // close dropdowns if user clicks outside header and hamburger button
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const header = headerRef.current;
    const menuBtn = menuBtnRef.current;
    if (
      header &&
      !header.contains(target) &&
      (!menuBtn || !menuBtn.contains(target))
    ) {
      setIsProductOpen(false);
      setIsMenuOpen(false);
      setIsMobileDropdownOpen(false);
    }
  };

  // add/remove listener
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <header
      ref={headerRef}
      className="fixed flex justify-center top-0 left-0 right-0 z-50 md:py-3 bg-[#FAFCFF] backdrop-blur-sm shadow-xs"
    >
      <div className="container max-w-[1232px] flex flex-col justify-center px-4 w-full">
        <div className="flex items-center justify-between py-4 w-full">
          {/* Logo */}
          <Link to={"/#"} className="flex items-center">
            {cudify_full_logo && (
              <img
                src={cudify_full_logo}
                alt="Cudify Logo"
                className="w-[148.245px]"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative product-dropdown">
                  <button
                    onClick={() => setIsProductOpen(!isProductOpen)}
                    className="flex items-center gap-1 text-base relative"
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
                    <div className="absolute left-0 top-full mt-10 w-max rounded-2xl p-6 grid grid-cols-2 gap-10 bg-white  border border-gray-100 animate-fadeIn z-50">
                      {productDropdown.map((item) => (
                        <DropdownNav
                          key={item.heading}
                          icon={item.icon}
                          heading={item.heading}
                          desc={item.desc}
                          route={item.route}
                          closeMenus={closeMenus}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.href}
                  key={link.href}
                  className="text-base relative inline-block"
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#0D41E1] hover:bg-white border border-[#0D41E1] rounded-4xl py-4 px-12 text-white hover:text-[#0D41E1]">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuBtnRef}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header md:hidden pb-5">
            <nav className="flex flex-col gap-2.5 space-y-4">
              {/* Product with dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Product <ChevronDown size={16} />
                </button>
                {isMobileDropdownOpen && (
                  <div className="mt-2 flex flex-col space-y-2">
                    {productDropdown.map((item) => (
                      <DropdownNav
                        key={item.heading}
                        icon={item.icon}
                        heading={item.heading}
                        desc={item.desc}
                        route={item.route}
                        closeMenus={closeMenus}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Other links */}
              <Link
                to={"/about"}
                className="text-foreground hover:text-primary transition-colors"
                onClick={closeMenus}
              >
                About us
              </Link>
              <Link
                to={"/faq"}
                className="text-foreground hover:text-primary transition-colors"
                onClick={closeMenus}
              >
                FAQs
              </Link>
              <Button className="bg-[#0D41E1] hover:bg-white/50 hover:text-[#0D41E1] border hover:border-[#0D41E1] rounded-4xl py-5 px-12 text-white">
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
