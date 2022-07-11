import { Itarefa } from "../../types/tarefa";
import { Item } from "./item/item";
import style from "./list.module.scss";

function List({ tarefas }: { tarefas: Itarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
