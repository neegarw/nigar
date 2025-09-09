import { GraduationCap, Code, FileDown, Github, Linkedin } from "lucide-react";

export default function CuteAbout() {
  return (
    <section className="min-h-screen bg-pink-50 py-16 px-6 flex flex-col items-center">
      <p className="text-center text-gray-700 max-w-2xl mb-12 text-lg">
        Hi! I’m <span className="text-pink-500 font-semibold">Nigar</span>, a Biology graduate turned Frontend Developer.  
        I love creating colorful, interactive, and cute web experiences full of flowers and happiness 🌷.
      </p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Education */}
        <div className="bg-pink-100 rounded-2xl p-6 shadow-lg border border-pink-200 relative overflow-hidden">
          <div className="absolute -top-5 -right-5 w-32 h-32 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-pink-500" />
            <h3 className="text-2xl font-semibold text-pink-600">Education</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>🎓 Baku State University – Biology Teaching</li>
            <li>💻 Div Academy – Frontend Development (6 months)</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-purple-100 rounded-2xl p-6 shadow-lg border border-purple-200 relative overflow-hidden">
          <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-purple-500" />
            <h3 className="text-2xl font-semibold text-purple-600">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JS", "React", "Next.js", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white rounded-full text-purple-700 font-medium text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CV + Links */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
        <a
          href="/cv/nigar-cv.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl shadow-lg hover:bg-pink-600 transition"
        >
          <FileDown className="w-5 h-5" /> Download CV
        </a>

        <div className="flex gap-4 text-gray-700 text-2xl">
          <a href="https://github.com/yourgithub" target="_blank" className="hover:text-pink-500 transition">
            <Github />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-pink-500 transition">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
