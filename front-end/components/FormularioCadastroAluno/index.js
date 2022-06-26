import { useRef } from "react"
import styles from "./styles.module.css";

export default function Formulario(props) {
    const nomeInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef() 


    function submitHandler(event) {
        event.preventDefault()
        const inputNome = nomeInputRef.current.value
        const inputEmail = emailInputRef.current.value
        const inputPassword = passwordInputRef.current.value

        const alunoCadastroData = {
            nome: inputNome,
            email: inputEmail,
            password: inputPassword,
        }

        props.onSendAlunoCredentialsToCadastro(alunoCadastroData)
    }

    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <div>
                <div>
                    <label className={styles.label} htmlFor="nome">Nome</label>
                    <input className={styles.textInput} type='text' placeholder="João da Silva" required id='nome' ref={nomeInputRef}/>
                </div> 
                <div>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.textInput} type='text' placeholder="example@gmail.com" required id='email' ref={emailInputRef}/>
                </div> 
                <div>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.textInput} type='text' placeholder="" required id='password' ref={passwordInputRef}/>
                </div> 
              
                <div>
                    <button className={styles.btn}>Cadastrar Professor</button>
                </div>
            </div>
        </form>
    )
}