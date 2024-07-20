'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function Aluno(){
    const [data, setData] = useState([])
    const url = "http://localhost:8080/api/alunos"

    const [nome, setNome] = useState("")
    const [serie, setSerie] = useState("")
    const [sexo, setSexo] = useState("")

    useEffect(() => {
        axios.get(url + "/todos")
        .then(response => setData(response.data))
    }, [data, setData])

    const Inserir = () => {

        if(!nome) { 
            alert("Precisa preencher o campo de Nome!")
            return false;
        } else if(!serie) { 
            alert("Precisa preencher o campo de Serie!")
            return false;
        }else if(!sexo) { 
            alert("Precisa preencher o campo de Sexo!")
            return false;
        }

        axios.post(url + "/cadastrar", {
            nome,
            serie,
            sexo
        })
        .then( () => {
            alert("Aluno cadastrado com sucesso")
            setNome(''), setSerie(''), setSexo('')
        })
    }

    return(
        <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
            <div>
                <h1 className="mt-5 mb-4">Fórmulario de Alunos</h1>
                <form onSubmit={Inserir}>
                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Nome do Aluno"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-nonew-96"
                        placeholder="Serie"
                        value={serie}
                        onChange={(e) => setSerie(e.target.value)}
                    />

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-24"
                        placeholder="Sexo"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                    />

                    <button className="px-4 py-2 rounded-md bg-blue-400 text-white" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>

            <div className="w-screen flex justify-center">
                <table className="w-96 table">
                    <thead className="bg-zinc-800">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Serie</th>
                            <th>Sexo</th>
                        </tr>
                    </thead>
                    <tbody className="bg-zinc-950">
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.serie}</td>
                                <td>{item.sexo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}