import { motion } from "framer-motion"

import git from '../../images/logos/github.png'
import cat from '../../images/logos/cat.png'
import kaggle from '../../images/logos/kaggle.png'
import linkedin from '../../images/logos/linkedin.png'
import logo from '../../images/logos/logo.jpg'
import './index.css'


function importAll(r) {
   let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
   return images
  }


const Index = ()=>{
   
   const langs = importAll(require.context('../../images/languages', false, /\.(png|jpe?g|svg|webp)$/));
   const fronts = importAll(require.context('../../images/frontend', false, /\.(png|jpe?g|svg|webp)$/));
   const backs = importAll(require.context('../../images/backend', false, /\.(png|jpe?g|svg|webp)$/));
   const tools = importAll(require.context('../../images/tools', false, /\.(png|jpe?g|svg|webp)$/));
   function createContent(obj){
      const content = Object.entries(obj)
      .map(([key,value]) =>
      {
      const name = key.split('.')[0]
      return(
      <div key={name} 
      className='icon-card'>
      <img
      src={value} alt={name} className='lang'>
      </img>
      <p>{name}</p>
      </div>
      )
      })
      return content
   } 
   const language = createContent(langs)
   const frontend = createContent(fronts)
   const backend = createContent(backs)
   const tool = createContent(tools)
   
    return (
    <div className="index">
       <h1>Satoshi S.</h1>
       <motion.div initial={{ opacity: 0, y:-50 }}
  whileInView={{ opacity: 1,y:0 }}  className='desc-div'>
         <img className='medium' src={logo} alt='logo'></img>  
         
         <div className="circular-sb">
         An aspiring <span className='role'> Web Developer </span> and <span className='role'> Data Analyst </span> with an Econimics Degree.
         <div className="circle1"></div>
         <div className="circle2"></div>
         </div>
       </motion.div>
       <div className='work-div'>
          <h2>My Works</h2>
          <motion.div
          transition={{duration:1.0}}
          initial={{ opacity:1,scale:0}}
          whileInView={{opacity:1,scale:1,transition:{
            delayChildren:1,
            staggerChildren:1
          }}
         }
          className='works'>
             <motion.div initial={{y:20,opacity:0}}
             whileInView={{y:0, opacity:1}}
             className='img-desc'>
                <a href="https://github.com/Satoshi-Sh/" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='github logo' src={git}></img>
                </a>
                <p>Github Profile</p>
             </motion.div>
             <motion.div 
             initial={{y:20,opacity:0}}
             whileInView={{y:0, opacity:1}}
             className='img-desc'>
                <a href="https://www.kaggle.com/satoshiss" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='kaggle logo' src={kaggle}></img>
                </a>
                <p>Kaggle Profile</p>
             </motion.div>
             <motion.div
             initial={{y:20,opacity:0}}
             whileInView={{y:0, opacity:1}}
             className='img-desc'>
                <a href="https://www.linkedin.com/in/satoshi-89bb58a8/" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='Linkedin logo' src={linkedin}></img>
                </a>
                <p>Linkedin Profile</p>
             </motion.div>
             <motion.div
             initial={{y:20,opacity:0}}
             whileInView={{y:0, opacity:1}}
             className='img-desc'>
                <a href="https://satoshi40.pythonanywhere.com/" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='Cat logo' src={cat}></img>
                </a>
                <p>Django Portofolio</p>
             </motion.div>
          </motion.div>
       </div> 
       
       <h2>Skills</h2>
       <h3 onScrollCapture={()=>{console.log('now')}}>Programing Languages</h3>
       <motion.div  
       initial={{ opacity: 0.5, x:190 }}
       transition={{duration:0.5}}
       whileInView={{ opacity: 1,x:0 }}
       viewport={{ once: true }}
       key='1' className='langs-div'>  
          {language}
       </motion.div>
       <h3>Front End</h3>
       <motion.div
       initial={{ opacity: 0.5, x:190 }}
       transition={{duration:0.6}}
       whileInView={{ opacity: 1,x:0 }}
       viewport={{ once: true }}
       key='2' className='langs-div'>  
          {frontend}
       </motion.div>
       <h3>Back End</h3>
       <motion.div
       initial={{ opacity: 0.5, x:190 }}
       transition={{duration:0.7}}
       whileInView={{ opacity: 1,x:0 }}
       viewport={{ once: true }}
       key='3' className='langs-div'>  
          {backend}
       </motion.div>
       <h3>Development Tools</h3>
       <motion.div 
       initial={{ opacity: 0.5, x:190 }}
       transition={{duration:0.8}}
       whileInView={{ opacity: 1,x:0 }}
       viewport={{ once: true }}
       key='4' className='langs-div'>  
          {tool}
       </motion.div>
    </div>
    )
}

export default Index;