import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-[#2E5077] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Business Registration */}
            <div>
              <h3 className="text-xl font-bold mb-4">Business Registration</h3>
              <ul className="space-y-2">
                <li>Private Limited Company Registration</li>
                <li>Public Limited Company Registration</li>
                <li>One Person Company Registration</li>
                <li>Company Registration</li>
                <li>Foreign Company Registration</li>
              </ul>
            </div>

            {/* Licenses */}
            <div>
              <h3 className="text-xl font-bold mb-4">Licenses</h3>
              <ul className="space-y-2">
                <li>GST Registration</li>
                <li>FSSAI Registration</li>
                <li>MSME Udyam Registration</li>
                <li>ISO Certification</li>
                <li>Business Registration Number</li>
              </ul>
            </div>

            {/* Audit & Tax */}
            <div>
              <h3 className="text-xl font-bold mb-4">Audit & Tax</h3>
              <ul className="space-y-2">
                <li>NGO Audit</li>
                <li>NRI Taxation</li>
                <li>TDS Return</li>
                <li>Tax Audit</li>
                <li>Statutory Audit</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get Contact</h3>
              <ul className="space-y-2">
                <li>Phone: +91-97853 12345</li>
                <li>Email: admin@cagmc.com</li>
                <li>
                  Location: S4, Shree Gopal Nagar, Gopalpura Bypass,
                  Jaipur-302019.
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                  >
                    Locate us on Google Map
                  </a>
                </li>
              </ul>
              {/* Social Media Icons */}
              <div className="flex justify-start space-x-4 mt-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-white text-gray-700 py-4">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
          {/* Copyright Text */}
          <p className="text-center lg:text-left">
            Copyright © 2024 Goyal Mangal & Company. All Rights Reserved
          </p>

          {/* Legal Links */}
          <div className="mt-4 lg:mt-0">
            <a
              href="#disclaimer"
              className="text-blue-600 hover:underline mr-4"
            >
              Disclaimer
            </a>
            <a href="#privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
