import FormularioCadastroProfessor from "../../components/FormularioCadastroProfessor";

export default function Login() {
  function cadastrarProfessor(professorDataToCadastro) {
    console.log(professorDataToCadastro)
    fetch('http://localhost:5000/cadastroProfessor')
  }

  return (
    <FormularioCadastroProfessor onSendProfessorCredentialsToCadastro={cadastrarProfessor} />
  )
}