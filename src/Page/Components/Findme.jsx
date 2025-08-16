import React from 'react'
import { motion } from "framer-motion";

const mylinks = [
 
  { name: "React", img: "/skills/github.png", color: "rgba(97, 218, 251, 0.8)",  url: "https://github.com/trmtanjil"  },
  { name: "Linkden", img: "/skills/linkdin.png", color: "rgba(0, 0, 0, 0.8)",  url: "https://www.linkedin.com/in/trm-tanjil/"  },
  { name: "Facebook", img: "/skills/facebook.png", color: "rgba(77, 194, 116, 0.8)",  url: "https://web.facebook.com/profile.php?id=100091248537794"  },
 
];

function Findme() {
  return (
       <section id="findme" className="pb-8  mx-auto flex justify-center items-center gap-[100px]">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
         Find  Me
          <div className="my-3">
       
          </div>
          <div className="text-xl font-normal w-[80%] mx-auto">
           </div>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {mylinks.map((skill, index) => (
            <motion.a
  href={skill.url}  
  target="_blank"
  rel="noopener noreferrer"
  key={index}
  className="relative flex flex-col items-center"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
>
              {/* Skill card */}
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg bg-gray-800/80 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-lg overflow-hidden"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Findme