import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, FileDown, Github, Linkedin, Sparkles, Download } from "lucide-react";
import DownloadButton from "../buttons/DownloadButton";

export default function AboutSection() {
  const [flipIndex, setFlipIndex] = useState(null);
  const funFacts = [
    "Known as Pixel Empress in my creative work",
    "☕ Coffee + music = my perfect coding session",
    "Passionate about languages: currently learning English, Russian, and Spanish"
  ];

  const quickFacts = [
    { icon: "🎨", label: "Favorite Colors", value: "Green & Red" },
    { icon: "🎮", label: "Hobby", value: "Games & Creative Design" },
    { icon: "💻", label: "Projects", value: "10+ mini projects built" },
  ];

  const skills = [
    "HTML5",
    "CSS (TailwindCSS & Bootstrap)",
    "Javascript / TypeScript",
    "JQuery",
    "Advanced React / NextJS",
    "Redux",
    "Context API",
    "Git (TFS) & GitHub",
    "REST API",
    "Material UI & Ant Design",
    "Microfrontend Architecture",
    "npm & yarn",
    "Node.js",
    "Express.js",
  ]; const futureGoals = [
    "🔮 Become a Fullstack Developer",
    "✨ Create a colorful & interactive UI component library",
    "🌍 Contribute to open-source projects",
  ];

  return (
    <section className="min-h-screen px-6 flex flex-col items-center">
      {/* 1. Intro */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-700 max-w-2xl py-5 text-lg"
      >
        Hi! I’m <span className="text-pink-500 font-semibold">Nigar</span>, a Biology graduate turned
        Frontend Developer 🌸.
        I love creating <span className="text-pink-600 font-semibold">colorful, interactive</span>,
        and <span className="reactspan selection:text-[#404040]">cute</span> web experiences full of
        flowers and happiness 🌷.
      </motion.p>

      {/* 2. Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 w-full max-w-4xl"
      >
        <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center">My Journey</h3>
        <div className="border-l-4 border-pink-300 pl-6 space-y-6">
          {[
            { icon: <GraduationCap className="text-pink-500" />, year: "2020 – 2024", desc: "Baku State University – Biology Teaching" },
            { icon: <Code className="text-purple-500" />, year: "2024", desc: "Div Academy – Frontend Development (6 months)" },
            { icon: <Sparkles className="text-yellow-500" />, year: "Present", desc: "Internship at Okmedia" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ delay: i * 0.3 }}
            >
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">{item.icon} {item.year}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3. Quick Facts */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {quickFacts.map((fact, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-pink-50 p-5 rounded-2xl shadow-md text-center border border-pink-200 cursor-pointer"
          >
            <div className="text-3xl mb-2">{fact.icon}</div>
            <h4 className="font-semibold text-gray-800">{fact.label}</h4>
            <p className="text-gray-600">{fact.value}</p>
          </motion.div>
        ))}
      </div>

      {/* 4. Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 w-full max-w-4xl"
      >
        <h3 className="text-3xl font-bold text-purple-600 mb-6 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 bg-white rounded-full text-purple-700 font-medium text-sm shadow-md border border-purple-200 cursor-pointer hover:bg-purple-100 hover:text-purple-900"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* 5. Future Goals */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="space-y-3 text-gray-700 py-4"
      >
        <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center">Future Goals</h3>
        {futureGoals.map((goal, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="p-3 rounded-lg bg-pink-50 shadow hover:scale-105 transition-transform duration-300"
          >
            {goal}
          </motion.li>
        ))}
      </motion.ul>


      {/* 6. Fun Facts */}
      <div className="mt-12 w-full max-w-4xl grid md:grid-cols-3 gap-6">
        {funFacts.map((fact, i) => (
          <div
            key={i}
            className="relative w-full h-32 cursor-pointer perspective"
            onMouseEnter={() => setFlipIndex(i)}
            onMouseLeave={() => setFlipIndex(null)}
          >
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flipIndex === i ? 180 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full"
            >
              {/* Front - boş / gizli */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="absolute w-full h-full bg-pink-100 rounded-2xl flex items-center justify-center p-4 shadow-md border border-gray-300 text-gray-600 font-bold"
              >
                Fun facts!
              </div>

              {/* Back - fact */}
              <div
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                className="absolute w-full h-full bg-yellow-50 rounded-2xl flex items-center justify-center p-4 shadow-md border border-yellow-200 text-gray-700 font-semibold"
              >
                {fact}
              </div>
            </motion.div>
          </div>
        ))}
      </div>


      {/* 7. Links + CV */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="../../../public/cv/Nigar_Murvetzade_cv_eng.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-2xl bg-[#5641d8] text-white transition ease-in-out"
        >
          <FileDown className="w-5 h-5" /> Download CV
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/neegarw" target="_blank" className="transition hover:text-pink-500 ">
          <section className="flex justify-center items-center cursor-pointer">
            <button className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#790157] hover:to-[#310413] cursor-pointer" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" className="w-5">
                <path clipRule="evenodd" fillRule="evenodd" fill="currentColor" d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-[13px] group-hover:-translate-y-7 duration-700">
                neegarw
              </span>
            </button>
          </section>
        </motion.a>
      </div>
    </section>
  );
}
