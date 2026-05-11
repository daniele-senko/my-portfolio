
import { GithubIcon } from '../ui/GithubIcon';
import { LinkedinIcon } from '../ui/LinkedinIcon';
import { Mail } from 'lucide-react';
/**
 * Componente de Rodapé (Footer).
 * Renderiza os direitos autorais e os links para redes sociais 
 * utilizando os ícones customizados para evitar erros de dependência.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Array de links sociais utilizando os novos componentes de ícone
  const socialLinks = [
    { id: 1, icon: <GithubIcon size={20} />, href: 'https://github.com/danielesenko', label: 'GitHub' },
    { id: 2, icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/in/danielesenko', label: 'LinkedIn' },
    { id: 3, icon: <Mail size={20} />, href: 'mailto:danielesenko@hotmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-white/5 bg-aura-dark/30 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Esquerdo: Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2 tracking-widest">DS.</h3>
            <p className="text-gray-500 text-sm">
              © {currentYear} Daniele Senko. Todos os direitos reservados.
            </p>
          </div>

          {/* Lado Direito: Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:text-aura-neon hover:border-aura-neon hover:shadow-glow hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Linha decorativa fina no fundo */}
        <div className="mt-12 w-full h-px bg-linear-to-r from-transparent via-aura-neon/20 to-transparent"></div>
      </div>
    </footer>
  );
};