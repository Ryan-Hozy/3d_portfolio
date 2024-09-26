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
        By day, I'm a code magician conjuring wonders with JavaScript and Python. Wielding powerful frameworks like React, Node.js, and Three.js, I create spellbinding web experiences. I've mastered crafting RESTful APIs with Express.js and recently added Tailwind CSS to my arsenal of tools. Ever the project adventurer, I'm always exploring new realms to enhance my skills and knowledge.

I thrive on collaborating closely with clients to weave efficient, scalable, and user-friendly solutions that solve real-world problems. Ready to embark on a coding quest? Let's join forces and bring your ideas to life!

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