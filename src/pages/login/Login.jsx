import "./login.css";


const baseURL = 'https://gleaming-erin-blazer.cyclic.app/auth/'

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault()
    let username=  e.target.querySelector('#username')
    let password= e.target.querySelector('#password')
    fetch(`${baseURL}login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            username:username.value,
            password:password.value
        })
        }).then(res =>res.json())
        .then(data=>{
            if(data['token']){
            window.localStorage.setItem("token",data['token'])
            window.location.href='/blog'
            }
            else{
            let message = document.querySelector('.message')
            message.style.display='block'
            username.value=''
            password.value=''
            }
            
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
      <p className='message' hidden>Failed to login.</p>
    </div>
  );
}