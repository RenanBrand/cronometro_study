import React, { useState } from "react";
import style from "./Lista.module.scss";
import Item from "./item";
import { Tarefas } from "../model/tarefa.model";

interface Props extends Tarefas {
    tarefas: Tarefas[],
    selecionarTarefa: (tarefaSelecionada: Tarefas) => void
}
function Lista({ tarefas, selecionarTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default Lista;
