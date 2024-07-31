'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { IconEdit, IconTrash } from "@tabler/icons-react"

export default function Produto() {
    const url = "http://localhost:8080/api/produto"
    const [data, setData] = useState([])

    const [id, setId] = useState<Number>()
    const [nome, setNome] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [preco, setPreco] = useState<Number>(0)

    const [classBtnInserir, setClassBtnInserir] = useState('')
    const [classBtnAlterar, setClassBtnAlterar] = useState('hidden')

    interface Produto {
        id: number;
        nome: string;
        quantidade: string;
        preco: number;
        dataCadastro: number;
    }

    useEffect(() => {
        axios.get(url + "/todos")
        .then((response) => setData(response.data))
    }, [data, setData])

    const Inserir = () => {
        axios.post(url + "/cadastrar", {
            nome,
            quantidade,
            preco
        })
        .then(() => alert("Produto Cadastrado com sucesso !"))
    }

    const Remover = (id: any) => {
        axios.delete(url + `/remover/${id}`)
        .then(() => alert("Produto Deletado com sucesso!"))
    }

    const CarregarCampos = (id: any, nome: string, quantidade: string, preco: number) => {
        
        setClassBtnInserir("hidden")
        setClassBtnAlterar("")

        setId(id)
        setNome(nome)
        setQuantidade(quantidade)
        setPreco(preco)
    }

    const Editar = () => {
        axios.put(url + "/alterar", {
            id,
            nome,
            quantidade,
            preco
        })
        .then(() => alert("Produto Editado com sucesso!"))
    }

    return(
        <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
            <div className="flex flex-col gap-5">
                <h1>Fórmulario de Produtos</h1>
                
                <form>
                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Nome do Produto"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="text"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-24"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />

                    <input
                        type="number"
                        className="bg-zinc-900 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none w-96"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(Number(e.target.value))}
                    />

                    <button
                        onClick={Inserir}
                        className={`bg-blue-500 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none ${classBtnInserir}`}
                    >
                        Cadastrar Produto
                    </button>
                    
                    <button
                        onClick={Editar}
                        className={`bg-orange-500 text-white mr-3 px-4 py-2 rounded-md font-medium outline-none ${classBtnAlterar}`}
                    >
                        Editar Produto
                    </button>
                </form>
                
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Data Cadastro</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((produto: Produto) => (
                                <tr>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.dataCadastro}</td>
                                    <td className="flex justify-center">
                                        <IconEdit size={35}  onClick={() => CarregarCampos(produto.id, produto.nome, produto.quantidade, produto.preco)} className="bg-yellow-500 text-white mr-3 px-2 py-1 rounded-md outline-none" />
                                        <IconTrash size={35} onClick={() => Remover(produto.id)} className="bg-red-500 text-white mr-3 px-2 py-1 rounded-md outline-none"  />
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