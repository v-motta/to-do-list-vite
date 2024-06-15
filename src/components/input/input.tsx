import type { InputHTMLAttributes } from "react";
import styles from './input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input {...props} className={styles.input} />
  )
}
