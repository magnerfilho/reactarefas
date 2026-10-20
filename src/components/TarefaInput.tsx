import { useState } from 'react';

interface TarefaInputProps {
  onAdicionarTarefa: (tarefa: string) => void;
}

export function TarefaInput({ onAdicionarTarefa }: TarefaInputProps) {
  const [textoDigitado, setTextoDigitado] = useState("");

  function lidarComClique() {
    if (textoDigitado.trim() === "") return;
    onAdicionarTarefa(textoDigitado);
    setTextoDigitado("");
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <input 
        type="text" 
        placeholder="Digite uma tarefa..." 
        value={textoDigitado}
        onChange={(e) => setTextoDigitado(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />

      <button onClick={lidarComClique} style={{ marginLeft: "10px", padding: "10px 20px", cursor: "pointer" }}>
        Adicionar
      </button>

      <p style={{ marginTop: "10px", fontSize: "16px" }}>
        Digitando agora: <strong>{textoDigitado}</strong>
      </p>
    </div>
  );
}