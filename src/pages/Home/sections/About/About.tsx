import { User, Code } from "lucide-react";
import { SKILLS } from "../../../../utils/constants";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Brilho difuso no fundo (posicionado à esquerda para equilibrar com o da direita em Projetos) */}
      <div className="absolute top-1/3 left-0 w-125 h-125 bg-[radial-gradient(circle,var(--color-aura-neon)_0%,transparent_70%)] opacity-10 blur-[80px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-aura-neon mx-auto rounded-full shadow-glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto (Glassmorphism Card) */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg relative group">
            <div className="absolute -inset-0.5 bg-linear-to-br from-aura-neon/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

            <div className="flex items-center gap-3 mb-6">
              <User className="text-aura-neon" size={28} />
              <h3 className="text-2xl font-bold text-white">Minha Jornada</h3>
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Frontend Developer e estudante de Sistemas de Informação, com
                experiência no desenvolvimento de interfaces modernas,
                escaláveis e orientadas à performance. Atuo na construção de
                aplicações com foco em arquitetura frontend, componentização,
                responsividade e experiência do usuário, participando da
                evolução de produtos SaaS e soluções institucionais. Tenho
                interesse em engenharia de software, sistemas escaláveis e
                integração entre frontend e backend, buscando unir qualidade
                visual, organização de código e eficiência técnica.
              </p>
            </div>
          </div>

          {/* Coluna de Habilidades (Skills) */}
          <div className="flex flex-col h-full justify-center">
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <Code className="text-aura-neon" size={28} />
              <h3 className="text-2xl font-bold text-white">Tecnologias</h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:border-aura-neon hover:shadow-glow cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
