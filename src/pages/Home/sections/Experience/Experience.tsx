import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "../../../../utils/constants";

const Experience = () => {
  return (
    <section id="experiencias" className="py-24 relative overflow-hidden">
      {/* Brilho difuso no fundo centrado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-aura-neon)_0%,transparent_70%)] opacity-5 blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Experiências
          </h2>
          <div className="w-24 h-1 bg-aura-neon mx-auto rounded-full shadow-glow"></div>
        </div>

        {/* Lista de Experiências */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-aura-neon/50 hover:shadow-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-aura-neon transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-lg text-gray-400 font-medium mt-1 block">
                    {exp.company}
                  </span>
                </div>

                {/* Etiqueta de Período com ícone */}
                <div className="flex items-center gap-2 text-aura-neon bg-aura-neon/10 px-4 py-2 rounded-full text-sm font-semibold border border-aura-neon/20 shrink-0 w-fit">
                  <Briefcase size={16} />
                  {exp.period}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
