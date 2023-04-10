

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
        <h3 className='header'>About</h3>
        <p>This website was made to practice building a full stack website with MERN (MongoDB, Express, React, and Node.js).
        </p>

        <h3 className='header'>Myself</h3>
        <p>Hello, my name is Satoshi. I'm originally from Japan. Since I immigrated to Canada,
          I have worked in various jobs, from kitchens to offices.
        </p>
        <p>  
          At my last job, I was in a department which dealt with data entry for our business partners.
          It needed a lot of typing and attention to details. One mistake could do a lot of damage to the partner's business, and lose their trust. I did my best to do the tasks as quick as possible while maintaning the quality, but at some point, I felt some of tasks could be automated with a programming language.
          At this point, I had never learned any programming languages but I started learning Python in my free time with online learning materials, especially in date-related field.
        </p>
        <p>
           Shortly after I started, I realized that I liked programming, so decided to leave the job and learn on a full-time basis.
           Along the way, I learned a lot about data analysis and data science. I especially enjoyed doing data extraction from website.
           I also knew I could host website with Python (Django), so I got more interested in web development. I tried various technologies to understand the concepts: Flask, PHP, React, Express, and so on through online learning materials and on my own projects.
        </p>
        <p>
           I believe it's time for me to get into the tech industry as a web developer. I made this website as my portofolio. Hope you enjoyed reading this. 
        </p>

        <h3 className='header'>Hobbies</h3>
        <p>I like music. I play the guitar and the piano. Sometimes I upload my music to social media. I also like to paly Shogi (Japanese Chess). My goal for Shogi is to be 3 dan (3rd degree black belt).</p>


        </div>
     </motion.div>  
     
    )
}

export default About;