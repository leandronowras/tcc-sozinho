import FormularioCadastroAluno from "../../components/FormularioCadastroAluno";

export default function Login() {
  function cadastrarAluno(alunoDataToCadastro) {
    console.log(alunoDataToCadastro)
    fetch('http://localhost:5000/cadastroAluno')
    //   // method: 'POST',
    //   // body: JSON.stringify(alunoDataToCadastro),
    //   // headers: {
    //   //   "Access-Control-Allow-Origin": "*",
    //   //   "Content-Type": "application/json"
    //   // }
    // })
    .then(response => response.json())
    .then(data => console.log(data))

   
  }

  return (
    <FormularioCadastroAluno onSendAlunoCredentialsToCadastro={cadastrarAluno} />
  )
}