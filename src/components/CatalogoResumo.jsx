import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projeto_10 from '../assets/projeto-10.jpeg';
import projeto_11 from '../assets/projeto-11.jpeg';
import projeto_14 from '../assets/projeto-14.jpeg';

export default function CatalogoResumo() {
  const projetosDestaque = [
    { 
      id: 10, 
      titulo: "Cursos Profissionais 2026-2027 – GREJUDEC", 
      desc: "Cartaz de divulgação para catálogo de cursos técnico-profissionais.", 
      categoria: "Design & Educação",
      img: projeto_10 
    },
    { 
      id: 11, 
      titulo: "Curso Técnico de Confeitaria – GREJUDEC", 
      desc: "Cartaz usado para marketing no catálogo de cursos.", 
      categoria: "Marketing",
      img: projeto_11 
    },
    { 
      id: 14, 
      titulo: "Soluções em Marketing Digital", 
      desc: "Cartaz de portfólio com serviços de marketing digital.", 
      categoria: "Social Media",
      img: projeto_14 
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            O Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Trabalho</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Um vislumbre das soluções tecnológicas que desenvolvemos para transformar os negócios dos nossos parceiros.
          </p>
        </div>

        {/* Grelha de Vislumbre (3 Projetos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projetosDestaque.map((projeto, index) => (
            <motion.div 
              key={projeto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={projeto.img} /* CORRIGIDO DE projeto.imagem PARA projeto.img */
                  alt={projeto.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 relative z-10 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent -mt-12 pt-12">
                <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase mb-1 block">
                  {projeto.categoria}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                <p className="text-slate-400 text-sm">{projeto.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão que leva para a outra página */}
        <div className="text-center">
          <Link 
            to="/catalogo" 
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:-translate-y-1"
          >
            Ver Catálogo Completo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}