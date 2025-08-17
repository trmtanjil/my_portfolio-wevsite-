import React from "react";
import Swal from "sweetalert2";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "scholarship-hub",
    description:
      "This website is designed for students, where they can find, apply for, and track their applications to different national and international scholarships",
    details: `This is a full-stack scholarship management platform that allows students to search for scholarships worldwide, apply online, track application status, and receive notifications. Features include user authentication, admin dashboard, and Stripe payment integration.`,
    image: "https://i.ibb.co.com/39XZGF08/Screenshot-62.png",
    tags: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "React Hook Form", "Axios", "SweetAlert2"," React Motion"," Chart.js" , "Recharts"],
     tagsback: ["Node.js", "Express.js", "MongoDB", "Native Driver", "Dotenv", "CORS"," imgbb API", "JWT"],
    demoUrl: "https://scintillating-salmiakki-2da397.netlify.app/",
    githubUrl: "https://github.com/trmtanjil/scholarship-hub#",
    detailsImg: [
     "https://i.ibb.co.com/KjcJxBf7/Screenshot-89-Copy.png",
"https://i.ibb.co.com/0jGNX4w7/Screenshot-90.png",
"https://i.ibb.co.com/1JnN0v3L/Screenshot-91.png",
"https://i.ibb.co.com/r9sJd9n/Screenshot-92.png",
"https://i.ibb.co.com/Jj3YGW1L/Screenshot-93.png",
"https://i.ibb.co.com/yTcN9gg/Screenshot-95.png",
    ],
  },
  {
    id: 2,
    title: "Tutor Finder web",
    description:
      "A streamlined Tutor Finder web application built with React and Tailwind CSS. Helps students connect with qualified tutors based on subject, availability, and location",
    details: `This app lets students search for tutors by subject and location. Tutors can register and manage their profiles. Features include search filters, booking system, and responsive UI.`,
    image: "https://i.ibb.co.com/G45q8zdK/Screenshot-74.png",
    tags: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "React Hook Form", "Axios", "SweetAlert2"," React Motion"," Chart.js" ],
    demoUrl: "https://effortless-froyo-5b0e47.netlify.app/",
    githubUrl: "https://github.com/trmtanjil/tutor-hub-clind",
    detailsImg: [
   "   https://i.ibb.co.com/XkXwyGZW/Screenshot-96.png",
"https://i.ibb.co.com/B5m12T0n/Screenshot-97.png",
"https://i.ibb.co.com/VYHSbCPG/Screenshot-98.png",
    ],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Roomet Finder is a user-friendly web application that helps individuals find compatible roommates based on location, budget, and preferences",
    details: `Roomet Finder helps users find roommates matching their budget and preferences. Users can create profiles, browse listings, and communicate with potential roommates.`,
    image: "https://i.ibb.co.com/q39n7kg7/Screenshot-75.png",
    tags: ["React.js", "React Router", "Tailwind CSS", "DaisyUI",   "SweetAlert2"," React Motion"," Chart.js" ],
    demoUrl: "https://precious-hotteok-ea707d.netlify.app/",
    githubUrl: "https://github.com/trmtanjil/rommet-finder-clind",
    detailsImg: [
      "https://ibb.co.com/C5pfK4Yv",
      "https://ibb.co.com/4ZVyfvQq",
      "https://ibb.co.com/YTWSNR63",
      "https://ibb.co.com/4kdx1kB",
      "https://ibb.co.com/YB0514C9",
      "https://ibb.co.com/bhM60NN",
    ],
  },
];

function MyprojectSection() {
  // View Project button click handler
const handleViewProject = (project) => {
  Swal.fire({
    title: project.title,
    html: `
      <div class="swal-project-container">
        <img src="${project.image}" alt="${project.title}" class="swal-main-image" />
        <p class="swal-description">${project.description}</p>
        <p class="swal-tech-stack gap-3 py-3">
          <strong>🖥️ Frontend (Client-side) : </strong>${project.tags.join(", ")}
        </p>
        <p class="swal-tech-stack gap-3 pb-3">
          <strong>🖥️ Backend (Server-side) : </strong>${project.tagsback ? project.tagsback.join(", ") : "N/A"}
        </p>
        <div class="swal-details-container grid grid-cols-2 md:grid-cols-3 gap-3">
          ${project.detailsImg.map((img, index) => `
            <div class="swal-image-wrapper mt-4">
              <img src="${img}" alt="Screenshot ${index+1}" class="swal-detail-image rounded-lg cursor-pointer" onclick="window.open('${img}')" />
              <p class="swal-image-title text-sm mt-1">Screenshot ${index+1}</p>
            </div>
          `).join("")}
        </div>
        <div class="swal-links mt-4">
          <a href="${project.demoUrl}" target="_blank" class="swal-link">🌐 Live Demo</a>
          <span class="swal-link-separator">|</span>
          <a href="${project.githubUrl}" target="_blank" class="swal-link">💻 GitHub Repo</a>
        </div>
      </div>
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: "Close",
    width: "800px",
    customClass: {
      popup: "swal-project-popup",
      htmlContainer: "swal-html-container",
    },
  });
};


  return (
    <section id="projects" className="pt-[80px] relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-xl font-normal text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-gray-300 text-sm mb-4">
                  {project.description}
                </p>


                {/* Push icons to bottom */}
                <button
                  onClick={() => handleViewProject(project)}
                  className="text-primary font-semibold hover:underline mb-4"
                >
                  View Project
                </button>
                <div className="mt-auto flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noopener noreferrer"
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
  );
}

export default MyprojectSection;
