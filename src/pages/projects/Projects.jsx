import {useState} from 'react';
import { AnimatePresence, motion } from "framer-motion"
import './projects.css'


function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
const Projects = ()=>{
    
    const  [selectedName,setSelectedName]=useState(null)
    const pros = importAll(require.context('../../images/projects'))
    const descriptions = {
      'Take Stairs':"This application keeps track of user's stair exercises. Users just need to put how many stairs they climb up and down. It shows the stats by bar and line plots, visualized data with Recharts. API was created with express, interaction with MongoDB to get stored data. Passport.js was used to authorize the user.",
      'Memory Game2':'Memory Card game was build with React. Used React Router DOM to switch pages and React Context to change the design of the whole application (You can click on the card in the navigation bar to change). JavaScript classes was used to build cards, to keep the code clean.',
      'Typing Game':'Typing game was made with React, hosted on GitHub page. Typewriter Effect was used to make typing animation in the start page. Users can choose sound (on/off) and difficulty level.',
      'Django Portfolio':'Fullstack website created with Django, hosted on Pythonanywhere, and showcasing projects and blog posts. Used flexbox and bootstrap to design the page layouts, and Sqllite as a database. Blog posts can be searched by categories.'
    }
    const content = Object.entries(pros)
    .map(([key,value])=>
    {
      let link_name = key.split('.')[0].toLowerCase()
      if (link_name==='slack_mock'|| link_name=='take_stairs')
      {link_name= link_name.replace('_','-')} 
      if (link_name ==='django_portfolio')
      {link_name ='django-portofolio'} 
      const gitLink = "https://github.com/Satoshi-Sh/" + link_name
      const liveLink = link_name=='django-portofolio'? 'https://satoshi40.pythonanywhere.com/' : "https://satoshi-sh.github.io/"+link_name

      const name= key.split('.')[0].replace('_',' ')
      return (
        <div key={name} className='one-project'>
        <motion.div key={name} className='project-card'
        layoutId={name} onClick={()=>{
          if(name===selectedName){
            setSelectedName(null)
          }
          else{
          setSelectedName(name)} }}
        >
            <motion.h3 className='title'>{name}</motion.h3>
            <motion.img
            src={value} alt={name} className='project'>
            </motion.img>
            <div className="links" key={name}>
                    <div className="link" key={name+'1'}><a href={gitLink} target="_blank"  rel="noreferrer">View Code</a></div>
                    <div className="link" key={name+'2'}><a href={liveLink} target="_blank"  rel="noreferrer">Live Preview</a></div>
            </div>
          </motion.div>    
          <AnimatePresence>
         {selectedName===name &&
          <motion.div className='popup'>
          
          <motion.h3>Summary</motion.h3>
          <motion.p className='summary-des'>{descriptions[name]}</motion.p>
          <motion.button className='close' onClick={() => setSelectedName(null)}>x</motion.button>
          </motion.div>}
        </AnimatePresence>
      </div>
      )
    })

    return (<div className='projects'>
               <h1>Projects</h1>
               <p>*Click a picture to see the summary of the project.</p>
               <div className='projects-div'>
               {content}
               </div>
           </div>)
}

export default Projects;