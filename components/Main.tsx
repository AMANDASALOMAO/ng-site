import Image from 'next/image'
import styles from './../styles/Main.module.scss'

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.data}>
            <h1>NG CASH</h1>
            <button className={styles.user}>E-MAIL ADRESS</button>
            <button className={styles.password}>PASSWORD</button>
            <button className={styles.login}>Log In</button>
            </div></div>
            <a href=''>Forgot your password?</a>

        </div>
    )
}