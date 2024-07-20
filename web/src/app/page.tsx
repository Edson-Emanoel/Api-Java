'use client'

import FiltrarStatus from "@/components/aulas/FiltrarStatus";
import ListaAulas from "@/components/aulas/ListaAulas";

import Titulo from "@/components/shared/Titulo";
import { IconClock, IconVideo } from "@tabler/icons-react";

import Estatistica from "@/components/shared/Estatistica";
import Duracao from "@/components/data/utils/Duracao";
import useAulas from "@/components/data/hook/useAulas";
import Cadastrar from "./cadastrar/page";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const { aulas, duracaoTotal, filtrarAulas } = useAulas()

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
    <div className="flex flex-col gap-10 p-10 h-screen">
      
      <div className="flex items-center justify-between">
        <Titulo
          icone={IconVideo}
          principal="Lista de Aulas"
          segundario="Aqui você encontra todas as aulas disponiveis"
        />
        <div className="flex items-center justify-center gap-3">
          <FiltrarStatus filtroMudou={filtrarAulas} />
          <button type="button" className="btn btn-primary w-28" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Inserir
          </button>
        </div>
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
  
    {/* inicio */}

    <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastrar Novo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Cadastrar />
            </div>
          </div>
        </div>
      </div>

      {/* fim */}

    </div>
  );
}
