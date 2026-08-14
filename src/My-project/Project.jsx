import { motion } from "framer-motion";
import useBackGroundChange from "../Handler-bg/Handler";
import Photo1 from "./Photo/Screenshot 2026-08-14 121538.png";
import Photo2 from "./Photo/Screenshot 2026-08-14 122000.png";
import Photo3 from "./Photo/Screenshot 2026-08-14 122223.png";
const Projects = [
  {
    id: 1,
    img: Photo1,
    name: "Shopping project",
    details: "this is my first project with react and tailwin css",
  },
  {
    id: 2,
    img: Photo2,
    name: "resomey project",
    details: "this is my secend project with react and tailwin css",
  },
  {
    id: 3,
    img: Photo3,
    name: "Shopping project",
    details: "this is my first project with html and  css",
  },
];
function Project() {
  const isdark = useBackGroundChange((state) => state.isdark);
  const Container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        durction: 0.5,
        staggerChildren: 0.15,
      },
    },
  };
  const Children = {
    hidden:{opacity : 0 , y : 20 , scale : 0.6 },
    visible:{opacity : 1 , y : 0 , scale : 1 , transition: {
        type: 'spring' , stiffness : 100 , damping : 10
    } }
  }
  return (
    <motion.div
    variants={Container}
    initial='hidden'
    whileInView='visible'
      className={`mt-15 md:px-10 lg:px-15 ${isdark ? "text-white" : "text-black"}`}
    >
      <h2 className="text-gray-500 font-bold mb-4">My-Project</h2>
      <div className="grid grid-cols-3 gap-7">
        {Projects.map((item) => (
          <motion.div
          variants={Children}
          whileHover={{scale : 1.1 , y : 3 }}
            key={item.id}
            className="flex flex-col gap-4 border border-gray-800 rounded-2xl items-center justify-center bg-slate-700/20"
          >
            <img
              src={item.img}
              alt="item"
              className="h-full  w-full rounded-t-2xl"
            />
            <div className="flex flex-col justify-center items-center p-5">
              <h2 className="font-bold mb-2 text-slate-400/90">{item.name}</h2>
              <p className="font-normal ">{item.details}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-blue-500/10 px-2 py-1 rounded-2xl border border-blue-400/10 text-sm text-blue-400">
                  React
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default Project;
