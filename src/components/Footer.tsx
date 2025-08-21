import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import cudify from "../assets/images/Cudify.png";
import { Link } from "react-router-dom";
import { footerNav, footerNav2, footerNav3 } from "../DataArrays";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerNav2.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              {footerNav3.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-xs transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white">Cudify</span>
            </div>

            <p className="text-sm text-slate-400">
              © Cudify2025. All Rights Reserved
            </p>
          </div>

          <div className="mt-8 text-xs text-slate-400 space-y-2">
            <p>
              Cudify is registered in England and Wales (No. 08503014). It is
              authorised by the Financial Conduct Authority to offer e-money and
              payment services under the Electronic Money Regulations 2011 (FRN:
              900293) and is registered with the Financial Conduct Authority to
              offer cryptocurrency services under the Money Laundering,
              Terrorist Financing and Transfer of Funds (Information on the
              Payer) Regulations 2017 (CommonStore website are provided by
              Cudify Decolat Limited regulated by the Financial Conduct
              Authority.
            </p>
          </div>
        </div>
      </div>
      <img src={cudify} alt="cudify logo" className="w-full" />
    </footer>
  );
};

export default Footer;
