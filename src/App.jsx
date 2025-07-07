import LandingPage from "./components/LandingPage";
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  
      console.log("////////////////////////////////////////////////")
      console.log("Seja bem vindo(a)")
      console.log("Para uma melhor performace as renderizações dessa página são limitadas a uma quantidade intencional")
      console.log("Suficiente para ilustrar ao usuario mas não indeterminada para evitar renderizações indesejadas")
      console.log("Assim economizando recursos e tornando a pagina mais eficiente.")
      console.log("////////////////////////////////////////////////")
  return (
    <>
      <LandingPage />
      <Analytics />

    </>
  );
}

export default App;