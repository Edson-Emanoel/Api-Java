'use client'

import { IconEdit, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Endereco {
    id: number;
    rua: string;
    logradouro: string;
    bairro: string;
    complemento: string;
}

export default function Endereco() {
    const url = "http://localhost:8080/api/endereco"
    const [data, setData] = useState([]);

    const [id, setId] = useState(0)
    const [rua, setRua] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [complemento, setComplemento] = useState("")

    const [classBtnInserir, setClassBtnInserir] = useState('')
    const [classBtnAlterar, setClassBtnAlterar] = useState('hidden')

    useEffect(() => {
        axios.get(url + "/todos")
        .then(response => setData(response.data))
    }, [data, setData])

    const Inserir = () => {
        axios.post(url + "/cadastrar", {
            rua,
            logradouro,
            bairro,
            complemento
        })
        .then(() => alert("Endereco Cadastrado com sucesso!"))
    }

    const Remover = (id: any) => {
        axios.delete(url + `/remover/${id}`)
        .then(()=> alert("Endereço removido com sucesso!"))
    }

    const CarregarCampos = (id: any, rua: string, bairro: string, logradouro: string, complemento: string) => {
        setClassBtnInserir('hidden')
        setClassBtnAlterar('')

        setId(id)
        setRua(rua)
        setBairro(bairro)
        setLogradouro(logradouro)
        setComplemento(complemento)
    }

    const Editar = (e: any) => {
        e.preventDefault();

        axios.put(url + "/alterar", {
            id,
            rua,
            bairro,
            logradouro,
            complemento
        })
        .then(() => {
            setId(0)
            setRua("")
            setRua("")
            setBairro("")
            setLogradouro("")
            setComplemento("")
            
            setClassBtnInserir('')
            setClassBtnAlterar('hidden')
        })
    }

    return (
        <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
            <div className="flex flex-col gap-5">
                <h1>Fórmulario de Endereço</h1>
                <form>

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Logradouro"
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}
                    />

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />

                    <button
                        onClick={Inserir}
                        className={`bg-blue-500 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none ${classBtnInserir}`}
                    >
                        Cadastrar Endereço
                    </button>
                    
                    <button
                        onClick={Editar}
                        className={`bg-orange-500 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none ${classBtnAlterar}`}
                    >
                        Editar Endereço
                    </button>
                </form>
                
                <table>
                    <thead className="bg-slate-700">
                        <tr>
                            <th>ID</th>
                            <th>Rua</th>
                            <th>Logradouro</th>
                            <th>Bairro</th>
                            <th>Complemento</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-zinc-900">
                        {
                            data.map((endereco: Endereco) => (
                                <tr key={endereco.id}>
                                    <td>{endereco.id}</td>
                                    <td>{endereco.rua}</td>
                                    <td>{endereco.logradouro}</td>
                                    <td>{endereco.bairro}</td>
                                    <td>{endereco.complemento}</td>
                                    <td className="flex justify-center">
                                        <IconEdit size={35} className="bg-yellow-500 text-white mr-3 px-2 py-1 rounded-md outline-none" onClick={() => CarregarCampos(endereco.id, endereco.rua, endereco.logradouro, endereco.bairro, endereco.complemento )}></IconEdit>
                                        <IconTrash size={35} className="bg-red-500 text-white mr-3 px-2 py-1 rounded-md outline-none" onClick={() => Remover(endereco.id)}></IconTrash>
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