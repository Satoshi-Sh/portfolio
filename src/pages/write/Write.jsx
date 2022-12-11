import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import c from "../../images/avatar.jpg"

// cannot use the function on my front end 
// for now just add image link instead of uploading image here
// import uploader from '../../uploader.js'


const baseURL = 'http://localhost:5000/blogapi/'



export default function Write(){
    const handleSubmit = (e)=>{
     e.preventDefault()
     const title = e.target.querySelector('#title').value
     const text = e.target.querySelector("#text").value
     const imageURL = e.target.querySelector('#imageURL').value
     const token = window.localStorage.getItem('token')
     console.log(title)

     fetch(`${baseURL}write`,
     {method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
      token,
      title,
      text,
      imageURL,
      })
      
    }).then(res => res.json()).then(message=>{
        console.log(message)
        window.location.href='/blog'
      }).catch(err=>{throw err})
    }
     
     
    return (
        <div className="write">
          <img className="writeImg" src={c}  alt="" />
          
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">

              
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                id='title'
                autoFocus={true}
              />
              <input
                type="text"
                placeholder="Image Url..."
                className="writeInput"
                id='imageURL'
                autoFocus={true}
              />
              
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Tell your story..."
                type="text"
                id='text'
                className="writeInput writeText"
              ></textarea>
            </div>
            
            <button className="writeSubmit" type="submit" >
              Publish
            </button>
          </form>
        </div>
      );
  
}