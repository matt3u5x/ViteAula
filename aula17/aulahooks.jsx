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
