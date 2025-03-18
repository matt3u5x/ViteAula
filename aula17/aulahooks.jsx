import { useState } from 'react'
import './App.css'

function App() {

  /* 
    -Criar uma função para adicionar tarefa
    -Criar uma função para remover tarefa 
    -Criar uma função para marcar como resolvida 
  
  */

    const [nomeTarefa, setNomeTarefa] = useState ('')
    const [listaTarefas, setListaTarefas] = useState ([])

    //spread
    // ... vai percorrer a listaTarefas e recriar a lista com as tarefas existentes 
    const adicionarTarefa = () => {
        setListaTarefas([...listaTarefas, {id: new Date(), nome: nomeTarefa, status: false}])

        setNomeTarefa ('')
    }


  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <div className="input-container">
        <input
          type="text"
          value={nomeTarefa}
          placeholder="Digite uma tarefa"
          onChange={(event)=> setNomeTarefa (event.target.value)}
        />
        <button onClick = {adicionarTarefa}>Adicionar</button>
      </div>

      <ul>

         { listaTarefas.map( (tarefa) => (


        <li key={tarefa.id}>
          {tarefa.nome}
          <div>
            <button className="complete-btn" >✔</button>
            <button className="delete-btn" >❌</button>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App



//app.css
/* App.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #121212; /* Fundo escuro */
  color: #e0e0e0; /* Texto claro */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.todo-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #2a2a2a; /* Cor de fundo escuro para o container */
  text-align: center;
  opacity: 0;
  animation: fadeIn 0.6s forwards; /* Animação de fade-in */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #f5a623; /* Cor dourada suave para o título */
  animation: slideInFromTop 0.6s ease-out; /* Animação de slide para o título */
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  animation: slideInFromLeft 0.6s ease-out; /* Animação de slide para o input */
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

input {
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333; /* Fundo mais escuro para o input */
  color: #e0e0e0; /* Texto claro */
  transition: all 0.3s ease;
}

input:focus {
  border-color: #f5a623; /* Destaque dourado no foco */
  background-color: #444; /* Fundo mais claro no foco */
}

button {
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #575757; /* Botão escuro */
  color: white;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #777; /* Cor mais clara ao passar o mouse */
  transform: scale(1.05); /* Aumenta o botão ao passar o mouse */
}

button:active {
  transform: scale(0.95); /* Efeito de redução ao clicar */
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 8px;
  background-color: #333; /* Fundo escuro para os itens */
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  opacity: 0;
  animation: slideInFromBottom 0.6s ease-out forwards; /* Animação para os itens da lista */
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

li.completed {
  text-decoration: line-through;
  background-color: #444; /* Fundo mais escuro para tarefas completadas */
  color: #888; /* Cor mais suave para texto completado */
}

.complete-btn {
  background-color: #28a745; /* Verde para o botão de completar */
  color: white;
  margin-right: 10px;
  transition: transform 0.2s, color 0.2s;
}

.complete-btn:hover {
  transform: scale(1.1); /* Efeito de aumento no hover */
  color: #1c7430; /* Verde mais escuro no hover */
}

.delete-btn {
  background-color: #dc3545; /* Vermelho para o botão de deletar */
  color: white;
  transition: transform 0.2s, color 0.2s;
}

.delete-btn:hover {
  transform: scale(1.1); /* Efeito de aumento no hover */
  color: #9b2226; /* Vermelho mais escuro no hover */
}

