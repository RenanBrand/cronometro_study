import { Tarefas } from "./tarefa.model";

export interface Props extends Tarefas {
    tarefas: Tarefas[] ,
    selecionarTarefa: (tarefaSelecionada: Tarefas) => void
}