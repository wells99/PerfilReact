// import BoasVindas from "./components/BoasVindas";
// import { CardDefault } from "./components/Card";
// import { Aluno, Turma, Professor } from "./components/Classe";

import Perfil from "./components/Perfil";
import PerfilButton from "./components/PerfilButton";
import PerfilSecond from "./components/PerfilSecond";

const App = () => {
  return (
    <>
      {/* <BoasVindas
        nome="Marcos"
        turma="FS22"
      />
      <BoasVindas
        nome="Nagila"
        turma="FS22"
      />
      <BoasVindas
        nome="Matheus"
        turma="FS31"
      />
      <Turma nome={"FS22"}>
        <Professor>Gleidson</Professor>
        <Aluno nome={"Well"} />
        <Aluno nome={"Eduardo"} />
        <Aluno nome={"Leo"} />
        <Aluno nome={"Marcos"} />
        <div>
          <h1>Qualquer coisa</h1>
        </div>
      </Turma>
      <Turma nome={"FS31"}>
        <Professor>Elias</Professor>
        <Aluno nome={"Matheus"} />
        <Aluno nome={"Adriana"} />
        <Aluno nome={"Isaac"} />
        <Aluno nome={"Magnum"} />
      </Turma>

      <CardDefault 
        urlImagem={"https://cdn.motor1.com/images/mgl/KPK4R/s3/bmw-320i-m-sport-2021-teste-br.jpg"}
        titulo={"Meu titulo"}
        descricao={"lorem ipsum dolor"}
      /> */}


<PerfilSecond
   fotoPerfil={"https://lh3.googleusercontent.com/a/ACg8ocLQfvC3axFMVDGh_z_z2ohaRP9BlLEGGY7hTDO_PiOdDSZe-5SviQ=s83-c-mo"}
   titulo={"Foto de perfil"}
   nome={"Wellington Matos"}
   localizacao={"Fortaleza - CE"}
   cargo={"Web Developer"}
>

<PerfilButton
          link={"https://github.com/wells99"}
          titulo={"Github"}
        />
        
        <PerfilButton
          link={"https://instagram.com/wellingtonwww1"}
          titulo={"Instagram"}
        />

         <PerfilButton
          link={"https://www.linkedin.com/in/wellington-matos-833431216"}
          titulo={"Linkedin"}
        />


</PerfilSecond>        
</>
  );}

export default App;