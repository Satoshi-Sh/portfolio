import { useEffect, useState } from "react";
import "./update.css";
import { Link,useLocation } from "react-router-dom";
import axios from "axios";
import c from "../../images/avatar.jpg"

// cannot use the function on my front end 
// for now just add image link instead of uploading image here
// import uploader from '../../uploader.js'


const baseURL = 'https://gleaming-erin-blazer.cyclic.app/blogapi/'



export default function Update(){
    const postId = useLocation()['pathname'].split('/').at(-2)
    // load categories 
    let [cats,setCats] = useState([])
    let [title,setTitle] = useState('')
    let [url,setUrl] = useState('')
    let [text,setText] = useState('')
    let [id,setId] = useState('')

    let [cas,setCas] = useState([])
  useEffect(()=>{
    const fetchData= async ()=>{
    const result = await axios(baseURL +'categories')
    setCats(result.data)
    
  }
  fetchData().catch((err)=>{
    console.log(err.message)
  }) 
 },[])
 useEffect(()=>{
    const fetchData= async ()=>{
    const result = await axios(baseURL +postId)
    setTitle(result.data.title)
    setUrl(result.data.imageURL)
    setText(result.data.text)
    setId(result.data._id)
    let ls = []
    for (let i=0; i<result.data.categories.length;i++)
    {
      let option = document.querySelector(`#${result.data.categories[i].name}`)
      option.setAttribute('selected',true)
    }
    
    
    
  }
  fetchData().catch((err)=>{
    console.log(err.message)
  }) 
 },[])
    
    
    // for form 
    const handleSubmit = (e)=>{
     e.preventDefault()
    //  const title = e.target.querySelector('#title').value
    //  const text = e.target.querySelector("#text").value
    //  const imageURL = e.target.querySelector('#imageURL').value
     const token = window.localStorage.getItem('token')
     const selects = e.target.querySelector('#categories').selectedOptions
     let categories = []
     for (let i=0; i<selects.length;i++){
      categories.push(selects[i].value)
     }
     

     fetch(`${baseURL}/update/${id}`,
     {method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
      token,
      title,
      text,
      categories,
      imageURL:url,
      })
      
    }).then(res => res.json()).then(message=>{
        console.log(message)
        window.location.href=`/portfolio/blog/${id}`
      }).catch(err=>{throw err})
    }
     
     
    return (
        <div className="write">
          <img className="writeImg" src={url}  alt="" />
          
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">

              
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                id='title'
                autoFocus={true}
                value={title}
                onChange={e=>
                    setTitle(e.target.value)}
              />
              <label className="writeInput" htmlFor='categories' >Categories</label>
              <select id='categories' name='categories' multiple>
              {cats.map((category,i)=>
      (
        
        <option key={i} id={category.name} className="option" value={category._id} >
              {category.name}
        </option>
      ))} 
      </select>


              <input
                type="text"
                placeholder="Image Url..."
                className="writeInput"
                id='imageURL'
                value={url}
                autoFocus={true}
                onChange = {e=> setUrl(e.target.value)}
              />
              
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Tell your story..."
                type="text"
                id='text'
                className="writeInput writeText"
                value = {text}
                onChange = {e=> setText(e.target.value)}
              ></textarea>
            </div>
            
            <button className="writeSubmit" type="submit" >
              Update
            </button>
          </form>
        </div>
      );
  
}