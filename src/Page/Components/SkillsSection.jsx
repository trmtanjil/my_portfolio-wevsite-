import { motion } from "framer-motion";
import SkillsTitle from "./SkillsTitle";


const skills = [
  { name: "JavaScript", img: "/skills/js.png", color: "rgba(247, 223, 30, 0.8)" },
  { name: "React", img: "/skills/react.png", color: "rgba(97, 218, 251, 0.8)" },
  { name: "Next.js", img: "/skills/next.png", color: "rgba(0, 0, 0, 0.8)" },
  { name: "MongoDB", img: "/skills/mongo.png", color: "rgba(77, 194, 116, 0.8)" },
  { name: "HTML5", img: "/skills/html.png", color: "rgba(227, 79, 38, 0.8)" },
  { name: "CSS3", img: "/skills/css.png", color: "rgba(33, 150, 243, 0.8)" },
  { name: "Tailwind", img: "/skills/tailwind.png", color: "rgba(56, 182, 255, 0.8)" },
  { name: "Firebase", img: "/skills/firebase.png", color: "rgba(255, 166, 48, 0.8)" },
  { name: "Express", img: "/skills/express.png", color: "rgba(104, 104, 104, 0.8)" },
  { name: "Git", img: "/skills/git.png", color: "rgba(240, 81, 51, 0.8)" },
  { name: "GitHub", img: "/skills/github.png", color: "rgba(36, 41, 46, 0.8)" },
];

export default function SkillsSection() {
  return (
    <section id="skills"  >
      <div className="  mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
          <div className="my-3">
            <SkillsTitle></SkillsTitle>
          </div>
          <div className="text-xl font-normal w-[80%] mx-auto">
            <p className="text-gray-300">These are the technologies and tools I use to design, develop, and deploy modern, high-performance web applications. From crafting responsive UI with React and Tailwind to building scalable backends with Express and MongoDB — this is my tech stack.</p>
          </div>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {/* Skill card */}
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg bg-gray-800/80 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0.5 rounded-lg overflow-hidden"
                  style={{
                    padding: '2px',
                    background: `conic-gradient(from 0deg, transparent, ${skill.color}, transparent)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-lg bg-gray-800/80"></div>
                </motion.div>

                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 object-contain z-10"
                />
              </motion.div>
              
              <span className="mt-2 text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}