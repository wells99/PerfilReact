const Titulo = () => {
    return(
        <>
            <h1>Titulo</h1>
        </>
    )
}

const BoasVindas = ({nome, turma}) => {
    return (
        <>
            <Titulo />
            <h1>Seja bem-vindo(a) {nome} da turma {turma}</h1>
        </>
    );
}

export default BoasVindas;