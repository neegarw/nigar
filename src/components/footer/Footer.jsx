// Footer.jsx
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Name */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Nigar Murvatzade</h2>
        </div>

        {/* Right - Contact info */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center md:justify-end gap-2">
              <FaEnvelope className="text-pink-400" />
              <a
                href="mailto:murvetzadenigar1@gmail.com"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                murvetzadenigar1@gmail.com
              </a>
            </li>
            <li className="flex items-center md:justify-end gap-2">
              <FaLinkedin className="text-pink-400" />
              <a
                href="https://www.linkedin.com/in/nigarmurvetzade/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>Baku, Azerbaijan</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6 pb-20 md:pb-0">
        © {new Date().getFullYear()} Nigar Murvatzade. All rights reserved.
        <br />
      </div>
    </footer>
  );
}
