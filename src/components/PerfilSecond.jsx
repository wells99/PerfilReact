import videoFile from "../assets/video.mp4";
const PerfilSecond = ({ children, fotoPerfil, titulo, nome, localizacao, cargo}) => {
    return (
      <>
        <div className="relative w-full h-screen">
          {/* Vídeo de fundo */}
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={videoFile} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
      
          {/* Overlay opcional para melhorar contraste */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      
          {/* Conteúdo acima do vídeo */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="w-[350px] lg:w-[400px] bg-myGrey-800 rounded-xl p-[40px]">
                    <img 
                        src={fotoPerfil} 
                        alt={titulo} 
                        className="w-[100px] rounded-full m-auto"
                    />
                    <div className="text-center">
                        <h1 className="text-[28px] font-bold mt-4">{nome}</h1>
                        <h6 className="font-bold mb-4">{localizacao}</h6>
                        <p className="text-blue-500 font-bold">{cargo}</p>
                    </div>
                    <div className="mt-6">
                        {children}
                    </div>
                </div>
          </div>
        </div>
      </>
      
      );
    

};
export default PerfilSecond;