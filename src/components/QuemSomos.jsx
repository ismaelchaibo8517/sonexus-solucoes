import { motion } from "framer-motion";

export default function QuemSomos() {
  // Variantes de animação para o texto (efeito escada/stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tempo entre a animação de cada parágrafo
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="sobre" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Efeito de brilho no fundo (Blur) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: Textos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Anima apenas quando entra na tela
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-sky-500"></span>
              <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase">Quem Somos</h2>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              A essência da <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">inovação digital</span>.
            </motion.h3>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                A <strong className="text-white font-semibold">SoNexus Soluções</strong> é uma agência de marketing digital, tecnologia e inteligência artificial dedicada a ajudar empresas a crescerem, aumentarem as suas vendas e fortalecerem a sua presença online. Desenvolvemos estratégias personalizadas que combinam criatividade, tecnologia e automação para gerar resultados reais.
              </motion.p>

              <motion.p variants={itemVariants}>
                Nascemos com a missão de impulsionar empresas por meio de soluções digitais modernas. Acreditamos que qualquer negócio pode crescer quando utiliza as ferramentas certas de marketing, tecnologia e inovação.
              </motion.p>

              <motion.p variants={itemVariants}>
                Atendemos empresas de diversos setores, oferecendo soluções completas para fortalecer marcas, atrair clientes e aumentar a competitividade no mercado.
              </motion.p>
            </div>

            {/* Badges/Tags visuais para destacar os pilares */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
              {['Marketing Digital', 'Sistemas', 'Inteligência Artificial' , 'Sites' , 'Plataformas'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm font-medium text-sky-300 shadow-sm">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Coluna da Direita: Elemento Visual Abstrato (Efeito Glassmorphism/Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            {/* Caixa Principal com efeito Glass */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Círculos decorativos simulando nós de uma rede (Nexus) */}
              <div className="absolute top-10 right-10 w-24 h-24 border border-sky-500/30 rounded-full animate-pulse" />
              <div className="absolute bottom-10 left-10 w-32 h-32 border border-blue-500/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-sky-500/10 to-blue-600/10 rounded-full blur-xl" />

              <div className="relative z-10 text-6xl text-sky-400 opacity-20">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                </svg>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="h-1 w-12 bg-sky-500 mb-4 rounded" />
                <p className="text-slate-200 font-medium">Soluções Completas</p>
                <p className="text-slate-500 text-sm mt-1">Conectando inovação a resultados.</p>
              </div>
            </div>

            {/* Elemento flutuante secundário */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <p className="text-white font-bold">Foco em</p>
                <p className="text-sky-400 text-sm">Resultados Reais</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}