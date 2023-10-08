import React, { useState } from 'react';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from "./App.module.scss";
import Cronometro from '../Cronometro';
import { Tarefas } from '../model/tarefa.model';

function App() {
  const [tarefas, setTarefas] = useState<Tarefas[]>([])
  const [selecionado, setselecionado] = useState<Tarefas>();
  function selecionarTarefa(tarefaSelecionada: Tarefas) {
    setselecionado(tarefaSelecionada);
    setTarefas(tarefaAnt =>
      tarefaAnt.map(
        t => ({
          ...t,
          selecionado: t.id === tarefaSelecionada.id ? true : false
        })
      ))
  }
  function finalizarTarefa() {
    if (selecionado) {
      setselecionado(undefined);
      setTarefas(tarefaAnt =>
        tarefaAnt.map(
          tarefa => {
            if (tarefa.id === selecionado.id) {
              return {
                ...tarefa,
                selecionado: false,
                completado: true
              }
            }
            return tarefa
          }
        ))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa} />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
