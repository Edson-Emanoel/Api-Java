import { ElementType } from "react";

export interface TituloProps {
    principal: string;
    segundario: string;
    icone: ElementType;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex ga-4">
        <props.icone size={65} stroke={1} />
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{props.principal}</h1>
            <h2 className="text-sm text-zinc-400">{props.principal}</h2>
        </div>
    </div>
  );
}