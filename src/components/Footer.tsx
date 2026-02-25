import { Instagram, Linkedin } from "lucide-react";
import cudify from "../assets/images/Cudify.png";
import { Link } from "react-router-dom";
import { footerNav, footerNav2, footerNav3, footerNav4 } from "../DataArrays";

const Footer = () => {
  return (
    <footer className="bg-slate-900 flex flex-col justify-center items-center w-screen text-slate-300">
      <div className="max-w-[1200px] w-full px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6 lg:gap-0">
          {/* Company */}
          <div className="space-y-4">
            <h3
              className="text-white font-semibold text-lg"
              data-aos="fade-right"
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route ? item.route : "#"}
                    className="hover:text-white transition-colors text-sm sm:text-base"
                    data-aos="fade-right"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg" data-aos="fade-up">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNav2.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route ? item.route : "#"}
                    className="hover:text-white transition-colors text-sm sm:text-base"
                    data-aos="fade-up"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3
              className="text-white font-semibold text-lg"
              data-aos="fade-left"
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              {footerNav3.map((item, index) => (
                <li key={index} className="text-sm sm:text-base">
                  {item.isAddress ? (
                    <span key={item.name} data-aos="fade-left">
                      {item.name}
                    </span>
                  ) : (
                    <a
                      href={
                        index === 1 ? `mailto:${item.name}` : `tel:${item.name}`
                      }
                      key={item.name}
                      data-aos="fade-left"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3
              className="text-white font-semibold text-lg"
              data-aos="fade-left"
            >
              Address
            </h3>
            <ul className="space-y-3">
              {footerNav4.map((item, index) => (
                <li key={index} className="text-sm sm:text-base">
                  <span key={item.name} data-aos="fade-left">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center justify-start gap-2.5 w-full">
              <a
                href="/"
                className="text-2xl sm:text-3xl font-bold text-white"
                data-aos="fade-right"
              >
                Cudify
              </a>
            </div>

            <div
              className="space-y-4 w-full flex flex-col justify-end items-end"
              data-aos="fade-left"
            >
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/cudifytech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cudify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-8 text-xs text-slate-400 space-y-2"
            data-aos="fade-down"
          ></div>
        </div>
      </div>
      <img src={cudify} alt="cudify logo" className="w-full" />
    </footer>
  );
};

export default Footer;
