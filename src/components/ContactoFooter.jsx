import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactoFooter() {
  // Estado para controlar qual opção de contacto o utilizador escolheu
  const [contactMethod, setContactMethod] = useState("whatsapp"); // 'whatsapp' ou 'call'

  return (
    <footer id="contacto" className="bg-slate-950 pt-24 relative border-t border-slate-900">
      
      {/* SECÇÃO DE CONTACTO EM DESTAQUE (UX INTERATIVO) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos iniciar o seu <span className="text-sky-400">projeto?</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Escolha como prefere falar com a nossa equipa. Estamos prontos para ajudar a sua empresa a crescer.
          </p>

          {/* Botões de Escolha (Toggle) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setContactMethod("whatsapp")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                contactMethod === "whatsapp"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>
              Chamar no WhatsApp
            </button>
            
            <button
              onClick={() => setContactMethod("call")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                contactMethod === "call"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)] scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Ligar Diretamente
            </button>
          </div>

          {/* Resultado dinâmico da escolha */}
          <div className="h-24 flex items-center justify-center">
            {contactMethod === "whatsapp" ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/258860717318" target="_blank" rel="noreferrer" className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  +258 860 717 318
                </a>
                <span className="hidden sm:block text-slate-600">|</span>
                <a href="https://wa.me/258841008432" target="_blank" rel="noreferrer" className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  +258 841 008 432
                </a>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <a href="tel:+258852896649" className="text-2xl md:text-3xl font-bold text-sky-400 hover:text-sky-300 transition-colors tracking-widest">
                  +258 852 896 649
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ÁREA INFERIOR DO FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Coluna 1: Identidade */}
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="flex items-center gap-2 text-2xl font-bold tracking-wider">
              <svg className="w-8 h-8 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
              <span>So<span className="text-sky-400">Nexus</span></span>
            </a>
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-wider">
              Conectamos Ideias, Criamos Soluções, Entregamos Resultados!
            </p>
            <p className="text-slate-400 text-sm">
              Do digital ao físico, nós fazemos a conexão que transforma o seu negócio! A SoNexus Soluções é a sua parceira ideal em Moçambique.
            </p>
          </div>

          {/* Coluna 2: Contactos Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Informações</h4>
            <a href="mailto:contato@sonexussolucoes.com" className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors">
              <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              contato@sonexussolucoes.com
            </a>
            <div className="flex items-start gap-3 text-slate-400">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Munhava Centro<br/>Beira, Moçambique</span>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex gap-4 pt-4 mt-2 border-t border-slate-800">
              <a href="https://instagram.com/sonexus.solucoes" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="http://www.sonexussolucoes.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </a>
            </div>
          </div>

          {/* Coluna 3: Mapa Dinâmico */}
          <div className="h-64 md:h-full min-h-[200px] w-full rounded-xl overflow-hidden border border-slate-800 relative">
            {/* Overlay para não roubar o scroll da página, a menos que o utilizador clique */}
            <div className="absolute inset-0 bg-slate-900/20 hover:bg-transparent transition-colors pointer-events-none z-10" />
            <iframe 
              title="SoNexus Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.321482937746!2d34.843603400000004!3d-19.8153406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f3b392eeeaebc07%3A0xa19f56b57956372e!2sMunhava%2C%20Beira%2C%20Mo%C3%A7ambique!5e0!3m2!1spt-PT!2s!4v1716900000000!5m2!1spt-PT!2s" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>

        {/* Direitos Autorais */}
        <div className="text-center pt-8 border-t border-slate-900/50">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} SoNexus Soluções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}