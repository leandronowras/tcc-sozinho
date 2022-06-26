import FormularioCadastroProfessor from "../../components/FormularioCadastroProfessor";

export default function Login() {
  function cadastrarProfessor(professorDataToCadastro) {
    console.log(professorDataToCadastro)
    // fetch('http://localhost:5000/cadastro', {
    //   method: 'POST',
    //   body: JSON.stringify(userLoginCredentials),
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json"
    //   }
    // })
  }

  return (
    <FormularioCadastroProfessor onSendProfessorCredentialsToCadastro={cadastrarProfessor} />
  )
}