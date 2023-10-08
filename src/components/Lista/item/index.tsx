import { Tarefas } from "../../model/tarefa.model";
import style from "./Item.module.scss";
interface Props extends Tarefas {
    selecionarTarefa: (tarefaSelecionada: Tarefas) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionarTarefa }: Props) {
    return (
        <li key={id}
            className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`}
            onClick={() => selecionarTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}>
            <h3>{tarefa}</h3>
            <span>
                {tempo}
            </span>
            {completado && <span className={`${style.concluido}`} aria-label="tarefa completada"> </span>}
        </li>
    )
}