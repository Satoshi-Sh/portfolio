import { Link } from "react-router-dom";
import "./sidebar.css";
import  rice from '../../images/avatar.jpg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={rice}
          alt="avatar"
        />
        <p>
          Aspring webdeveloper and data analyst. Proficient with Python, Javascript, HTML, and CSS.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a className="link">
              Life
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link">
              Music
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link">
              Sport
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link">
              Style
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link">
              Tech
            </a>
          </li>
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
        <a href="https://github.com/Satoshi-Sh/" target='_blank' rel="noreferrer">
         <i className="sidebarIcon fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/satoshi-89bb58a8/" target='_blank' rel="noreferrer">
          <i className="sidebarIcon fab fa-linkedin"></i>
        </a>
        <a href="https://www.kaggle.com/satoshiss" target='_blank' rel="noreferrer">
           <i className="sidebarIcon fab fa-kaggle"></i>
        </a> 
        </div>
      </div>
    </div>
  );
}