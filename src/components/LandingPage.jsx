import { useState, useEffect } from "react";
import cafeteria from "../assets/cafeteria.png";
import jellyfin from "../assets/jellyfinn.png";
import mapos from "../assets/mapos.png";
import todo from "../assets/ToDo.png";
import phrases from "../components/utils/frases";
import imagem1 from "../assets/persona(1).png"
import imagem2 from "../assets/persona(2).png"

const LandingPage = () => {

    // estado para controlar o índice da frase atual
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(1);

    useEffect(() => {

        let i = 1
        const loopTime = () => {
            if (i > 12) {
                return;
            }
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            i++
            console.log("Renderização atual:", i, " de 13");
            setTimeout(loopTime, 4000);
        }

        loopTime()

    }, []);

    return (
        <>
            <nav className="bg-black min-w-screen border-b border-gray-800 text-white flex justify-between h-20 items-center px-4">
                <div className="font-bold flex flex-col justify-center items-center gap-2">
                    <span className="text-blue-900">Well</span>
                </div>
                <div className="flex items-center justify-evenly gap-4 text-md font-semibold">

                    <a href="#projetos">
                        <p className="hover:text-blue-500 hover:cursor-pointer">Projetos</p>
                    </a>
                    <a href="#sobre">
                        <p className="hover:text-blue-500 hover:cursor-pointer text-nowrap">Sobre</p>
                    </a>
                    <a href="#services">
                        <p className="hover:text-blue-500 hover:cursor-pointer">Serviços</p>
                    </a>
                    <a href="#skills">
                        <p className="hover:text-blue-500 hover:cursor-pointer">Skills</p>
                    </a>
                </div>
            </nav>

            <main>
                <div className="w-full flex text-white">
                    <div id="left" className="w-full  pt-10 bg-black outline-none flex flex-col gap-8">
                        <div className="w-full flex flex-col lg:flex-row md:gap-8 items-center justify-center ">
                            <img src={imagem2} alt="eu" className="w-60 md:w-0" />
                            <div className="flex flex-col items-center justify-center md:items-start px-2">
                                <p className=" text-white text-xl mb-2">Transformando seu projeto em </p>
                                <svg key={phrases[currentPhraseIndex].nome}
                                    height="50"
                                    viewBox={`0 0 ${phrases[currentPhraseIndex].box} 50`}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`block md:pl-0 md:px-auto max-w-full pl-${phrases[currentPhraseIndex].opl}`}
                                >
                                    {phrases[currentPhraseIndex].svg}
                                </svg>

                                <div className="w-34 mt-8 ">
                                    <button className="bg-blue-700 hover:bg-blue-600/80 hover:scale-105 shadow-green-800 px-4 py-2 rounded-md font-semibold duratio">
                                        <a href="https://wa.me/5585994306038?text=Vi%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.">Vamos conversar</a>
                                    </button>
                                </div>
                            </div>
                            <img src={imagem1} alt="eu" className="w-0 lg:w-40" />
                        </div>

                    </div>
                </div>

                <div className="w-full px-20 py-10 bg-black text-white" id="projetos">
                    <h2 className="text-xl font-bold text-center mb-10 ">Projetos</h2>

                    <div className="flex flex-col gap-4 items-center justify-center w-full ">

                        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl">
                            <div id="imgProject" className="w-full lg:w-[300px] flex-shrink-0">
                                <a href="https://videos.wmcentralapps.online" target="blank">
                                    <img src={jellyfin} alt="imagem-projeto" className="rounded-lg w-full h-[200px] object-cover" />
                                </a>
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row flex-wrap gap-2 h-auto lg:mb-4">
                                    <p className="px-1 py-1 bg-red-700 rounded border border-red-900">VPS</p>
                                    <p className="px-1 py-1 bg-purple-600 rounded border border-purple-800">C#</p>
                                    <p className="px-1 py-1 bg-red-800 rounded border border-red-900">VIM</p>
                                    <p className="px-1 py-1 bg-orange-500 rounded border border-orange-700">LinuxServer</p>
                                    <p className="px-1 py-1 rounded border border-blue-600">Docker</p>
                                </div>
                                <div className="w-full text-sm leading-relaxed">
                                    <p><span className="text-neutral-500 text-nowrap">Usuario:</span> Portfolio | <span className="text-neutral-500">Senha:</span> Contratado</p>
                                    <p>Transposição de um app funcional em produção de um servidor para uma máquina local</p>
                                    <p>Ajustes de um serviço de arquivos estilo S3 da Amazon chamado</p>
                                    <p>WASABI STORAGE com RCLONE para servir os vídeos ao app</p>
                                    <p>Backup e transferência para nova hospedagem com rotina de update</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl">
                            <div id="imgProject" className="w-full lg:w-[300px] flex-shrink-0">
                                <a href="https://coffe-cafe-taupe.vercel.app/" target="blank">
                                    <img src={cafeteria} alt="imagem-projeto" className="rounded-lg w-full h-[200px] object-cover" />
                                </a>
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row flex-wrap gap-2 h-auto lg:mb-4">
                                    <p className="px-1 py-1 bg-orange-500 rounded border border-orange-500">HTML</p>
                                    <p className="px-1 py-1 bg-yellow-500  rounded border border-yellow-800">JAVASCRIPT</p>
                                    <p className="px-1 py-1 bg-blue-500 rounded border border-blue-500">TAILWIND</p>
                                    <p className="px-1 py-1 bg-blue-500 rounded border border-blue-700">CSS</p>
                                    <p className="px-1 py-1 bg-green-500 rounded border border-green-700">NODE</p>
                                </div>
                                <div className="w-full text-sm leading-relaxed">
                              <p>Landing page de uma cafeteria, focando nos produtos mais vendidos para passar  </p>
                              <p>a sofisticação e o cuidado para seus clientes.</p>
                              <p>esse é um prototipo mas no que foi hospedado para o cliente também inseri a tag do google</p>
                              <p>para analise avaliação do público.</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl">
                            <div id="imgProject" className="w-full lg:w-[300px] flex-shrink-0">
                                <a href="https://maposs.wmcentralapps.online/" target="blank">
                                    <img src={mapos} alt="imagem-projeto" className="rounded-lg w-full h-[200px] object-cover" />
                                </a>
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row flex-wrap gap-2 h-auto lg:mb-4">
                                    <p className="px-1 py-1 bg-orange-500 rounded border border-orange-500">HTML</p>
                                    <p className="px-1 py-1 bg-green-600 rounded border border-green-800">mySQL</p>
                                    <p className="px-1 py-1 bg-yellow-500 rounded border border-yellow-700">JQuery</p>
                                    <p className="px-1 py-1 bg-pink-500 rounded border border-pink-700">PHP</p>
                                </div>
                                <div className="w-full text-sm leading-relaxed">
                                    <p><span className="text-neutral-500 text-nowrap">Usuario:</span> portfolio@email.com | <span className="text-neutral-500">Senha:</span> Contratado</p>
                                    <p>Implementação de sistema Open Source de gerenciamento de Ordens de Serviço e Vendas</p>
                                    <p>Esse sistema usa banco de dados relacional mySQL, PHP e JQuery</p>
                                    <p>Além da Implementação desse sistema em uma hospedagem compartilhada o cliente</p>
                                    <p>Pediu algumas automações para agilizar o fluxo de vendas e cadastro</p>
                                    <p>apos a leitura e entendimento das requisiçoes em rotas especificas, manipulei o jquery para que atendesse o pedido do cliente</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl">
                            <div id="imgProject" className="w-full lg:w-[300px] flex-shrink-0">
                                <a href="https://to-do-react-umber-pi.vercel.app/" target="blank">
                                    <img src={todo} alt="imagem-projeto" className="rounded-lg w-full h-[200px] object-cover" />
                                </a>
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row flex-wrap gap-2 h-auto lg:mb-4">
                                    <p className="px-1 py-1 bg-blue-700 rounded border border-blue-900">REACT</p>
                                    <p className="px-1 py-1 bg-blue-500 rounded border border-blue-500">TAILWIND</p>
                                    <p className="px-1 py-1 rounded border border-blue-600">Git</p>
                                </div>
                                <div className="w-full text-sm leading-relaxed">
                                    <p><span className="text-neutral-500 text-nowrap">Usuario:</span> Portfolio | <span className="text-neutral-500">Senha:</span> Contratado</p>
                                    <p>Um ToDo descontraído para anotações básicas utilizando de local storage feito em React, com tailwind e Git para futuros upgrades</p>  
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="sobre" className="bg-black text-white lg:px-20 py-8 flex flex-col w-full text-left lg:w-3/4 gap-1 lg:gap-4">
                        <h2 className="text-xl font-bold text-center mb-2 ">Sobre Mim</h2>
                        <span> </span><h3 className="pb-4 text-md font-semibold text-2xl">Olá, me chamo Wellington 🧑‍💻</h3>
                        <div className="flex flex-col w- text-left gap-2 lg:text-lg">
                            <p>
                                Tenho 26 anos e mais de cinco anos de experiência em suporte técnico, atualmente adquirindo habilidades como Desenvolvedor Júnior com uma sólida trajetória em tecnologia e atendimento ao cliente.</p>
                            <p><span className="font-semibold">Fluente em inglês</span> e com experiencia em línguas derivadas do Latim
                            </p>

                            <p>Com um olhar <span className="font-semibold">analítico</span>, visando a <span className="font-semibold">inovação</span>, combinando a <span className="font-semibold">técnica</span> e a
                                <span className="font-semibold"> empatia</span> com os usuários assim trazendo criatividade para entregar
                                soluções eficazes e experiências marcantes.</p>

                            <p>Como profissional autônomo,
                                acumulei experiências valiosas como: 
                            </p>
                            <p><span className="font-semibold">negociação, vendas e acertividade</span> que hoje são pontos fortes em minhas Skills</p>
                            
                        </div>
                    </div>

                    <div id="services" className="bg-black text-white lg:px-20 py-8 flex flex-col w-full text-left lg:w-3/4 gap-1 lg:gap-4">
                        <h2 className="text-xl font-bold text-center mb-2 ">Serviços</h2>
                        <span> </span><h3 className="pb-4 text-md font-semibold text-2xl">-- Sistemas de Gestão</h3>
                        <div className="flex flex-col w- text-left gap-2 lg:text-lg">
                            <p>
                               Organize sua empresa, seus funcionários e a papelada em um unico lugar, acessível de onde estiver e tenha metricas 
                               de como está o seu negócio em tempo real.
                            </p>
                        </div>

                        <span> </span><h3 className="pb-4 text-md font-semibold text-2xl">-- Automações</h3>
                        <div className="flex flex-col w- text-left gap-2 lg:text-lg">
                            <p>
                               Automatizando seu fluxo de trabalho para que você possa focar nos pontos mais importantes do seu negócio.
                            </p>
                               <p>-- Tenha seu próprio Agente de Ia</p> 
                               <p>-- ChatBot do Whatsapp</p> 
                               <p>-- Atomações para Instagram</p> 
                               <p>-- Planilhas do Google Sheets</p> 
                               <p>-- Agenda do Google</p> 
                        </div>


                          <span> </span><h3 className="pb-4 text-md font-semibold text-2xl">-- Landing Page</h3>
                        <div className="flex flex-col w- text-left gap-2 lg:text-lg">
                            <p>
                               Tenha uma página na internet e não perca mais clientes, os profissionais já entenderam
                            </p>
                            <p>Na sua pagina pessoal você captura leeds, ganha inteligencia com as metricas e consegue evoluir o resultado com as informações de quem visitou a sua página</p>
                            <p>Entenda melhor o seu cliente e vai vender mais, sejá na hora da propaganda paga ou ao separar o perfil de quem consome mais ou menos</p>
                            <p>a Landing Page é onde tudo começa.</p>
                        </div>

                    </div>

                    <div id="skills" className="bg-black text-white lg:px-20 py-8 flex flex-col w-full text-left lg:w-3/4 gap-1 lg:gap-4">
                        <h2 className="text-xl font-bold text-center mb-2 ">Habilidades</h2>
                        <div className="flex flex-row text-left gap-2 lg:text-lg">
                            <p>Javascript</p>
                            <p>PHP</p>
                            <p>CSS</p>
                            <p>TailWind</p>
                            <p>React</p>
                            <p>Node</p>
                            <p>Docker</p>
                            <p>Vim</p>
                            <p>Nano</p>
                            <p>SSH</p>
                            <p>HTML</p>
                            <p>Git</p>
                            <p>MySQL</p>
                            <p>FireBase</p>
                            <p>MongoDB</p>
                            <p>Postgres</p>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LandingPage;