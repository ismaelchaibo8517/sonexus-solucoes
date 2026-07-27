import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg'; // Atualizado para .jpeg

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Por Que Nós', href: '#diferenciais' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo SoNexus com Animação */}
          <div className="flex-shrink-0 flex items-center">
            <motion.a 
              href="#inicio" 
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={logo} 
                alt="SoNexus Soluções" 
                className="h-10 md:h-12 w-auto object-contain"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.a>
            <span className='text-lg'>
              SoNexus Soluções
            </span>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* Botão de Ação / CTA */}
            <a
              href="#contacto"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:scale-105"
            >
              Falar com Especialista
            </a>
          </div>

          {/* Botão Hamburguer Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-4 py-3 rounded-xl text-sm transition-all mt-4 shadow-lg shadow-sky-500/20"
          >
            Falar com Especialista
          </a>
        </motion.div>
      )}
    </nav>
  );
}