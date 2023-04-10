import { Link } from "react-router-dom";
import "./sidebar.css";
import  rice from '../../images/avatar.jpg'
import React, { useState, useEffect } from 'react';
import axios from'axios'

const baseURL = 'https://gleaming-erin-blazer.cyclic.app/blogapi/'


export default function Sidebar() {
  let [categories,setCategories] = useState([])
  useEffect(()=>{
    const fetchData= async ()=>{
    const result = await axios(baseURL +'categories')
    setCategories(result.data)
  }
  fetchData().catch((err)=>{
    console.log(err.message)
  }) 
 },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={rice}
          alt="avatar"
        />
        <p>
          Aspring web developer and data analyst. Proficient with Python, Javascript, HTML, and CSS.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {categories.map((category,i)=>
      (
        <li key={i} className="sidebarListItem">
            <Link className="link" to={"/blog?category=" + category._id +"&name=" +category.name}>
              {category.name}
            </Link>
        </li>
      ))} 
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