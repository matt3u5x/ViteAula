import { useState } from "react";
import "./App.css";

function App() {
  const [contar, setContar] = useState(0);
  const [nome, setNome] = useState();

  const somar = () => {
    setContar(contar + 1);
  };
  return (
    <>
      <input
        type="number"
        onChange={(event) => setContar(parseInt(event.target.value))}
      />
      <input type="text" onChange={(e) => setNome(e.target.value)} />
      <h1>Seu nome é {nome}</h1>

      <h1>Contar {contar}</h1>
      <h1>Contar {contar + 1}</h1>
      <h1>Contar {contar + 2}</h1>
      <h1>Contar {contar + 3}</h1>

      <button onClick={() => somar(contar + 1)}>Somar</button>
      <button onClick={() => setContar(contar - 1)}>Diminuir</button>
      <button onClick={() => setContar(0)}>Zerar</button>
    </>
  );
}

export default App;
