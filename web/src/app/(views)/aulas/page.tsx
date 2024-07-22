'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { IconEdit, IconTrash } from "@tabler/icons-react"

interface Aula {
    id: number;
    nome: string;
    curso: string;
    duracao: string;
    status: string;
}

export default function Aula() {
    const [data, setData] = useState([])
    const url = "http://localhost:8080/api/aula"

    const [id, setId] = useState<Number>(0)
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [duracao, setDuracao] = useState("")
    const [status, setStatus] = useState("")

    const [classBtnInserir, setClassBtnInserir] = useState('')
    const [classBtnAlterar, setClassBtnAlterar] = useState('hidden')

    useEffect(() => {
        axios.get(url + "/todos")
        .then(response => setData(response.data))
    }, [data, setData])

    const Inserir = () => {
        axios.post(url + "/cadastrar", {
            nome,
            curso,
            duracao,
            status
        })
        .then(() => alert("Aula Cadastrada com sucesso !"))
    }

    const Remover = (id: any) => {
        axios.delete(url + `/remover/${id}`)
        .then(() => alert("Aula Removida com sucesso !"))
    }

    const CarregarCampos = (id:any, nome: string, curso: string,  duracao: string, status: string) => {

        setClassBtnInserir('hidden')
        setClassBtnAlterar('')

        setId(id)
        setNome(nome)
        setCurso(curso)
        setDuracao(duracao)
        setStatus(status)
    }

    const Editar = (e: any) => {
        e.preventDefault();

        axios.put(url + '/alterar', {
            id,
            nome,
            curso,
            duracao,
            status
        })
        .then(() => {
            setNome(""), setCurso(""), setDuracao(""), setStatus("")
            alert("Aula Alterada com sucesso!")

            setClassBtnInserir('')
            setClassBtnAlterar('hidden')
        })
    }

    return(
        <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
            <div className="flex flex-col gap-5">
                <h1>Fórmulario de Aulas</h1>
                <form>
                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Nome da Aula"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Nome do Curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                    <input
                        type="number"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Duração da Aula. Obs: Em Minutos"
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Status. publicada ou rascunho ou desativada"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                    
                    <button
                        onClick={() => Inserir}
                        className={`bg-blue-500 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none ${classBtnInserir}`}
                    >
                        Cadastrar Aula
                    </button>

                    <button
                        onClick={Editar}
                        className={`bg-orange-500 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none ${classBtnAlterar}`}
                    >
                        Editar Aula
                    </button>
                </form>

                <table>
                    <thead className="bg-slate-700">
                        <tr>
                            <th>ID</th>
                            <th>Aula</th>
                            <th>Curso</th>
                            <th>Duração</th>
                            <th>Status</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-zinc-900">
                        {
                            data.map((aula: Aula) => (
                                <tr key={aula.id}>
                                    <td>{aula.id}</td>
                                    <td>{aula.nome}</td>
                                    <td>{aula.curso}</td>
                                    <td>{aula.duracao}</td>
                                    <td>{aula.status}</td>
                                    <td className="flex justify-center">
                                        <IconEdit size={35} className="bg-yellow-500 text-white mr-3 px-2 py-1 rounded-md outline-none" onClick={() => CarregarCampos(aula.id, aula.nome, aula.curso, aula.duracao, aula.status)}></IconEdit>
                                        <IconTrash size={35} className="bg-red-500 text-white px-2 py-1 rounded-md outline-none" onClick={() => Remover(aula.id)}></IconTrash>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}