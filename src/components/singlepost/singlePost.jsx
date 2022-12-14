import { Link,useLocation,useNavigate } from "react-router-dom";
import "./singlepost.css";
import woods from '../../images/woods.jpg'
import React, { useState, useEffect } from 'react';
import axios from'axios'



const baseURL = 'https://gleaming-erin-blazer.cyclic.app/blogapi'

export default function SinglePost() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    let buttons;
    let postId = useLocation()['pathname'].split('/').at(-1)
    function deletePost(){
      fetch(`${baseURL}/delete/${postId}`,
      {method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
        token
       })
     }).then(res => res.json()).then(message=>{
         console.log(message)
         navigate('/blog')
       }).catch(err=>{throw err})  

      
    }

    if (token){
      buttons = <div className="singlePostEdit">
      <Link  to='./update'>  
      <i className="singlePostIcon far fa-edit"></i>
      </Link>
      <i className="singlePostIcon far fa-trash-alt" onClick={deletePost}></i>
    </div>
    }
    // get id from url
    const id= useLocation()['pathname'].split('/').at(-1)
    let [post,setPost] = useState([])
  useEffect(()=>{
    const fetchData= async ()=>{
    const result = await axios(`${baseURL}/${id}`)
    setPost(result.data)
    console.log(post.text.split('\n'))
    
  }
  fetchData().catch((err)=>{
    console.log(err.message)
  }) 
 },[])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.imageURL}
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          {buttons}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:{post.user?.username}
           
          </span>
          <span>{post.created_formatted}</span>
        </div>
         {post.text?.split('\n').map((p,i)=>
          {
            return(
            <p key={i} className="singlePostDesc">{p}</p>)
          })}
      </div>
    </div>
  );
}