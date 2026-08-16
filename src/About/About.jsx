import useBackGroundChange from '../Handler-bg/Handler'
import { FaPerson } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { motion } from 'framer-motion';
function About() {
    const isdark = useBackGroundChange((state) => state.isdark)
    return (
        <div className={` mt-20 ${isdark ? "text-white" : "text-black"} flex flex-col items-center max-w-full gap-3 justify-between md:px-10 lg:px-15 md:flex-row`}>
            <motion.div
            initial={{opacity : 0 , x : -60}}
            whileInView={{opacity : 1 , x : 0}}
            transition={{durction : 0.3}}
            >
                <h2 className="text-lg font-bold w-30 block text-gray-500">About Me</h2>
                <p className='max-w-lg '>Hi! I'm Mohammad Hossein Khodadadi, a 16-year-old web development enthusiast based in Tehran.<br />

                    I'm passionate about web development and constantly working on improving my skills. Currently, I'm focusing on gaining more experience with Git, React, and Tailwind CSS. After becoming more confident with these technologies, I plan to dive into TypeScript and Next.js.<br />

                    My ultimate goal is to become a Full-Stack Developer, build professional and useful projects, and keep growing as a developer.
                </p>
            </motion.div>
            <motion.div 
            initial={{opacity : 0 , x : 60 }}
            whileInView={{opacity : 1 , x : 0}}
            transition={{durction : 0.3}}
            className='bg-gray-600/20 rounded-2xl p-10 border border-slate-700/30'>
           <div className='flex gap-2 items-center'>
            <p>   <FaPerson /></p>
            <p>Mohammad Khaderdi</p>
           </div>
           <div className='flex gap-2 items-center mt-3'>
            <p>   <CiCircleMinus  /></p>
            <p>16</p>
           </div>
           <div className='flex gap-2 items-center mt-3'>
            <p>   <FaMale  /></p>
            <p>Male</p>
           </div>
           <div className='flex gap-2 items-center mt-3'>
            <p>   <MdEmail  /></p>
            <p>mohammadhoseinkhodaverdi89@gmail.com</p>
           </div>
            </motion.div>
        </div>
    )
}
export default About