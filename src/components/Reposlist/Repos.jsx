import { useEffect, useState } from "react"
import styles from './Repos.module.css'

const ReposList = ({nomeUsuario}) => {

    const [repos, setRepos] = useState([]);
    useEffect(() => {

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson);

            }) 

        
          
    }, [nomeUsuario]);
   
    return (
        <div className={styles.container}>
            <ul className={styles.list}>

                {repos.map(({ id, name, language, html_url }) => (



                    <li className={styles.listItem} key={id}>
                          <div className={styles.itemName}>
                          Nome: {name}
                          </div>
                       
                        <div className={styles.itemLanguage}> <span> Linguagem:  {language}</span></div>
                        <div className={styles.itemName}>
                            <a className={styles.itemLink} href={html_url} >Ver no Github</a>
                        </div>

                    </li>
                ))}   



            </ul>
        </div>


    )
  

}
export default ReposList