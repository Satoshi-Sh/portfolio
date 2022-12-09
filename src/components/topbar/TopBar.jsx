import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
 
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
            <li className='topListItem'>Write</li>
          {/* <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li> */}
          {/* <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
            <li className="topListItem">Login</li>
            <li className="topListItem">Register</li>
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