import Image from 'next/image'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <navbar className={styles.navbar}>
          {/* <Image></Image> */}
          <ul>
            <li>
              <a href='/'>Logo</a>
            </li>
            <li className={styles.login}>
              <a href='/'>Login</a>
            </li>
          </ul>
        </navbar>
      </div>

      <div className={styles.main}>
        <div className={styles.main_texts}>
          <div className={styles.marketingPhrase}>
            <span>Bem-vindo à <span style={{color:"purple"}}>Nova Era dos Estudos</span></span>
          </div>
          {/* <Image></Image> */}
          <p>Educa Cripto</p>
          <p>O seu melhor professor</p>
          <div className={styles.register_options}>
            <ul>
              <li>
                <a href='/'>Cadastra-se <br></br>como professor</a>
              </li>
              <li>
                <a href='/'>Cadastra-se <br></br>como aluno</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.main_image}>
          <Image src={'/mobile-picture.png'} width={'266'} height={'545'}></Image>
        </div>
      </div>
    </div>
  )
}
