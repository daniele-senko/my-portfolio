import { Code2 } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-aura-dark/60 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        {/* Logo / Nome */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Code2
            className="text-aura-neon transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(245,0,87,0.8)]"
            size={28}
          />
          <span className="text-xl font-bold tracking-widest bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-colors">
            DS.
          </span>
        </div>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {["Home", "Sobre", "Projetos"].map((item) => (
            <li
              key={item}
              className="hover:text-aura-neon transition-colors duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-aura-neon after:transition-all after:duration-300 hover:after:w-full"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* O menu Mobile pode ser implementado no futuro com um ícone de Hamburguer (Menu) */}
      </div>
    </nav>
  );
};
