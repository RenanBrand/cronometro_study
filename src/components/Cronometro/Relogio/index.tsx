import { Tarefas } from '../../model/tarefa.model';
import style from './Relogio.module.scss';
interface Props {
    tempo: number | undefined
}
export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutosDezena,minutosUnidade] = minutos.toString().padStart(2,"0");
    const [segundoDezena,segundoUnidade] = segundos.toString().padStart(2,"0");
    return (
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>

    )
}
