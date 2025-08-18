import { Briefcase, Code, User } from "lucide-react";


function AboutMe() {
  return (
   
        <section id="about" className=" md:pt-[80px] pt-[60px]   px-3 relative">
      {" "}
      <div className="container mx-auto  ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className=" ">
            <h3 className="text-2xl font-semibold pb-4">
              Passionate  MERN Stack Developer 
            </h3>

            <p className="text-muted-foreground text-gray-30 pb-8">
             Hi, I’m Tanjilur Rahman — a passionate web developer with a strong focus on JavaScript and React. I love building clean, responsive, and user-friendly interfaces that provide a great user experience.
            </p>
   <p className="text-xl font-semibold pb-3">
    My  programming journey
   </p>
            <p className="text-muted-foreground text-gray-300 pb-5">
            I started learning programming around January 16, 2024. My journey began with the motivation to explore new skills and build useful applications. Initially, I started with my first semester Python book, which gave me a strong foundation in programming logic and basic concepts.

After that, I gradually learned web design using HTML and CSS, then moved on to mastering technologies like JavaScript and React. Currently, I am deeply interested in full-stack development and constantly working on new projects to improve my skills and build practical applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start text-center ">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

             <a
  href="https://drive.google.com/file/d/1pAfMK7GmTOqYcGmXSkbheUY12RuDBHqL/view?usp=sharing"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left md:h-[92px]">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground text-gray-300">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left md:h-[92px]">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground  text-gray-300">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
             <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
  <div className="p-3 rounded-full bg-primary/10 mx-auto sm:mx-0">
    <Briefcase className="h-6 w-6 text-primary" />
  </div>

  <div className="text-left w-full md:h-[92px]">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-300 gap-2 sm:gap-4 w-full">
      {/* Left Column */}
      <div className="w-full sm:w-[50%] space-y-1">
        <div>
          <span className="font-semibold text-lg">Phone:</span>
          <p className="text-muted-foreground  text-gray-300">+8801867913057</p>
        </div>
        <div>
          <span className="font-semibold text-lg">Email:</span>
          <p className="text-muted-foreground  text-gray-300 break-all">trmtanjil02@gmail.com</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full sm:w-[50%] space-y-1">
        <div className="flex items-center gap-1">
          <p className="font-semibold text-lg">Name:</p>
          <p className="text-muted-foreground  text-gray-300]">Tanjilur Rahman</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-lg">Location:</span>
          <p className="text-muted-foreground  text-gray-300">Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe