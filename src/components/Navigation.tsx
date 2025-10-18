import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import colors from "../components/colors";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="src/components/logo final-01.svg"
              alt="Panabotics logo"
              className="h-24 sm:h-28 md:h-40 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? colors.primaryHex : "black",
                  }}
                >
                  {item.name}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{
                        backgroundColor: colors.primaryHex,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full max-w-[140px] text-center text-white px-3 py-2 rounded-md font-medium shadow-lg transition-transform duration-300 hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: colors.primaryHex }}
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: "black" }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    style={{
                      color: isActive ? colors.primaryHex : "black",
                      backgroundColor: isActive
                        ? `rgba(${colors.primaryRgb},0.1)`
                        : "transparent",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ backgroundColor: colors.primaryHex }}
                className="block w-full text-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:opacity-90"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
