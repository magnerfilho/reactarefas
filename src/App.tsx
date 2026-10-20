import { useState } from 'react';
import { TarefaInput } from './components/TarefaInput';

// Definindo o formato de uma tarefa com TypeScript
type Tarefa = {
  texto: string;
  concluida: boolean;
};

export function App() {
  // Caixinha que guarda a lista de tarefas (agora usando o nosso type Tarefa)
  const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);

  // Função que recebe a nova tarefa vinda do componente TarefaInput e a adiciona na lista
  function adicionarTarefaNaLista(novaTarefaTexto: string) {
    // Criamos o objeto completo no formato que o nosso type Tarefa exige
    const tarefaCompleta: Tarefa = {
      texto: novaTarefaTexto,
      concluida: false, // Toda tarefa nova começa como não concluída
    };

    setListaTarefas([...listaTarefas, tarefaCompleta]);
  }

  function removerTarefa(indexParaRemover: number) {
    setListaTarefas(listaTarefas.filter((_, index) => index !== indexParaRemover));
  }

  function alternarConclusaoTarefa(indexParaAlternar: number) {
    const novaLista = listaTarefas.map((tarefa, index) => {
      if (index === indexParaAlternar) {
        // Retorna um novo objeto com o texto igual, mas inverte o valor de 'concluida'
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });

    setListaTarefas(novaLista);
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Agendador de Tarefas</h1>

      {/* Usando o nosso componente separado */}
      <TarefaInput onAdicionarTarefa={adicionarTarefaNaLista} />

      {/* Contador de tarefas */}
      <p style={{ color: "#666", marginBottom: "15px" }}>
        Total de tarefas: <strong>{listaTarefas.length}</strong>
      </p>

      {/* Listando as tarefas cadastradas na tela */}
      <h2>Minha Lista:</h2>
      <ul>
        {listaTarefas.map((tarefa, index) => (
          <li key={index} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            {/* O span agora muda o estilo baseado na propriedade 'concluida' */}
            <span
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
                color: tarefa.concluida ? "#888" : "#bdbcbc",
                cursor: "pointer",
                flex: 1
              }}
              onClick={() => alternarConclusaoTarefa(index)}
            >
              {tarefa.texto}
            </span>

            {/* Botão de concluir */}
            <button
              onClick={() => alternarConclusaoTarefa(index)}
              style={{ marginLeft: "10px", padding: "4px 8px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}
            >
              {tarefa.concluida ? "Desfazer" : "Concluir"}
            </button>

            {/* Botão de excluir */}
            <button
              onClick={() => removerTarefa(index)}
              style={{ marginLeft: "5px", padding: "4px 8px", cursor: "pointer", backgroundColor: "#ff4d4d", color: "white", border: "none", borderRadius: "4px" }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;