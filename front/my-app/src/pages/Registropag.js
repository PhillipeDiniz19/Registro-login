import { Link } from 'react-router-dom';
import './registro.css'
import  {useState, useEffect, React} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Registro() {

      //Receber os parametros do formulario
      const [nome, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('') 
      const navigate = useNavigate()
      
      //EventoDefault button
          const CadastrarUsuario = (event) => {
          event.preventDefault()
          axios.post('http://localhost:3001/registro', {nome, email, password})
          .then(result => {console.log(result)
          navigate('/login')
          })
          .catch(err => console.log(err))
        }
    
      //Enviar os parametros para o backend

      return (
        
        <div className="App" onSubmit={CadastrarUsuario}>
          
        <form className="formulario">
          
          <div className="login-form">
              <h1>Registro</h1>
              
          </div>
              <label>Nome:<input 
              type='text'
              placeholder='Nome Completo'
              id='nome'
              name = 'nome'
              required 
              value={nome}
              onChange={(event) => setName(event.target.value)}/></label>
    
              <label>E-mail:<input 
              type='email' 
              placeholder='E-mail'  
              id='email' 
              name = 'email' 
              required 
              value={email} onChange={(event) => setEmail(event.target.value)}/></label>
    
              <label>Senha:<input 
              type='password' 
              placeholder='password' 
              id='password' 
              name = 'password' 
              required  
              value={password} onChange={(event) => setPassword(event.target.value)}/></label>
                
                <Link to='./login'>Clique para fazer Login</Link>

              <label><button type='submit'>Registrar</button></label>   
        </form>

       
      
    </div>
      );
    }  
    export default Registro;  
