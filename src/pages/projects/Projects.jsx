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
      'Memory Game2':'Memory Card game was build with React. Used React Router DOM to switch pages and React Context to change the design of the whole application (You can click on the card in the navigation bar to change). JavaScript classes was used to build trump card deck, to keep the code clearner.',
      'Shopping Cart':'Shopping Cart was made by React. User can make a mock order on this application.',
      'Typing Game':'Typing game was made with React, hosted on GitHub page. Typewriter Effect was used to make typing animation in the start page. Users can choose sound (on/off) and difficulty level.',
      'Slack Mock':'Used React and Firebase. Once account is created, the user can make a post on a specific topic thread.',
      'Todo List':'User can make to do list. Local storage is used to keep data. Javascript object was used to organized the code.',
      'Wheres Waldo':"Where's Waldo game with Ghibli characters made with React. Firebase was used to keep the character locations and time score of users."
      
    }
    const content = Object.entries(pros)
    .map(([key,value])=>
    {
      let link_name = key.split('.')[0].toLowerCase()
      if (link_name==='slack_mock')
      {link_name='slack-mock'} 
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
                    <div className="link" key={name+'1'}><a href={"https://github.com/Satoshi-Sh/"+link_name} target="_blank"  rel="noreferrer">View Code</a></div>
                    <div className="link" key={name+'2'}><a href={"https://satoshi-sh.github.io/"+link_name} target="_blank"  rel="noreferrer">Live Preview</a></div>
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
               <p>*Click pictures to see a summary of a project.</p>
               <div className='projects-div'>
               {content}
               </div>
           </div>)
}

export default Projects;