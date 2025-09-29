import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, FileDown, Github, Linkedin, Sparkles } from "lucide-react";

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

  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"];
  const futureGoals = [
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
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 bg-white rounded-full text-purple-700 font-medium text-sm shadow-md border border-purple-200 cursor-pointer"
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
      <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="../../../public/cv/Nigar_Murvetzade_cv_eng.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-2xl bg-pink-600 text-white transition ease-in-out"
        >
          <FileDown className="w-5 h-5" /> Download CV
        </motion.a>

        <div className="flex gap-5 text-gray-700 text-2xl">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/neegarw" target="_blank" className="transition hover:text-pink-500">
            <Github />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/nigarmurvetzade" target="_blank" className="transition hover:text-pink-500">
            <Linkedin />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
