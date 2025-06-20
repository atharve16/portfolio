import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MediMate",
    description:
      "Built a full-stack health app with chat, video consultations, prescription generator, and JWT security using MERN stack, Socket.io, and WebRTC.",
    image: "/projects/project1.jpg",
    tags: ["MERN", "JWT", "WebRTC", "Mongo DB"],
    demoUrl: "#",
    githubUrl: "https://github.com/atharve16/MediMate",
  },
  {
    id: 2,
    title: "Talksy – An AI Chatbot",
    description:
      "Built a MERN stack chatbot using React (Vite) & Gemini API, secured with JWT, deployed on Vercel/Render, and integrated CI/CD.",
    image: "/projects/project2.png",
    tags: ["MERN", "Gemini API", "nodeMailer"],
    demoUrl: "https://talksy-zeta.vercel.app/",
    githubUrl: "https://github.com/atharve16/Talksy",
  },
  {
    id: 3,
    title: "EduVise",
    description:
      "A Smart Classroom Management Software aimed at enhancing the learning environment by streamlining classroom management and academic interactions.",
    image: "/projects/project3.jpg",
    tags: ["MERN", "CI/CD"],
    demoUrl: "https://eduvise.vercel.app/",
    githubUrl: "https://github.com/atharve16/EduVise",
  },
  {
    id: 4,
    title: "Blogify",
    description:
      "A Blogs App alowing users to view, create, update and remove your blogs",
    image: "/projects/project4.jpg",
    tags: ["React.js", "Spring Boot", "Maven"],
    demoUrl: "https://blogify-five-murex.vercel.app/",
    githubUrl: "https://github.com/atharve16/Blog-App",
  },
  {
    id: 5,
    title: "SevenStake",
    description:
      "A dice game allowing players to bet on '7 Up', '7 Down', or 'Lucky 7' with starting points of 5000.",
    image: "/projects/project5.jpg",
    tags: ["MERN", "Memorization"],
    demoUrl: "#",
    githubUrl: "https://github.com/atharve16/SevenStake",
  },
  {
    id: 6,
    title: "Online Banking System",
    description:
      "Built a Java-based Online Banking System with MySQL, featuring account management, transactions, loans, secure authentication, and optimized database connectivity.",
    image: "/projects/project6.jpg",
    tags: ["JAVA", "JDBC", "MY-SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/atharve16/My-Bank",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="text-primary">Projects</span> I've Built
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the real-world applications and platforms I've built,
          integrating modern tech stacks and solving meaningful problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition duration-300"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/atharve16"
          >
            See More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
