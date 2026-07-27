import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroScroll from './components/HeroScroll';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import CatalogoResumo from './components/CatalogoResumo';
import Diferenciais from './components/Diferenciais';
import ContactoFooter from './components/ContactoFooter';
import CatalogoPage from "./pages/CatalogoPage";

// 1. CRIAMOS UM "GRUPO" PARA A PÁGINA INICIAL AQUI MESMO
function PaginaInicial() {
  return (
    <>
      <Navbar />
      <HeroScroll />
      <QuemSomos />
      <Servicos />
      <CatalogoResumo /> 
      <Diferenciais />
      <ContactoFooter />

      {/* Botão Flutuante de Contacto Rápido com z-index alto */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contacto"
          className="flex items-center justify-center w-14 h-14 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-full shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all duration-300 hover:scale-110 group"
          aria-label="Ir para a secção de contactos"
        >
          <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}

// 2. O COMPONENTE PRINCIPAL (APP) AGORA APENAS GERE AS ROTAS
export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200 relative">
      <Router>
        <Routes>
          {/* Rota Principal (Landing Page): Carrega a função que agrupámos em cima */}
          <Route path="/" element={<PaginaInicial />} />
          
          {/* Nova Rota (Catálogo Completo): Carrega a página nova */}
          <Route path="/catalogo" element={<CatalogoPage />} />
        </Routes>
      </Router>
    </div>
  );
}