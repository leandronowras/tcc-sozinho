import { useRef } from "react"
import styles from "./styles.module.css";

export default function Formulario(props) {
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        const inputEmail = emailInputRef.current.value
        const passwordInput = passwordInputRef.current.value

        const userLoginData = {
            nome: inputEmail,
            localizacao: passwordInput,
        }

        props.onLogin(userLoginData)
    }

    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <div>
                <div>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.textInput} type='text' placeholder="examplo@gmail.com" required id='email' ref={emailInputRef}/>
                </div> 
                <div>
                    <label className={styles.label} htmlFor="senha">Senha</label>
                    <input className={styles.textInput} type='text' placeholder="" required id='senha' ref={passwordInputRef}/>
                </div> 
                <div>
                    <button className={styles.btn}>Login</button>
                </div>
            </div>
        </form>
    )
}