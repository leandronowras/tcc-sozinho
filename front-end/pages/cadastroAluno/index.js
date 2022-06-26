import FormularioCadastroAluno from "../../components/FormularioCadastroAluno";

export default function Login() {
  function cadastrarAluno(alunoDataToCadastro) {
    console.log(alunoDataToCadastro)
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
    <FormularioCadastroAluno onSendAlunoCredentialsToCadastro={cadastrarAluno} />
  )
}