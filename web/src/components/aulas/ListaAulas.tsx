import Aula from "../data/model/Aula";
import LinhaAula from "./LinhaAula";

export interface ListaAulasProps {
  aulas: Aula[]
}

export default function ListaAulas(props: ListaAulasProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        {
          props.aulas.map(function (aula: Aula) {
            console.log(aula.id + ' Nome: ' + aula.nome + ' Curso: ' + aula.curso)
            return <LinhaAula key={aula.id} aula={aula}/>
          })
        }

        {/* {props.aulas === null ?

        listaDeAulas.map(function (aula: Aula) {
          return <LinhaAula key={aula.id} aula={aula}/>
        })

        :

        props.aulas.map(function (aula: Aula) {
          return <LinhaAula key={aula.id} aula={aula}/>
        })} */}
      </div>
    </div> 
  )
}