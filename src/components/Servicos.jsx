import { motion } from "framer-motion";

export default function Servicos() {
  const servicosList = [
    {
      title: "Marketing Digital",
      desc: "Estratégias para aumentar a visibilidade da sua empresa e gerar mais clientes.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /> // Pie chart
    },
    {
      title: "Gestão de Redes Sociais",
      desc: "Planeamento, criação de conteúdos e gestão profissional das redes sociais.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /> // Chat bubbles
    },
    {
      title: "Desenvolvimento de Websites",
      desc: "Criação de websites modernos, rápidos, responsivos e otimizados.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> // Code
    },
    {
      title: "Design Gráfico e Branding",
      desc: "Logótipos, identidade visual, materiais promocionais e branding.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /> // Color swatch/Pen
    },
    {
      title: "Inteligência Artificial",
      desc: "Assistentes virtuais, chatbots e automação de atendimento.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /> // Lightning/Spark
    },
{
      title: "Automação de Processos",
      desc: "Automatização de vendas, atendimento e comunicação com clientes.",
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ) // Ícone de Engrenagem corrigido
    },
    {
      title: "SEO",
      desc: "Otimização para motores de pesquisa, aumentando a visibilidade da sua empresa.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> // Search/Magnifier
    },
    {
      title: "Publicidade Online",
      desc: "Campanhas no Google Ads, Facebook Ads e Instagram Ads.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /> // Cursor clicking
    },
    {
      title: "Consultoria Digital",
      desc: "Análise estratégica para acelerar o crescimento do seu negócio.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> // Chart/Growth
    }
  ];

  // Variantes para a grelha de cartões
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faz os cartões aparecerem um após o outro
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase">O Que Fazemos</h2>
            <span className="w-8 h-[2px] bg-sky-500"></span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Os Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Serviços</span>
          </motion.h3>
        </div>

        {/* Grelha de Serviços */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicosList.map((servico, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 hover:border-sky-500/50 transition-all duration-300"
            >
              {/* Efeito Glow no Hover (Escondido por padrão, aparece ao passar o rato) */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              {/* Ícone */}
              <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {servico.icon}
                </svg>
              </div>

              {/* Texto */}
              <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-300 transition-colors duration-300">
                {servico.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {servico.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}