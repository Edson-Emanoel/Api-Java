import { useEffect, useState } from "react";
import listaDeAulas from "@/components/data/constants/aulas";
import Aula from "@/components/data/model/Aula";

export default function useAulas() {
    const [duracaoTotal, setDuracaoTotal] = useState<number>(0);
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas);

    function filtrarAulas(status: string | null) {
        const aulasFiltradas: Aula[] = listaDeAulas.filter(
        aula => aula.status === status || !status
        )
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
        aulas
    }
}