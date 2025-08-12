import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
  {
    id: 1,
    title: " scholarship-hub",
    description: "This website is designed for students, where they can find, apply for, and track their applications to different national and international scholarships",
    image: "https://i.ibb.co.com/39XZGF08/Screenshot-62.png",
    tags: ["React", "TailwindCSS", "MongoDB","Stripe"],
    demoUrl: "https://scintillating-salmiakki-2da397.netlify.app/",
    githubUrl: "https://github.com/trmtanjil/scholarship-hub#",
  },
  {
    id: 2,
    title: "Tutor Finder web  ",
    description:
      "A streamlined Tutor Finder web application built with React and Tailwind CSS. Helps students connect with qualified tutors based on subject, availability, and location",
    image: "https://i.ibb.co.com/G45q8zdK/Screenshot-74.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://effortless-froyo-5b0e47.netlify.app/",
    githubUrl: "https://github.com/trmtanjil/tutor-hub-clind",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Roomet Finder is a user-friendly web application that helps individuals find compatible roommates based on location, budget, and preferences",
    image: "https://i.ibb.co.com/q39n7kg7/Screenshot-75.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "#https://precious-hotteok-ea707d.netlify.app/",
    githubUrl: "https://github.com/trmtanjil/rommet-finder-clind",
  },
];
function MyprojectSection() {
  return (
      <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/trmtanjil"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyprojectSection