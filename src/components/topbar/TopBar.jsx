import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const token = localStorage.getItem('token')
   
  function removeToken(e){
    e.preventDefault()
    localStorage.removeItem('token')
    window.location.href='/blog'

  }

  let log;
  let write
  if(token){
     log =  <Link className='link' to='/logout'>
               <li className="topListItem" onClick={removeToken}>Logout</li>
            </Link>
  }
  else {
    log =  <Link className='link' to='/login'>
               <li className="topListItem">Login</li>
            </Link>
  }
  token? write = <Link className='link' to='/write'>
  <li className='topListItem'>Write</li>
</Link>:write=''
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://github.com/Satoshi-Sh/" target='_blank' rel="noreferrer">
         <i className="topIcon fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/satoshi-89bb58a8/" target='_blank' rel="noreferrer">
          <i className="topIcon fab fa-linkedin"></i>
        </a>
        <a href="https://www.kaggle.com/satoshiss" target='_blank' rel="noreferrer">
           <i className="topIcon fab fa-kaggle"></i>
        </a>       
        
      </div>
      <div className="topCenter">
        <ul className="topList">
            <Link className="link" to='/'>
               <li className='topListItem'>Home</li>
            </Link>
            <Link className="link" to='/blog'>
               <li className='topListItem'>Blog</li>
            </Link>
            <Link className="link" to='/about'>
               <li className='topListItem'>About</li>
            </Link>
            <Link className='link' to='projects'>
                <li className='topListItem'>Projects</li>
            </Link>
            {write}
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
            {log}
        </ul>
        {/* {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )} */}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}