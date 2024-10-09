import { useState } from 'react'
import './styles.css'

function ToDoList() {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState("")

  function addTask(form)
  {
    form.preventDefault();
    if(!newTask)
    {
      return
    }
    setList([...list, {text: newTask, isCompleted: false}])
    setNewTask("")
    document.getElementById("new-task-input").focus()
  }

  return (
    <>
      <h2>Lista de Tarefas</h2>
      <form action="" onSubmit={addTask}>
        <input
          id="new-task-input"
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={(e) => {setNewTask(e.target.value)}}
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="task-list">
        {
          list.length < 1 ? "Não há tarefas" :
          (
            list.map((task, index) => (
              <div
                key={index}
                className={task.isCompleted ? "Tarefa completa" : "Tarefa"}
              >
                {task.text}
              </div>
            ))
          )
        }
      </div>
    </>
  )
}

export default ToDoList
