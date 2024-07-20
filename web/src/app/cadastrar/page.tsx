'use client'

import { useState } from "react";
import axios from "axios";

export default function Cadastrar() {
  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [duracao, setDuracao] = useState("")
  const [status, setStatus] = useState("")

  const Inserir = (e: any) => {
    e.preventDefault()

    console.log('Recebendo valores \n')
    console.log(nome + ' ' + curso, + ' ' + duracao + ' ' + status)
   
    /** */
      const url = "http://localhost:8080/api/aula/cadastrar"

      axios.post(url, {
        nome,
        curso,
        duracao,
        status
      })
      .then( () => {
          alert("Aula Cadastrada com sucesso")
          setNome(''), setCurso(''), setDuracao(''), setStatus('')
        }
      )
      .catch( (error) => {
        console.log('erro: ' + error)
      })
     
  }

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex items-center justify-between">
       
      </div>
      <div>
        <form className="flex flex-col items-center justify-center gap-3">
          <input
            className="bg-zinc-600 mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
            type="text"
            placeholder="Aula"
            value={nome}
            onChange={ e => setNome(e.target.value)}
          />
          <input
            className="bg-zinc-600 mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
            type="text"
            placeholder="Nome do Curso"
            value={curso}
            onChange={ e => setCurso(e.target.value)}
          />
          <input
            className="bg-zinc-600 mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
            type="number"
            placeholder="Duração do Vídeo"
            value={duracao}
            onChange={ e => setDuracao(e.target.value)}
          />
          <select value={status} onChange={ e => setStatus( e.target.value ) } 
              className="bg-zinc-600 mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
          >
            <option value="">Selecione</option>
            <option value="rascunho">Rascunho</option>
            <option value="publicada">Publicada</option>
            <option value="desativada">Desativada</option>
          </select>
          <button onClick={Inserir} data-bs-dismiss="modal" className="bg-green-500 mr-3 px-4 py-2 rounded-md font-medium" >Cadastrar Aula</button>
        </form>
      </div>
      
    </div>
  );
}
