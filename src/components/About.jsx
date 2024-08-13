import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[3px] shadow-card"
      >
        <div options={{
          max:45,
          scale: 1,
          speed: 100
        }}
          className="bg-tertiary rounded=[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
   
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 5)}
        className="mt-4 text-secondary text-[17px] mx-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Javascript and Python, and expertise in frameworks
        like React, Node.js, and Three.js. I can also build a RESTful API with Express.js. Recently, I have been learning to build
        with TailwindCss. I love to explore new areas to improve my skills and knowledge. I am good in collaborating 
        closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")