import FormularioLogin from "../../components/FormularioLogin";

export default function Login() {
  function loginUser(userLoginCredentials) {
    console.log(userLoginCredentials)
    fetch('http://localhost:5000/login', {
      // method: 'POST',
      // body: JSON.stringify(userLoginCredentials),
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json"
      // }
    }).then(result => console.log('resulta de logar', result))
  }

  return (
    <FormularioLogin onLogin={loginUser} />
  )
}