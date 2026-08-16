import { motion, scale } from "framer-motion";
import useBackGroundChange from "../Handler-bg/Handler";
function Experiens() {
 const Container = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  invisible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
    x: 30,
    scale: 0.8,
  },
  invisible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 260,
    },
  },
};
  const isdark = useBackGroundChange((state) => state.isdark)
  return(
<motion.div  
    variants={Container} 
    initial="hidden" 
    whileInView="invisible" 
    className={`mt-16 ${isdark ? "text-white" : "text-black"} md:px-10 lg:px-15`}> 
      <h2 className="mb-4 font-bold text-gray-500">My-Experiens</h2> 
    <motion.div  
    variants={children} 
 
    > 
    <div className="border-l-3 border-purple-600 relative p-4"> 
     <span className="bg-purple-500 w-3 h-3 p-2 rounded-full absolute -left-2 top-2"></span> 
     <h2 className="font-medium">HTML & CSS Developer</h2> 
     <p className="text-sm text-gray-500">Experienced</p> 
     <p className="text-sm text-gray-500">I have good experience in building responsive and modern websites with HTML and CSS.</p> 
    </div> 
     <div className="border-l-3 border-purple-600 relative p-4"> 
     <span className="bg-purple-500 w-3 h-3 p-2 rounded-full absolute -left-2 top-2"></span> 
     <h2 className="font-medium">JavaScript Developer</h2> 
     <p className="text-sm text-gray-500">Experienced</p> 
     <p className="text-sm text-gray-500">I have good experience with JavaScript and use it to create interactive and dynamic web applications.</p> 
    </div> 
     <div className="border-l-3 border-purple-600 relative p-4"> 
     <span className="bg-purple-500 w-3 h-3 p-2 rounded-full absolute -left-2 top-2"></span> 
     <h2 className="font-medium">React & Tailwind CSS</h2> 
     <p className="text-sm text-gray-500">Currently Learning & Building</p> 
     <p className="text-sm text-gray-500">I am currently working on projects with React and Tailwind CSS. I also have experience working with Bootstrap.</p> 
    </div> 
    </motion.div> 
    </motion.div>
  )
}
export default Experiens