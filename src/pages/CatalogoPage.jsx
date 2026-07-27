import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactoFooter from "../components/ContactoFooter";

// Apenas os imports que estão a ser efetivamente usados no catálogo
import projeto_10 from '../assets/projeto-10.jpeg';
import projeto_11 from '../assets/projeto-11.jpeg';
import projeto_14 from '../assets/projeto-14.jpeg';
import projeto_16 from '../assets/projeto-16.jpeg';

export default function CatalogoPage() {
  // Faz com que a página abra no topo sempre que entramos nela
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const todosProjetos = [
    { 
      id: 10, 
      titulo: "Cursos Profissionais 2026-2027 – GREJUDEC", 
      desc: "Cartaz de divulgação para catálogo de cursos técnico-profissionais e de operador de máquinas pesadas. Vagas limitadas.", 
      img: projeto_10 
    },
    { 
      id: 11, 
      titulo: "Curso Técnico de Confeitaria – GREJUDEC", 
      desc: "Cartaz usado para marketing no catálogo de cursos, detalhando o programa de confeitaria, custos, duração e requisitos.", 
      img: projeto_11 
    },
    { 
      id: 14, 
      titulo: "Soluções em Marketing Digital e Negócios", 
      desc: "Cartaz de portfólio com serviços de marketing digital, gestão de redes sociais, design e desenvolvimento web para catálogo.", 
      img: projeto_14 
    },
    { 
      id: 16, 
      titulo: "Soluções em Marketing Digital e Negócios", 
      desc: "Cartaz de portfólio com serviços de marketing digital, gestão de redes sociais, design e desenvolvimento web para catálogo.", 
      img: projeto_16 
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans">
      
      {/* Mini Navbar simplificada para voltar atrás */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-wider flex items-center gap-2 hover:text-sky-400 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Voltar ao Início
          </Link>
          <div className="font-bold text-lg">So<span className="text-sky-400">Nexus</span></div>
        </div>
      </nav>

      {/* Cabeçalho do Catálogo */}
      <header className="pt-20 pb-16 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          O Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Catálogo</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto text-lg">
          Explore as soluções que já desenvolvemos. Cada projeto é o resultado de código limpo, design intuitivo e foco nos resultados do cliente.
        </motion.p>
      </header>

      {/* Grelha Completa de Projetos */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {todosProjetos.map((projeto, index) => (
            <motion.div 
              key={projeto.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={projeto.img} alt={projeto.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                <p className="text-sky-400 text-sm">{projeto.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <ContactoFooter />
    </div>
  );
}