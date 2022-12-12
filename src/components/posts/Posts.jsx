import Post from "../post/Post";
import "./posts.css";
import React, { useState, useEffect } from 'react';
import axios from'axios'
import { useLocation } from "react-router-dom";

const baseURL = 'https://gleaming-erin-blazer.cyclic.app/blogapi/'

export default function Posts() {
    let [postsList,setpostList] = useState([])
    let [name, setName] = useState('')
    let query = useLocation()['search']
  useEffect(()=>{
    const fetchData= async ()=>{
    const result = await axios(baseURL + query)
    setpostList(result.data[0])
    setName(query.split('name=').at(-1))
    window.scrollTo(0,0)
  }
  fetchData().catch((err)=>{
    console.log(err.message)
  }) 
 },[query])

 
  return (
    <div><h1 className="catTitle">{name}</h1>
    <div className="posts">
        
      {postsList.map((post,i)=>
      (
        <Post key={i} post={post}  />
      ))}  
    </div>
    </div>
  );
}