const PerfilButton = ({link, titulo}) => {
    return (
        <>
            <a 
                href={link} 
                className="w-full leading-[40px] block bg-myGrey-700 text-white 
                font-bold rounded-md text-center mb-3
                hover:bg-myGrey-900 duration-300"
                target="_blank"
            >
                {titulo}
            </a>
        </>
    );
}
 
export default PerfilButton;