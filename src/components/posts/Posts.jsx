import Post from "../post/Post";
import "./posts.css";
import  rice from '../../images/avatar.jpg'
import  woods from '../../images/woods.jpg'
import React, { useState, useEffect } from 'react';
import axios from'axios'

const baseURL = 'http://localhost:5000/blogapi'

export default function Posts() {
    let [postsList,setpostList] = useState([])
  useEffect(()=>{
    const fetchData= async ()=>{
    const result = await axios(baseURL)
    setpostList(result.data)
  }
  fetchData().catch((err)=>{
    console.log(err.message)
  }) 
 },[])

 
  return (
    <div className="posts">
      {postsList.map((post,i)=>
      (
        <Post key={i} img={rice} post={post}  />
      ))}  
    </div>
  );
}