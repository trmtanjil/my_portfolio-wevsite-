import { useState, useEffect } from "react";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Firebase",
  "Express",
  "Git",
  "GitHub",
];

export default function SkillsTitle() {
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentText = skills[skillIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentSkill(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentSkill(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <h2 className="text-3xl font-bold text-center">
      All Skills Here !!{" "}
      <span className="text-purple-400">{currentSkill}</span>
      <span className="blinking-cursor">_</span>
      <style>{`
        .blinking-cursor {
          animation: blink 0.9s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </h2>
  );
}
