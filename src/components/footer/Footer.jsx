// Footer.jsx
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-8 gap-3">
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
              {/* <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/nigarmurvetzade" target="_blank" className="transition hover:text-pink-500">
                <section className="flex justify-center items-center">
                  <button href="/" className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.1em" viewBox="0 0 512 512" strokeWidth={0} fill="currentColor" stroke="currentColor" className="w-5 h-5">
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-[13px] group-hover:-translate-y-7 duration-700">
                      nigarmurvetzade
                    </span>
                  </button>
                </section>
              </motion.a> */}
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
