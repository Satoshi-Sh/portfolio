

import { motion } from "framer-motion"
import "./about.css"

const About = ()=>{
    return (
     <motion.div
     transition={{duration:1.6}}
     initial={{ opacity: 0, y:-50 }}
  whileInView={{ opacity: 1,y:0 }}
     className='about'>
       <h1>About</h1>
       <div className="box1 sb8">
        <h3 className='header'>About Website</h3>
        <p>This website was made to practice building a full stack website with MERN(MongoDB, Express, React, and Node.js).
           Hosted on AWS.
        </p>

        <h3 className='header'>Myself</h3>
        <p>Hello, my name is Satoshi. I'm originally from Japan. Since I immigrated to Canada,
          I had a various jobs from kitchens to offices.
        </p>
        <p>  
          At my last work, I was in a department which took care of data entry for the business partners.
          It needs a lot of typing and attention to details. One mistake gives a lot of damages to the partner business and their trust. I did my best to do the tasks as quick as possible while maintaning the quality, but at some point, I feel some of tasks can be automated with a programming language.
          At this point, I had never learned programming languages but I started learning Python on my free time with online learning materials especially date related field.
        </p>
        <p>
           Short time after I started, I realized that I liked programming, so decided to leave the job and learn them in a full-time basis.
           Along the way, I learned a lot about data analysis and data science. Especially, I enjoyed doing data extraction from website.
           I also knew I could host website with Python (Django). I got more interested in Web Development. I tried various technologies to know the concept of webdevelopment.
           Flask, PHP, React, Express, and so on through Online learning materials and on my own projects. 
        </p>
        <p>
           I believe it's time for me to get into the tech industry as a webdeveloper. I made this website as my portofolio. Hope you enjoyed reading this. 
        </p>

        <h3 className='header'>My Hobby</h3>
        <p>I like music. I play the guitar and the piano. Sometimes make my music and upload it on a social website for musicians. I also like to paly Shogi(Japanese Chess). My goal for Shogi is to be 3 dan(3rd degree black belt).</p>


        </div>
     </motion.div>  
     
    )
}

export default About;