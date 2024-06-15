import type { ButtonHTMLAttributes } from "react";
import styles from './button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={styles.button} />
  )
}
