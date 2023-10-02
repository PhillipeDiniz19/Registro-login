import './login.css'
import  {useState, React} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    //receber as informações dos inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const eventdefault = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/login', {email, password})
          .then(result => {
          if(result.data === "Sucesso") {
              navigate('/homepage')
          }else if(result.data === "Conta não encontrada"){
             alert("Conta não encontrada")   
          }
          console.log(result)
          
          })
          .catch(err => console.log(err))
    }
    return(  
        <div onSubmit={eventdefault}>
            <form className="formulario-login">
          <div className="login-form">
              <h1>Login</h1>
          </div>
              <label>E-mail:<input 
              type='email' 
              placeholder='E-mail'  
              id='email' 
              name = 'email' 
              required 
              value={email} onChange={(event) => setEmail(event.target.value) }/></label>
    
              <label>Senha:<input 
              type='password' 
              placeholder='password' 
              id='password' 
              name = 'password' 
              required  
              value={password} onChange={(event) => setPassword(event.target.value) }/></label>

                <Link to='/'>Clique para fazer Registro</Link> 

              <label><button type='submit'>Logar</button></label>        
        </form>
        </div>
    )
}

export default Login