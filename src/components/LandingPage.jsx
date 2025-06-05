
const LandingPage = () => {
    return (
        <>
            <nav className="bg-black min-w-screen border-b border-gray-800 text-white flex justify-between h-20 items-center px-16">
                <div className="font-bold ">
                    <h1 className="hover:text-blue-500 hover:cursor-pointer text-lg "><span className="text-blue-500">Well</span>  Portfólio</h1>
                </div>
                <div className="flex items-center justify-evenly gap-4 text-lg font-semibold ">
                    <p className="hover:text-blue-500 hover:cursor-pointer">Sobre mim</p>
                    <p className="hover:text-blue-500 hover:cursor-pointer">Projetos</p>
                    <p className="hover:text-blue-500 hover:cursor-pointer">Serviços</p>
                    <p className="hover:text-blue-500 hover:cursor-pointer">Skills</p>
                </div>
            </nav>


            <main>
                <div className="w-full flex text-white">
                    <div id="left" className="w-1/2 pl-20 pt-20 bg-black/90">
                        <p className="text-[#828282] text-xl" ><span className="text-white">Transformando</span>  o seu projeto em <span className="text-green-500 font-semibold">realidade</span>. </p>
                        <div className="flex gap-4 pt-10">
                            <button className="bg-purple-900 px-4 py-2 rounded-md hover:bg-purple-900/80 font-semibold">
                                Download Currículo
                            </button>
                            <button className="bg-green-600 hover:bg-green-600/80 px-4 py-2 rounded-md font-semibold">
                                <a href="(85)999397331">Entrar em contato</a>
                            </button>
                        </div>
                    </div>
                    <div id="rigth" className="w-1/2 border-xl bg-black">
                       
                    </div>
                </div>

                <div className="bg-black text-white px-20 py-8 text-left">
                    <h2 className="text-xl font-bold text-center mb-2 ">Sobre Mim</h2>
                    <p className="text-lg text-neutral-300 ">já a muito tempo envolvido com tecnológia, me tornei técnico em hardware de computadores e após um</p>
                    <p>período de experiência relevante encontrei muitos problemas por estar apenas com maquinas locais, foi ai que descobri o <span className="text-green-500 font-medium">VERDADEIRO</span> poder da internet</p>
                    <p>a liberdade digital e a capacidade de encontrar clientes em qualquer lugar do mundo não é mais uma sonho distante, é a realidade em que vivemos hoje.</p>
                    <p>Garanto estar ao seu lado nessa batalha e juntos atingirmos nossos objetivos.</p>
                    <p className="font-semibold text-neutral-400">
                       Seja um<span className="text-green-500">  E-Commerce</span>, <span className="text-yellow-500">Pagina pessoal</span> ou um <span className="text-gray-100">Sistema Empresarial</span> !!
                    </p>
                    <p> Entre em contato e vamos usar o <span className="text-red-500 font-medium">PODER</span> da internet para expandir o seu trabalho</p>
                   
                </div>


                <div className="w-full px-20 py-10 bg-black text-white" id="redesSociais">
                    
                    <h2 className="text-xl font-bold text-center mb-10 ">
                        Projetos
                    </h2>
                    <div className="flex flex-row gap-4 items-center justify-center">
                        
                        <div className="w-40 h-40 bg-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-700/80 duration-300 ">
                            <div id="imagem-projeto " className="h-[80%] "></div>
                            <p className="text-center font-semibold">nome do projeto</p>
                        </div>

                          <div className="w-40 h-40 bg-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-700/80 duration-300">
                            <div id="imagem-projeto " className="h-[80%] "></div>
                            <p className="text-center font-semibold">nome do projeto</p>
                        </div>
                        
                         <div className="w-40 h-40 bg-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-700/80 duration-300">
                            <div id="imagem-projeto " className="h-[80%] "></div>
                            <p className="text-center font-semibold">nome do projeto</p>
                        </div>

                         <div className="w-40 h-40 bg-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-700/80 duration-300">
                            <div id="imagem-projeto " className="h-[80%] "></div>
                            <p className="text-center font-semibold">nome do projeto</p>
                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}

export default LandingPage