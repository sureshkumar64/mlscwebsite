import React from "react";
import { FaLinkedin, FaDiscord, FaYoutube, FaWhatsapp } from "react-icons/fa";
//hello
const Footer = () => {
  return (
    <footer className="bg-[#0E1525] text-gray-300 pt-14 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <span className="text-xl md:text-2xl font-bold">
            WCE <span className="text-blue-400">- MLSC</span>
          </span>
          <p className="text-sm leading-relaxed text-gray-400">
            Microsoft Learn Students' Club (MLSC) –  
            inspiring innovation, collaboration, and real-world impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/events"
                className="hover:text-yellow-400 transition duration-200"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/podcasts"
                className="hover:text-yellow-400 transition duration-200"
              >
                Podcasts
              </a>
            </li>
            <li>
              <a
                href="/sponsor"
                className="hover:text-yellow-400 transition duration-200"
              >
                Sponsors
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">
            Walchand College of Engineering, Sangli
          </p>
          <p className="text-sm text-gray-400">Maharashtra, India</p>
          <p className="text-sm mt-3">
            Email:{" "}
            <a
              href="mailto:mlsc@walchandsangli.ac.in"
              className="text-yellow-400 hover:underline"
            >
              mlsc@walchandsangli.ac.in
            </a>
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.linkedin.com/company/wce-mlsc/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.gg/pYFknUjw"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaDiscord />
            </a>
            <a
              href="http://youtube.com/@WCEMLSC"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="https://chat.whatsapp.com/FYOmgQpITOsCPtd84Eme0x"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
       <span className="text-xl md:text-2xl font-bold">
            WCE <span className="text-blue-400">- MLSC</span>
          </span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
