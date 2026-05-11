import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./GithubIcon"; // Importação do nosso novo componente local

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

/**
 * Componente de Card de Projeto.
 * Renderiza as informações visuais de um projeto com efeito Glassmorphism.
 */
export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-aura-neon/50 flex flex-col h-full">
      {/* Imagem do Projeto com efeito de Zoom suave */}
      <div className="w-full h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-aura-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={`Capa do projeto ${title}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Conteúdo Informativo */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-aura-neon transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 grow">{description}</p>

        {/* Mapeamento de Tags (Tecnologias) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botões de Ação Dinâmicos */}
        <div className="flex gap-4 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-aura-neon transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon size={16} /> Código
          </a>
        </div>
      </div>
    </div>
  );
};
