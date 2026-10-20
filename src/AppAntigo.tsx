import { useState } from 'react';
import './App.css';

export function App() {
  // 1. Caixinha que guarda o texto que você digita no input
  const [textoDigitado, setTextoDigitado] = useState("");

  // 2. Caixinha que guarda a lista de todas as tarefas cadastradas
  const [listaTarefas, setListaTarefas] = useState<string[]>([]);

  // 3. Função que pega o texto digitado e joga para dentro da lista
  function adicionarTarefa() {
    if (textoDigitado.trim() === "") return; // Se o input estiver vazio, não faz nada
    setListaTarefas([...listaTarefas, textoDigitado]); // Adiciona na lista
    setTextoDigitado(""); // Limpa o campo de digitação
  }
  
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Meu Primeiro Teste Passo a Passo</h1>

      {/* O campo de digitação e o botão moravam aqui dentro */}
      <input 
        type="text" 
        placeholder="Digite uma tarefa..." 
        value={textoDigitado}
        onChange={(e) => setTextoDigitado(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />

      <button onClick={adicionarTarefa} style={{ marginLeft: "10px", padding: "10px 20px", cursor: "pointer" }}>
        Adicionar
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Digitando agora: <strong>{textoDigitado}</strong>
      </p>

      {/* Listando as tarefas cadastradas na tela */}
      <h2>Minha Lista:</h2>
      <ul>
        {listaTarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;