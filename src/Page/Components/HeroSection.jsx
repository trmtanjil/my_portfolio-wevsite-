import { ArrowDown } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  // mouse tilt effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateLimit = 15;

    rotateX.set(((y - centerY) / centerY) * -rotateLimit);
    rotateY.set(((x - centerX) / centerX) * rotateLimit);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovering(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl animate-float-delay" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Professional photo with tilt */}
    <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  style={{
    rotateX: rotateX,
    rotateY: rotateY,
    transformStyle: "preserve-3d",
  }}
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={handleMouseLeave}
  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_20px_rgba(0,255,255,0.6)] cursor-pointer"
>
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full" />
  
  <img
    src="https://i.ibb.co.com/r219bmrg/472793938-525303010521312-3168934761762375498-n.jpg"
    alt="Tanjilur Rahman"
    className="w-full h-full object-cover object-center"
    style={{ transform: "translateZ(20px)" }}
  />

  {/* Border animation */}
  <motion.div
    className="absolute inset-0 rounded-full border-4 border-primary/30 pointer-events-none"
    animate={{
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
      borderWidth: ["4px", "6px", "4px"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>


        {/* Text content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {" "}
              Tanjilur
            </motion.span>
            <motion.span
              className="text-gradient ml-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {" "}
              Rahman
            </motion.span>
          </h1>

          {/* Designation */}
          <motion.h2
            className="text-xl md:text-2xl font-medium text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Frontend Developer
          </motion.h2>

          {/* Introduction */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="pt-4"
          >
            <motion.a
              href="#projects"
              className="cosmic-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
