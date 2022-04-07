import React from "react";
import Button from "../button/button";
import style from "./form.module.scss";

class Form extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Form;
