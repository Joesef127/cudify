import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import cudify from "../assets/images/Cudify.png";
import { Link } from "react-router-dom";
import { footerNav, footerNav2, footerNav3 } from "../DataArrays";

const Footer = () => {
  return (
    <footer className="bg-slate-900 flex flex-col justify-center items-center w-screen text-slate-300">
      <div className="max-w-[1200px] w-full px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg" data-aos='fade-right'>Company</h3>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route}
                    className="hover:text-white transition-colors"
                     data-aos='fade-right'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg" data-aos='fade-up'>Legal</h3>
            <ul className="space-y-3">
              {footerNav2.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route}
                    className="hover:text-white transition-colors"
                     data-aos='fade-up'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg" data-aos='fade-left'>Contact Us</h3>
            <ul className="space-y-3">
              {footerNav3.map((item) => (
                <li key={item.name} data-aos='fade-left'>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center justify-start gap-2.5 w-full">
              <span className="text-xl font-bold text-white" data-aos='fade-right'>Cudify</span>
            </div>

            <div className="space-y-4 w-full flex flex-col justify-end items-end" data-aos='fade-left'>
              <div className="flex gap-2">
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

          <div className="mt-8 text-xs text-slate-400 space-y-2" data-aos='fade-down'>
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
