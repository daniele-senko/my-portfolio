import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 * Botão principal da aplicação.
 * Implementa o efeito Glassmorphism (vidro) e a "Aura" neon no hover.
 */
export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`
        flex items-center justify-center gap-2 px-6 py-3 
        rounded-xl bg-white/5 border border-white/10 
        backdrop-blur-md text-white transition-all duration-300 ease-in-out
        hover:bg-white/10 hover:-translate-y-1 hover:shadow-glow hover:border-aura-neon/50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
