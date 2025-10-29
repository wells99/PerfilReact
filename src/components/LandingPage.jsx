import { useState, useEffect } from "react";
import cafeteria from "../assets/cafeteria.png";
import jellyfin from "../assets/jellyfinn.png";
import mapos from "../assets/mapos.png";
import agereflow from "../assets/agereflow.png";
import imagem1 from "../assets/persona(1).png";
import imagem2 from "../assets/persona(2).png";
import phrases from "../components/utils/frases";
import SkillsRow from "./components/SkillsRow";

const projects = [
//   {
//     img: jellyfin,
//     link: "https://videos.wmcentralapps.online",
//     tags: ["VPS", "C#", "VIM", "LinuxServer", "Docker"],
//     desc: [
//       "Usuário: Portfolio | Senha: Contratado",
//       "Transposição de um app funcional em produção de um servidor para uma máquina local",
//       "Ajustes de um serviço de arquivos estilo S3 da Amazon (Wasabi Storage) com Rclone para servir vídeos ao app",
//       "Backup e transferência para nova hospedagem com rotina de update",
//     ],
//   },
  {
    img: cafeteria,
    link: "https://coffe-cafe-taupe.vercel.app/",
    tags: ["HTML", "JAVASCRIPT", "TAILWIND", "CSS", "NODE"],
    desc: [
      "Landing page de uma cafeteria focada em produtos mais vendidos, passando sofisticação e cuidado.",
      "Prototipo hospedado com tag do Google para análise de público e métricas.",
    ],
  },
//   {
//     img: mapos,
//     link: "https://maposs.wmcentralapps.online/",
//     tags: ["HTML", "mySQL", "JQuery", "PHP"],
//     desc: [
//       "Usuário: Portfolio | Senha: Contratado",
//       "Implementação de sistema open source de OS e vendas (MapOS).",
//       "Banco de dados relacional MySQL + PHP + JQuery.",
//       "Automação de fluxos e manipulação de rotas JQuery conforme necessidade do cliente.",
//     ],
//   },
  {
    img: agereflow,
    link: "https://agereflow.vercel.app/",
    tags: ["HTML", "TAILWIND", "Git", "JAVASCRIPT", "Docker"],
    desc: [
      "Sistema de automação para empresas com IA personalizada.",
      "Integração com WhatsApp, Redis, Google Agenda e armazenamento S3 em Docker.",
    ],
  },
];

export default function LandingPage() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black border-b border-gray-800 text-white flex justify-between h-20 items-center px-4">
        <span className="text-blue-900 font-bold text-2xl">Well</span>
        <div className="flex gap-4 font-semibold">
          {["Projetos", "Sobre", "Serviços", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main */}
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-10">
          <img src={imagem2} alt="eu" className="w-60 md:w-0" />

          <div className="text-center md:text-left">
            <p className="text-xl mb-2">Transformando seu projeto em</p>
            <svg
              key={phrases[currentPhraseIndex].nome}
              height="50"
              viewBox={`0 0 ${phrases[currentPhraseIndex].box} 50`}
              xmlns="http://www.w3.org/2000/svg"
              className="pl-16 lg:pl-0 max-w-full"
            >
              {phrases[currentPhraseIndex].svg}
            </svg>
            <div className="mt-8">
              <a
                href="https://wa.me/5585994306038?text=Vi%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
                target="_blank"
                className="bg-blue-700 hover:bg-blue-600/80 px-4 py-2 rounded-md font-semibold inline-block transition-transform hover:scale-105"
              >
                Vamos conversar
              </a>
            </div>
          </div>

          <img src={imagem1} alt="eu" className="w-0 lg:w-40" />
        </section>

        {/* Projetos */}
        <section id="projetos" className="px-10 py-10">
          <h2 className="text-xl font-bold text-center mb-10">Projetos</h2>
          <div className="flex flex-col gap-8 items-center">
            {projects.map(({ img, link, tags, desc }, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl"
              >
                <a href={link} target="_blank" className="w-full lg:w-[300px]">
                  <img
                    src={img}
                    alt="projeto"
                    className="rounded-lg w-full h-[200px] object-cover"
                  />
                </a>
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1 py-1 rounded border border-gray-700 bg-blue-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm leading-relaxed">
                    {desc.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section
          id="sobre"
          className="px-10 lg:px-20 py-8 flex flex-col lg:w-3/4 mx-auto"
        >
          <h2 className="text-xl font-bold text-center mb-4">Sobre Mim</h2>
          <h3 className="text-2xl font-semibold mb-4">
            Olá, me chamo Wellington 🧑‍💻
          </h3>
          <div className="space-y-2 text-lg leading-relaxed">
            <p>
              Tenho 26 anos e mais de cinco anos de experiência em suporte
              técnico, atualmente adquirindo habilidades como Desenvolvedor
              Júnior com sólida trajetória em tecnologia e atendimento ao
              cliente.
            </p>
            <p>
              <strong>Fluente em inglês</strong> e com experiência em línguas
              derivadas do Latim.
            </p>
            <p>
              Com um olhar <strong>analítico</strong>, visando a{" "}
              <strong>inovação</strong>, combinando <strong>técnica</strong> e{" "}
              <strong>empatia</strong> com os usuários para entregar soluções
              eficazes e experiências marcantes.
            </p>
            <p>
              Como profissional autônomo, acumulei experiências em{" "}
              <strong>negociação, vendas e assertividade</strong> — hoje pontos
              fortes nas minhas skills.
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section
          id="serviços"
          className="px-10 lg:px-20 py-8 flex flex-col lg:w-3/4 mx-auto"
        >
          <h2 className="text-xl font-bold text-center mb-4">Serviços</h2>
          {[
            {
              title: "📈 Sistemas de Gestão",
              text: "Organize sua empresa e tenha métricas em tempo real, tudo acessível de onde estiver.",
            },
            {
              title: "⚙️ Automações",
              text: "Automatize seu fluxo de trabalho e tenha mais tempo para o que importa. 🤖 WhatsApp Bot, Instagram, Google Sheets, Agenda e muito mais.",
            },
            {
              title: "🎯 Landing Page",
              text: "Tenha sua página na internet para captar leads, entender seu público e vender mais. É onde tudo começa.",
            },
          ].map((service, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg leading-relaxed">{service.text}</p>
            </div>
          ))}
        </section>

        <SkillsRow />
      </main>
    </>
  );
}
