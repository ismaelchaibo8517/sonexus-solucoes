// src/assets/renomear.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensoesValidas = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
const ficheiros = fs.readdirSync(__dirname);

// Filtrar apenas as imagens e ignorar o próprio script
const imagens = ficheiros.filter(ficheiro => {
  const ext = path.extname(ficheiro).toLowerCase();
  return extensoesValidas.includes(ext);
});

// Lista dos teus projetos para preencher o array automaticamente
const detalhesProjetos = [
  { titulo: "Sistema HILA", desc: "Plataforma de Gestão Escolar" },
  { titulo: "Vulpe Restaurantes", desc: "Sistema POS e Checkout" },
  { titulo: "Hotel Castelo Branco", desc: "Website Institucional" },
  { titulo: "Angell International School", desc: "Portal Educacional" },
  { titulo: "App Mobile Vendas", desc: "React Native + Supabase" },
  { titulo: "Dashboard Analítico", desc: "Integração de Dados" }
];

let textoImports = '\n// 👇 1. COPIA ESTES IMPORTS PARA O TOPO DO FICHEIRO (Abaixo do React) 👇\n';
let textoArray = '\n// 👇 2. COPIA ESTE ARRAY PARA DENTRO DO COMPONENTE 👇\nconst todosProjetos = [\n';

imagens.forEach((ficheiroAntigo, index) => {
  const numero = index + 1;
  const ext = path.extname(ficheiroAntigo).toLowerCase();
  const novoNome = `projeto-${numero}${ext}`;
  const nomeVariavel = `projeto_${numero}`;

  const caminhoAntigo = path.join(__dirname, ficheiroAntigo);
  const caminhoNovo = path.join(__dirname, novoNome);

  // Renomear o ficheiro
  if (ficheiroAntigo !== novoNome) {
    fs.renameSync(caminhoAntigo, caminhoNovo);
  }

  // Montar a linha de import
  textoImports += `import ${nomeVariavel} from '../assets/${novoNome}';\n`;

  // Montar a linha do array com os teus dados ou com texto genérico se houver mais fotos que títulos
  const detalhes = detalhesProjetos[index] || { titulo: `Novo Projeto ${numero}`, desc: "Descrição breve" };
  textoArray += `  { id: ${numero}, titulo: "${detalhes.titulo}", desc: "${detalhes.desc}", img: ${nomeVariavel} },\n`;
});

textoArray += '];\n';

// Imprimir o resultado final no terminal para copiares
console.log("✅ Imagens renomeadas com sucesso!");
console.log(textoImports);
console.log(textoArray);
console.log("\n🚀 Tudo pronto! Basta copiar o código acima para o teu CatalogoPage.jsx!");