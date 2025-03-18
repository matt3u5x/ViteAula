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
    // criando estrelas para o background
    const body = document.querySelector('body');

    for (let i = 0; i < 200; i++) {  // Ajustando numero de estrelas 
      const star = document.createElement('div');
      star.classList.add('star');
      // adicionando posições aleatórias para as estrelas 
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      body.appendChild(star);
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

/* App.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: #000; /* Set the background to black for deep space */
  color: #e0e0e0; /* Text color */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* Starfield animation */
  background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 80%), url(''); /* Optional gradient */
}

/* Stars (Using pseudo-elements to create a star field) */
body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png');
  opacity: 0.05;
  pointer-events: none;
}

@keyframes twinklingStars {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.1;
  }
}

/* Randomly distribute star field using CSS generated stars */
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
  animation: twinklingStars 2s infinite ease-in-out;
}

.todo-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(42, 42, 42, 0.8); /* Slightly transparent dark background */
  text-align: center;
  opacity: 0;
  animation: fadeIn 0.6s forwards;
  backdrop-filter: blur(8px); /* Slight blur effect for a modern look */
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
  color: #f5a623; /* Golden color for title */
  animation: slideInFromTop 0.6s ease-out;
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
  animation: slideInFromLeft 0.6s ease-out;
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
  background-color: #333;
  color: #e0e0e0;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #f5a623;
  background-color: #444;
}

button {
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #575757;
  color: white;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #777;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
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
  background-color: #333;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  opacity: 0;
  animation: slideInFromBottom 0.6s ease-out forwards;
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
  background-color: #444;
  color: #888;
}

.complete-btn {
  background-color: #28a745;
  color: white;
  margin-right: 10px;
  transition: transform 0.2s, color 0.2s;
}

.complete-btn:hover {
  transform: scale(1.1);
  color: #1c7430;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  transition: transform 0.2s, color 0.2s;
}

.delete-btn:hover {
  transform: scale(1.1);
  color: #9b2226;
}

/* Create multiple stars in random positions */
.star:nth-child(odd) {
  animation: twinklingStars 1.8s infinite ease-in-out;
}

.star:nth-child(even) {
  animation: twinklingStars 2.4s infinite ease-in-out;
}



