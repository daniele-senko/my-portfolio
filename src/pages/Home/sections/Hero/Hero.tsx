import { Download, Mail } from "lucide-react"; // Novos ícones
import Avatar from "../../../../assets/images/avatar.jpg";
import { Button } from "../../../../components/ui/Button";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/curriculo.pdf";
    link.download = "Curriculo_Daniele_Senko.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    window.location.href = "mailto:danielesenko@hotmail.com";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0"
    >
      {/* Brilho difuso de fundo (Aura Global) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-[radial-gradient(circle,var(--color-aura-neon)_0%,transparent_70%)] opacity-15 blur-[60px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Imagem (5 colunas) */}
          <div className="md:col-span-5 relative flex justify-center order-1 md:order-0">
            <div className="absolute w-[110%] -top-24 right-0 opacity-60">
              <AnimatedBackground />
            </div>

            <img
              src={Avatar}
              alt="Avatar Daniele Senko"
              className="w-3/5 rounded-full border-2 border-white/10 shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-glow-hover hover:border-aura-neon relative z-10"
            />
          </div>

          {/* Textos e Botões (7 colunas) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-0">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-linear-to-tr from-white via-white to-aura-neon bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(245,0,87,0.25)]">
              Daniele Senko
            </h1>

            <h3 className="text-xl md:text-2xl font-light text-gray-400 tracking-wide mb-10">
              I'm a Frontend Developer
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
              <Button onClick={handleDownloadCV}>
                <Download size={20} />
                <span>Download CV</span>
              </Button>

              <Button onClick={handleContact}>
                <Mail size={20} />
                <span>Contato</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
