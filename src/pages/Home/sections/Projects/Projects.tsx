import { ProjectCard } from "../../../../components/ui/ProjectCard";
import { PROJECTS } from "../../../../utils/constants";

const Projects = () => {
  return (
    <section id="projetos" className="py-24 relative">
      {/* Brilho de fundo sutil */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--color-aura-neon)_0%,transparent_70%)] opacity-10 blur-[80px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-aura-neon mx-auto rounded-full shadow-glow"></div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
