 import styles from './Perfil.module.css'

const Perfil=  ({nomeUsusario})=>{


    return(
        <header className={styles.header} >
        
            <img className={styles.avatar} src={`https://github.com/${nomeUsusario}.png`} />
            <h1  className={styles.name} >{nomeUsusario}</h1>
        </header>
    )
}
export default Perfil