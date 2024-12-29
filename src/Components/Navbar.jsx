import { FiChevronDown } from "react-icons/fi"; // Import the down arrow icon
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    business: false,
    ngo: false,
    trademark: false,
    compliance: false,
  });

  const handleDropdown = (section, isEntering) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [section]: isEntering,
    }));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#2E5077]/70 text-white shadow-md p-1">       
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-3xl font-bold text-white hover:text-blue-200 transition duration-300">
            <a href="/">CAGMC</a>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {/* Start Business Dropdown */}
            <div className="relative"
              onMouseEnter={() => handleDropdown("business", true)}
              onMouseLeave={() => handleDropdown("business", false)}>
              <button className="text-lg hover:text-blue-200 transition duration-300">
                Start Business <FiChevronDown size={14} className="inline" />
              </button>
              {isDropdownOpen.business && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg py-2 w-96 mt-0 z-10">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2">Business Registration</th>
                        <th className="px-4 py-2">Licenses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">
                          <a href="#company" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Company Registration
                          </a>
                          <a href="#private" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Private Limited Company Registration
                          </a>
                        </td>
                        <td className="px-4 py-2">
                          <a href="#gst" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            GST Registration
                          </a>
                          <a href="#fssai" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            FSSAI Registration
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* NGO Dropdown */}
            <div className="relative"
              onMouseEnter={() => handleDropdown("ngo", true)}
              onMouseLeave={() => handleDropdown("ngo", false)}>
              <button className="text-lg hover:text-blue-200 transition duration-300">
                NGO <FiChevronDown size={14} className="inline" />
              </button>             
              {isDropdownOpen.ngo && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 mt-0">
                  <a href="#ngo" className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md">
                    NGO Registration
                  </a>
                  <a href="#section8" className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md">
                    Section 8 NPO Registration
                  </a>
                </div>
              )}
            </div>

            {/* Trademark Dropdown */}
            <div className="relative"
              onMouseEnter={() => handleDropdown("trademark", true)}
              onMouseLeave={() => handleDropdown("trademark", false)}>
              <button className="text-lg hover:text-blue-200 transition duration-300">
                Trademark <FiChevronDown size={14} className="inline" />
              </button>
              {isDropdownOpen.trademark && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 mt-0">
                  <a href="#trademark" className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md">
                    Trademark Registration
                  </a>
                  <a href="#copyright" className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md">
                    Copyright Registration
                  </a>
                  <a href="#design" className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md">
                    Design Registration
                  </a>
                  <a href="#patent" className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md">
                    Patent Registration
                  </a>
                </div>
              )}
            </div>

            {/* Compliance Dropdown */}
            <div className="relative"
              onMouseEnter={() => handleDropdown("compliance", true)}
              onMouseLeave={() => handleDropdown("compliance", false)}>
              <button className="text-lg hover:text-blue-200 transition duration-300">
                Compliances <FiChevronDown size={14} className="inline" />
              </button>
              {isDropdownOpen.compliance && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg py-2 w-100 mt-0">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2">Filing & Returns</th>
                        <th className="px-4 py-2">Audit Assurance</th>
                        <th className="px-4 py-2">Advisory Consultancy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">
                          <a href="#audit" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Tax Audit
                          </a>
                          <a href="#accounting" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Accounting Services
                          </a>
                        </td>
                        <td className="px-4 py-2">
                          <a href="#legal" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Legal Advisory
                          </a>
                          <a href="#company" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Company Law
                          </a>
                        </td>
                        <td className="px-4 py-2">
                          <a href="#legal" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Legal Advisory
                          </a>
                          <a href="#company" className="hover:bg-blue-600 hover:text-white transition block py-2 px-4 rounded-md">
                            Company Law
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="w-px bg-gray-600 mx-2 h-8"></div>
            <div className="space-x-4 flex items-center">
              <a href="#" className="text-lg hover:text-blue-200 transition duration-300">Blog</a>
              <a href="/about" className="text-lg hover:text-blue-200 transition duration-300">About</a>
              <a href="#" className="text-lg hover:text-blue-200 transition duration-300">Contact</a>
              <a href="/login" className="text-lg hover:text-blue-200 transition duration-300">
                <FiUser size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-gradient-to-r from-[#2E5077] to-[#2E5077] text-white shadow-lg p-6 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          className="text-2xl mb-6 focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <nav>
          {/* Mobile Sidebar Links */}
          <div className="space-y-4">
            {['business', 'ngo', 'trademark', 'compliance'].map((section) => (
              <div key={section}>
                <button
                  onClick={() => handleDropdown(section, !isDropdownOpen[section])}
                  className="block text-lg hover:text-blue-200 transition duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)} <FiChevronDown size={14} className="inline" />
                </button>
                {isDropdownOpen[section] && (
                  <div className="space-y-2 pl-4">
                    <a
                      href={`#${section}`}
                      className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition rounded-md"
                    >
                      {section} Registration
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-600 my-6"></div>

          <div className="space-y-4">
            <a href="#" className="block text-lg hover:text-blue-200 transition duration-300">Blog</a>
            <a href="/about" className="block text-lg hover:text-blue-200 transition duration-300">About</a>
            <a href="#" className="block text-lg hover:text-blue-200 transition duration-300">Contact</a>
            <a href="/login" className="block text-lg hover:text-blue-200 transition duration-300 flex items-center space-x-2">
              <FiUser size={20} /> <span>Login</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white text-3xl absolute top-6 right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776; 
      </button>
    </header>
  );
};

export default Header;
