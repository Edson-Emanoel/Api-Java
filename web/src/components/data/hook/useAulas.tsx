import { useEffect, useState } from "react";
// import listaDeAulas from "@/components/data/constants/aulas";
import Aula from "@/components/data/model/Aula";
import axios from "axios";

export default function useAulas() {
    const url = "http://localhost:8080/api/aula/todos";
    const [duracaoTotal, setDuracaoTotal] = useState<number>(0);

    const [listaDeAulas, setListaDeAulas] = useState<Aula[]>([]);

    useEffect(() => {
        axios.get(url)
            .then(response => setListaDeAulas(response.data))
        }, [listaDeAulas, setListaDeAulas])

    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas);

    function filtrarAulas(status: string | null) {
        const aulasFiltradas: Aula[] = listaDeAulas.filter(aula => aula.status === status || !status)
        setAulas(aulasFiltradas)
    }

    useEffect(() => {
        calcularDuracaoTotal(aulas)
    }, [aulas])

    function calcularDuracaoTotal(aulas: Aula[]) {
        const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
        setDuracaoTotal(duracaoTotal);
    }

    return {
        duracaoTotal,
        filtrarAulas,
        listaDeAulas,
        aulas
    }
}