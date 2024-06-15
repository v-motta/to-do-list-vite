import { Circle, CircleCheck, Trash2 } from 'lucide-react'
import styles from './task.module.css'

export interface TaskType {
  id: number
  title: string
  completed: boolean
}

interface TaskTypeProps {
  task: TaskType
  removeTask: (id: number) => void
  completeTask: (id: number) => void
}

export function Task({ task, removeTask, completeTask }: TaskTypeProps) {
  function handleRemoveTask() {
    removeTask(task.id)
  }

  function handleCompleteTask() {
    completeTask(task.id)
  }

  return (
    <div className={styles.task}>
      
      <div className={styles.check} onClick={handleCompleteTask}>
        {task.completed ? (
          <CircleCheck size={22} />
        ) : (
          <Circle size={22} />
        )}
      </div>
      <p className={task.completed ? styles.completed : ''}>{task.title}</p>

      <button onClick={handleRemoveTask}>
        <Trash2 size={30} />
      </button>
    </div>
  )
}
