import { IconBrandGmail, IconBrandLinkedin } from "@tabler/icons-react";
import { footerLinks } from "../../assets/Data/Data";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const Footer = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <footer className={`pt-16 pb-8 ${isDarkMode ? 'bg-cape-cod-950 text-gray-300' : 'bg-white text-cape-cod-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={require("../../assets/images/logo.png")} 
                alt="Stemlen Logo" 
                className="h-12 w-12"
              />
              <Link to="/" className="text-2xl font-bold">
                <span className={isDarkMode ? 'text-gray-100' : 'text-cape-cod-900'}>Stem</span>
                <span className="text-blue-500">len</span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Stem around and connecting minds. A platform for jobs, hackathons, and talent collaboration. 
              Grow together like a plant stem, reaching new heights.
            </p>
            <div className="flex gap-4">
              {[{ Icon: IconBrandLinkedin, url: "https://www.linkedin.com" }, { Icon: IconBrandGmail, url: "mailto:stemlen.co@gmail.com" }].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white ${
                    isDarkMode 
                      ? 'text-gray-400 hover:bg-opacity-100' 
                      : 'text-cape-cod-700 bg-gray-100 hover:bg-blue-500'
                  }`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-500 mb-4">
                {section.title}
              </h3>
              <div className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.url}
                    className={`text-sm hover:text-blue-500 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-cape-cod-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright & Legal */}
        <div className={`border-t pt-8 ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Stemlen. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm hover:text-blue-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;