import { Input } from "./components/input/input"
import styles from "./App.module.css"
import { Button } from "./components/button/button"

import { ClipboardList, PlusCircle } from "lucide-react"
import { TaskHeader } from "./components/taskHeader/taskHeader"
import { Header } from "./components/header/header"
import { useState, type FormEvent } from "react"
import { Task, type TaskType } from "./components/task/task"

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [inputValue, setInputValue] = useState('')

  const completedTasksCounter = tasks.reduce((previousValue, task) => {
    if (task.completed) {
      return previousValue + 1
    }

    return previousValue
  }, 0)

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!inputValue) {
      return
    }

    const newTask: TaskType = {
      id: new Date().getTime(),
      title: inputValue,
      completed: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    if (!confirm('Deseja remover esta tarefa?')) {
      return
    }

    setTasks((state) =>
      state.filter((task) => task.id !== id),
    )    
  }

  function handleCompleteTask(id: number) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {...task, completed:!task.completed }
        }

        return task
      }),
    )
  }

  return (
    <section className={styles.app}>

      <Header />

      <div>
        <form onSubmit={handleAddTask} className={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
          <Button type="submit">
            Criar
            <PlusCircle />
          </Button>
        </form>

        <TaskHeader tasksLength={tasks.length} completedTasks={completedTasksCounter} />

        <div className={styles.taskList}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                removeTask={handleRemoveTask}
                completeTask={handleCompleteTask}
              />
            ))
          ) : (
            <div className={styles.emptyList}>
              <ClipboardList size={60} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}

export default App
