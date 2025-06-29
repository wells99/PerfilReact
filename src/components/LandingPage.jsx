import { useState, useEffect } from "react"
import cafeteria from "../assets/cafeteria.png"
import jellyfin from "../assets/jellyfinn.png"
import mapos from "../assets/mapos.png"
import todo from "../assets/ToDo.png"

const LandingPage = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const phrases = [ "Visibilidade.", "Realidade.", "Escalabilidade."];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    },[text]);

    const tick = () => {
        let i = loopNum % phrases.length;
        let fullText = phrases[i];
        let updatedText = isDeleting ? fullText.substring(0,Number(text.length) - 1) : fullText.substring(0,Number(text.length) + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }

    }


    return (
        <>
            <nav className="bg-black min-w-screen border-b border-gray-800 text-white flex justify-between h-20 items-center px-4">

                <div className="font-bold flex flex-col justify-center items-center gap-2">
                    <span className="text-green-500">Well</span>
                </div>

                <div className="flex items-center justify-evenly gap-4 text-md font-semibold">

                    <a href="#sobre">
                        <p className="hover:text-blue-500 hover:cursor-pointer text-nowrap">Sobre mim</p>
                    </a>

                    <a href="#projetos">
                        <p className="hover:text-blue-500 hover:cursor-pointer">Projetos</p>
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
                    <div id="left" className="w-full pl-10 pt-10 bg-black outline-none flex flex-col gap-8">
                        <div>
                            <p className=" text-white text-xl">Transformando seu projeto em </p>
                            <p className="text-blue-600 font-semibold text-2xl border-r-2 border-blue-500 w-fit ">{text}</p>
                        </div>

                        <div className="w-34 mb-8">

                            <button className="bg-green-600 hover:bg-green-600/80 hover:scale-105 shadow-green-800 px-4 py-2 rounded-md font-semibold duratio">
                                <a href="https://wa.me/5585994306038?text=Vi%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.">Vamos conversar</a>
                            </button>
                        </div>

                    </div>

                </div>


                <div className="w-full px-20 py-10 bg-black text-white" id="projetos">

                    <h2 className="text-xl font-bold text-center mb-10 ">
                        Projetos
                    </h2>

                    <div className="flex flex-col gap-4 items-center justify-center w-full">
                        <div id="containerProjectThree" className="flex flex-col gap-4 justify-center">
                            <div id="imgProject">
                                <a href="https://tocaplay.online/" target="blank">
                                    <img src={jellyfin} alt="imagem-projeto" className="rounded-lg w-200" />
                                </a>
                            </div>
                            <div id="tecnologias" className="flex flex-row gap-2 h-8 ">
                                <p className="px-1 py-1 bg-red-700 rounded border border-red-900">VPS</p>
                                <p className="px-1 py-1 bg-purple-600 rounded border border-purple-800">C#</p>
                                <p className="px-1 py-1 bg-red-800 rounded border border-red-900">VIM</p>
                                <p className="px-1 py-1 bg-orange-500 rounded border border-orange-700">LinuxServer</p>
                                <p className="px-1 py-1  rounded border border-blue-600">Docker</p>
                            </div>
                            <div id="descricaoDoProjeto" >
                                <p><span className="text-neutral-500">Usuario:</span> Portfolio | <span className="text-neutral-500">Senha:</span> Contratado</p>
                                <p>Implementação de app Open Source em VPS de cliente</p>
                            </div>


                        </div>

                        <div id="containerProjectOne" className="flex flex-col gap-4 mb-4">
                            <div id="imgProject" >
                                <a href="https://coffe-cafe-taupe.vercel.app/" target="blank">
                                    <img src={cafeteria} alt="imagem-projeto" className="rounded-lg w-200" />
                                </a>
                            </div>
                            <div id="tecnologias" className="flex flex-row gap-2 h-8">
                                <p className="px-1 py-1 bg-orange-500 rounded border border-orange-700">Html</p>
                                <p className="px-1 py-1 bg-yellow-500 rounded border border-yellow-600">Javascript</p>
                                <p className="px-1 py-1 bg-[#00a6f4] rounded border border-[#00a6f4]/80">Tailwind</p>
                                <p className="px-1 py-1 bg-blue-500 rounded border border-blue-600">CSS</p>
                                <p className="px-1 py-1 bg-green-500 rounded border border-green-600">Node</p>
                            </div>
                            <div id="descricaoDoProjeto">
                                <p>Landing Page de uma cafeteria focando nos produtos mais vendidos.
                                    Transmitindo a sofisticação e qualidade da cafeteria.
                                </p>
                            </div>


                        </div>

                        <div id="containerProjectFour" className="flex flex-col gap-4 justify-center">
                            <div id="imgProject" >
                                <a href="https://tocaplay.online/" target="blank">
                                    <img src={mapos} alt="imagem-projeto" className="rounded-lg w-200" />
                                </a>
                            </div>
                            <div id="tecnologias" className="flex flex-row gap-2 h-8">
                                <p className="px-1 py-1 bg-yellow-500 rounded border border-yellow-600">JQuery</p>
                                <p className="px-1 py-1 bg-pink-500 rounded border border-pink-700">PHP</p>
                                <p className="px-1 py-1 bg-blue-500 rounded border border-blue-600">SQL</p>
                                <p className="px-1 py-1 bg-blue-500 rounded border border-blue-600">Bootstrap</p>
                                <p className="px-1 py-1 bg-orange-500 rounded border border-orange-700">HTML</p>
                            </div>
                            <div id="descricaoDoProjeto" >
                                <p className="text-nowrap"><span className="text-neutral-500">Usuario:</span> Portfolio | <span className="text-neutral-500">Senha:</span> Contratado</p>
                                <p>Implementação de sistema Open Source de gerenciamento de Ordens de Serviço e Vendas</p>
                            </div>


                        </div>

                        <div id="containerProjectTwo" className="flex flex-col gap-4 justify-center">
                            <div id="imgProject" >
                                <a href="https://to-do-react-umber-pi.vercel.app/" target="blank">
                                    <img src={todo} alt="imagem-projeto" className="rounded-lg w-200" />
                                </a>
                            </div>
                            <div id="tecnologias" className="flex flex-row gap-2 h-8">
                                <p className="px-1 py-1 bg-blue-500 rounded border border-blue-800">WordPress</p>
                                <p className="px-1 py-1 bg-pink-500 rounded border border-pink-600">PHP</p>
                                <p className="px-1 py-1  rounded border border-blue-600">Docker</p>
                                <p className="px-1 py-1 bg-orange-500 rounded border border-orange-700">FireBase</p>
                            </div>
                            <div id="descricaoDoProjeto" >
                                <p>Landing Page de uma cafeteria focando nos produtos mais vendidos.</p>
                            </div>


                        </div>

                    </div>
                    <div id="sobre" className="bg-black text-white px-20 py-8 text-left w-full">
                        <h2 className="text-xl font-bold text-center mb-2 ">Sobre Mim</h2>
                    </div>
                </div>
            </main>

        </>
    )
}

export default LandingPage