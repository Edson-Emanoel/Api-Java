'use client'

import FiltrarStatus from "@/components/aulas/FiltrarStatus";
import ListaAulas from "@/components/aulas/ListaAulas";

import Titulo from "@/components/shared/Titulo";
import { IconClock, IconVideo } from "@tabler/icons-react";

import Estatistica from "@/components/shared/Estatistica";
import Duracao from "@/components/data/utils/Duracao";
import useAulas from "@/components/data/hook/useAulas";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [duracao, setDuracao] = useState(0)
  const [status, setStatus] = useState("")

  const { aulas, duracaoTotal, filtrarAulas } = useAulas()

  const Inserir = (e: any) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/aula/cadastrar"

    axios.post(url, {
      nome,
      curso,
      duracao,
      status
    })
    .then( () => {
        alert("Aula Cadastrada com sucesso")
        setNome(''), setCurso(''), setDuracao(0), setStatus('')
      }
    )
    .catch( (error) => {
      console.log('erro: ' + error)
    })
}

  return (
    <div className="flex flex-col gap-10 p-10 h-screen">
      <div className="flex items-center justify-between">
        <Titulo
          icone={IconVideo}
          principal="Lista de Aulas"
          segundario="Aqui você encontra todas as aulas disponiveis"
        />

        <FiltrarStatus filtroMudou={filtrarAulas} />
      </div>
      <div>
        <form>
          <input
            className="bg-zinc-900 mr-3 px-4 py-2 rounded-md font-medium outline-none"
            type="text"
            placeholder="Aula"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="bg-zinc-900 mr-3 px-4 py-2 rounded-md font-medium outline-none"
            type="text"
            placeholder="Nome do Curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />
          <input
            className="bg-zinc-900 mr-3 px-4 py-2 rounded-md font-medium outline-none"
            type="number"
            placeholder="Duração do Vídeo"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
          />
          <input
            className="bg-zinc-900 mr-3 px-4 py-2 rounded-md font-medium outline-none"
            type="text"
            placeholder="Status do Vídeo"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button className="bg-green-500 mr-3 px-4 py-2 rounded-md font-medium" onClick={() => Inserir}>Cadastrar Aula</button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <Estatistica
          icone={IconClock}
          valor={Duracao.formatar(duracaoTotal)}
          texto="Duração Total"
          iconeCor="text-green-500" 
        />
      </div>
      <div className="flex flex-col gap-5">
        <ListaAulas aulas={aulas} />
      </div>
    </div>
  );
}
