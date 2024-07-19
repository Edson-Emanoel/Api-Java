import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { IconChevronDown, IconCircleFilled, IconFilter } from "@tabler/icons-react"
import AulaStatus from "./AulaStatus"

interface FiltrarStatusProps {
    filtroMudou?: (status: string | null) => void;
}

export default function FiltrarStatus(props: FiltrarStatusProps){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-zinc-900 outline-none rounded-md">
                <div className="flex items-center gap-2 py-2 px-4">
                    <IconFilter/>
                    <span>Filtrar Por:</span>
                    <IconChevronDown className="text-zinc-400" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => props.filtroMudou?.(null)}>
                    <div className="flex items-center text-zinc-400 gap-2">
                        <IconCircleFilled size={15} />
                        <span>Nenhum</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <AulaStatus valor="publicada" semEstilo={true} onClick={props.filtroMudou} />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <AulaStatus valor="rascunho" semEstilo={true} onClick={props.filtroMudou} />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <AulaStatus valor="desativada" semEstilo={true} onClick={props.filtroMudou} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}