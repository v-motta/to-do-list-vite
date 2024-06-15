import styles from './taskHeader.module.css'

export interface TaskHeaderProps {
  tasksLength: number
  completedTasks: number
}

export function TaskHeader({ tasksLength, completedTasks }: TaskHeaderProps) {
  return (
    <div className={styles.tasks}>
      <div>
        <p className={styles.created}>
          Tarefas criadas
        </p>
        <span>{tasksLength}</span>
      </div>
      
      <div>
        <p className={styles.completed}>
          Concluídas
        </p>
        <span>{tasksLength === 0 ? tasksLength : `${completedTasks} de ${tasksLength}`}</span>
      </div>
    </div>
  )
}
