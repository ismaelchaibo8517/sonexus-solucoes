import { motion } from "framer-motion";

export default function Diferenciais() {
  const motivos = [
    "Equipa especializada",
    "Soluções personalizadas",
    "Tecnologia de ponta",
    "Atendimento profissional",
    "Foco em resultados",
    "Inovação constante",
    "Acompanhamento contínuo",
  ];

  const passos = [
    { num: "1", title: "Conhecemos o seu negócio." },
    { num: "2", title: "Analisamos os desafios." },
    { num: "3", title: "Definimos a estratégia." },
    { num: "4", title: "Desenvolvemos a solução." },
    { num: "5", title: "Implementamos o projeto." },
    { num: "6", title: "Monitorizamos os resultados." },
    { num: "7", title: "Otimizamos continuamente." },
  ];

  // Variantes para animação em lista
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // Usamos slate-900 para dar um leve contraste em relação ao fundo slate-950 da secção anterior
    <section id="diferenciais" className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Brilho de fundo (Glassmorphism) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PARTE 1: PORQUE ESCOLHER A SONEXUS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-8 h-[2px] bg-sky-500"></span>
              <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase">Os Nossos Diferenciais</h2>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Porquê Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">SoNexus Soluções?</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg mb-8"
            >
              Não entregamos apenas serviços; construímos parcerias tecnológicas duradouras focadas no crescimento sustentável da sua empresa.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {motivos.map((motivo, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-center gap-3 bg-slate-950/50 border border-slate-800 p-4 rounded-xl hover:border-sky-500/30 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-200 font-medium">{motivo}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PARTE 2: COMO TRABALHAMOS (PROCESSO) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Como <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Trabalhamos</span>
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-400 text-lg">
              Um processo ágil e transparente, do primeiro contacto à otimização contínua.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {passos.map((passo, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative bg-slate-950 border border-slate-800 p-6 rounded-2xl overflow-hidden group hover:border-sky-500/50 transition-colors duration-300"
              >
                {/* Número Gigante de Fundo */}
                <div className="absolute -bottom-4 -right-2 text-[100px] font-black text-slate-800/30 group-hover:text-sky-900/20 transition-colors duration-300 select-none">
                  0{passo.num}
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 font-bold mb-6">
                    {passo.num}
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors duration-300">
                    {passo.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}