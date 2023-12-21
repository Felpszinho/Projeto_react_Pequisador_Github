import { useEffect, useState } from "react"
import Perfil from "./components/Perfil/Index"
import Repositorio from "./components/Reposlist/Repos"




function App() {

  const [nomeUsuario, setUsuario] = useState('')

  return (
    <div className="container">

     
      <input className="search" placeholder="Digite o nome do Usuario" type="text" onBlur={(e) => setUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsusario={nomeUsuario} />

          <Repositorio nomeUsuario={nomeUsuario} />
        </>

      )}
      
      

    </div>
  )
}

export default App
