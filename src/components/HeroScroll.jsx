import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function HeroScroll() {
  const containerRef = useRef(null);
  
  // Captura o progresso do scroll dentro dessa seção (vai de 0 a 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // A rede vai rotacionar no eixo X (deitando até 70 graus) e girando no Z
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 70]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacityGrid = useTransform(scrollYProgress, [0, 0.8, 1], [0.3, 0.5, 0]);

  // Estado para controlar qual mensagem está visível
  const [activeIndex, setActiveIndex] = useState(0);

  // Textos extraídos da identidade da SoNexus
  const messages = [
    {
      title: "SoNexus Soluções",
      subtitle: "Transformamos negócios através da inovação digital."
    },
    {
      title: "Quem Somos",
      subtitle: "Combinamos criatividade, tecnologia e inteligência artificial para gerar resultados reais."
    },
    {
      title: "A Nossa Missão",
      subtitle: "Ajudar empresas a crescer através de soluções digitais inovadoras."
    },
    {
      title: "A Nossa Visão",
      subtitle: "Ser a agência referência em Moçambique e em toda a África."
    }
  ];

  // Dispara a mudança de index baseado na porcentagem do scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.50) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  return (
    // Container com 400vh para permitir um scroll longo enquanto a tela fica fixa
    <div ref={containerRef} className="h-[400vh] bg-slate-950 relative">
      
      {/* Container Fixo (Sticky) que prende a visão do usuário */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center perspective-[1000px]">
        
        {/* A REDE (Grid) Animada */}
        <motion.div
          style={{
            rotateX,
            rotateZ,
            opacity: opacityGrid,
            backgroundImage: `linear-gradient(to right, #0ea5e9 2px, transparent 2px), linear-gradient(to bottom, #0ea5e9 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
          className="absolute w-[200vw] h-[200vh] -left-[50vw] -top-[50vh] origin-center shadow-[inset_0_0_100px_#020617]"
        />

        {/* Gradiente para escurecer as bordas da rede */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950 via-slate-950/80 pointer-events-none" />

        {/* MENSAGENS ANIMADAS */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 h-full">
          {messages.map((msg, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={false}
                // Animação de "se desfazer" e entrar
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : activeIndex > idx ? -80 : 80,
                  scale: isActive ? 1 : 0.8,
                  filter: isActive ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute inset-0 flex flex-col items-center justify-center w-full ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {/* Textos levemente inclinados (não horizontais) usando skew e rotate */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-6 drop-shadow-2xl transform -skew-x-6 -rotate-2 text-center uppercase tracking-tighter">
                  {msg.title}
                </h1>
                
                <p className="text-xl md:text-3xl text-slate-300 font-medium max-w-3xl transform skew-x-3 rotate-1 text-center leading-relaxed">
                  {msg.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}