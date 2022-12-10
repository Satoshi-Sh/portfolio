import "./login.css";
import './login.js'

const baseURL = 'http://localhost:5000/auth/'

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault()
    const username=  e.target.querySelector('#username').value
    const password= e.target.querySelector('#password').value
    fetch(`${baseURL}/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            username,
            password
        })
        }).then(res =>res.json())
        .then(data=>{
            console.log(data)
            window.localStorage.setItem("token",data['token'])
            window.location.href='/blog'
        }).catch(err=>{throw err})
    }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" id ='username' placeholder="Enter your username..." />
        <label>Password</label>
        <input className="loginInput" id='password' type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}