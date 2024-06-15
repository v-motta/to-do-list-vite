import logo from '../../assets/rocket.png'
import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.divLogo}>
        <img src={logo} alt="" />
        <h1 className={styles.logo}>to<span>do</span></h1>
      </div>
  )
}
