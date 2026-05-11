import { Calendar } from "lucide-react";
import { EXPERIENCES } from "../../../../utils/constants";

const Experience = () => {
  return (
    <section id="experiencias" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Título com brilho lateral */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Experiência
          </h2>
          <div className="w-24 h-1 bg-aura-neon rounded-full shadow-glow"></div>
        </div>

        <div className="relative">
          {/* A Linha da Timeline (Aura Line) */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-aura-neon via-aura-neon/20 to-transparent"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* O Ponto de Brilho na Linha */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-aura-dark border-2 border-aura-neon shadow-glow z-20"></div>

                {/* Card de Experiência */}
                <div className="w-full md:w-[45%] group">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-aura-neon/40 group-hover:bg-white/[0.08] group-hover:shadow-glow-hover group-hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-aura-neon text-xs font-bold uppercase tracking-widest mb-3">
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-aura-neon transition-colors">
                      {exp.role}
                    </h3>

                    <span className="text-gray-400 font-medium block mb-4 italic">
                      {exp.company}
                    </span>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Espaçador para o lado oposto no desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
