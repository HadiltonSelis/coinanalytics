import styles from './heade.module.css'
import logoimg from '../../assets/logo.png'
import { Link } from 'react-router'

export function Header(){
    return(
        <header className={styles.container}>
            <Link to="/">
                <img src={logoimg} alt='Logo Cripto App' className={styles.logo}/>
            </Link>
        </header>
    )
}