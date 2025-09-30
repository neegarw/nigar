import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Sparkles } from "lucide-react";

export default function AboutSection({ theme, fromGame }) {
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
    "HTML5", "CSS (TailwindCSS & Bootstrap)", "Javascript / TypeScript",
    "JQuery", "Advanced React / NextJS", "Redux", "Context API",
    "Git (TFS) & GitHub", "REST API", "Material UI & Ant Design",
    "Microfrontend Architecture", "npm & yarn", "Node.js", "Express.js",
  ];

  const futureGoals = [
    "🔮 Become a Fullstack Developer",
    "✨ Create a colorful & interactive UI component library",
    "🌍 Contribute to open-source projects",
  ];

  return (
    <section className={`min-h-screen px-6 flex flex-col items-center
                            ${theme === "dark" ? "text-white selection:bg-[#012626] selection:text-red-950" : "text-gray-800 selection:bg-gray-300 selection:text-[#FEF8B3]"}`}>

      <h3 className="text-[40px] md:text-[50px] lg:text-[60px] text-center px-4 text-pink-600">About 🌸</h3>

      {fromGame && (
        <p className="font-semibold text-pink-700 text-center">
          🎉 Congratulations! You unlocked my About section by completing the game!
        </p>
      )}

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl py-5 text-lg"
      >
        Hi! I’m <span className="text-pink-500 font-semibold">Nigar</span>, a Biology graduate turned
        Frontend Developer 🌸. I love creating <span className="text-pink-600 font-semibold">colorful, interactive</span> and cute web experiences 🌷.
      </motion.p>

      {/* Timeline */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 w-full max-w-4xl">
        <h3 className="text-3xl  font-bold text-pink-600 mb-6 text-center">My Journey</h3>
        <div className="border-l-4 border-pink-300 pl-6 space-y-6">
          {[
            { icon: <GraduationCap className="text-pink-500" />, year: "2020 – 2024", desc: "Baku State University – Biology Teaching" },
            { icon: <Code className="text-purple-500" />, year: "2024", desc: "Div Academy – Frontend Development (6 months)" },
            { icon: <Sparkles className="text-yellow-500" />, year: "Present", desc: "Internship at Okmedia" },
          ].map((item, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} transition={{ delay: i * 0.3 }}>
              <h4 className="font-semibold flex items-center gap-2">{item.icon} {item.year}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Facts */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {quickFacts.map((fact, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-5 rounded-2xl shadow-md text-center border cursor-pointer
                            ${theme === "dark" ? "text-white bg-[#8c0e236c]" : "bg-pink-50 border-pink-200 text-gray-800"}`}
          >
            <div className="text-3xl mb-2">{fact.icon}</div>
            <h4 className="font-semibold">{fact.label}</h4>
            <p>{fact.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-12 w-full max-w-4xl">
        <h3 className="text-3xl font-bold text-purple-600 mb-6 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 py-2 rounded-full text-sm shadow-md border cursor-pointer
                                ${theme === "dark" ? "text-white bg-[#8c0e236c]" : "bg-white text-purple-700 border-purple-200"}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Future Goals */}
      <motion.ul initial="hidden" whileInView="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="space-y-3 py-4">
        <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center">Future Goals</h3>
        {futureGoals.map((goal, i) => (
          <motion.li
            key={i}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className={`p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300
                            ${theme === "dark" ? "text-white bg-[#8c0e236c]" : "bg-pink-50 text-gray-700"}`}
          >
            {goal}
          </motion.li>
        ))}
      </motion.ul>

      {/* Fun Facts */}
      <div className="mt-12 w-full max-w-4xl grid md:grid-cols-3 gap-6">
        {funFacts.map((fact, i) => (
          <div
            key={i}
            className="relative w-full h-32 cursor-pointer"
            style={{ perspective: 1000 }}
            onMouseEnter={() => setFlipIndex(i)}
            onMouseLeave={() => setFlipIndex(null)}
          >
            <motion.div
              style={{ transformStyle: "preserve-3d", width: "100%", height: "100%" }}
              animate={{ rotateY: flipIndex === i ? 180 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full"
            >
              <div
                style={{ backfaceVisibility: "hidden" }}
                className={`absolute w-full h-full rounded-2xl flex items-center justify-center p-4 shadow-md border font-bold
            ${theme === "dark" ? "text-white bg-[#8c0e236c]" : "bg-pink-100 border-gray-300 text-gray-600"}`}
              >
                Fun facts!
              </div>
              <div
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                className={`absolute w-full h-full rounded-2xl flex items-center justify-center p-4 shadow-md border font-semibold
            ${theme === "dark" ? "text-white bg-[#8c0e236c]" : "bg-yellow-50 border-yellow-200 text-gray-700"}`}
              >
                {fact}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
}
