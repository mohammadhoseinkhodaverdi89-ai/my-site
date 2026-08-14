import useBackGroundChange from "../Handler-bg/Handler";
import Photo1 from "./Photo/Gemini_Generated_Image_d6n8sfd6n8sfd6n8.png";
import Photo2 from "./Photo/Gemini_Generated_Image_7f8olb7f8olb7f8o.png";
import Photo3 from "./Photo/Gemini_Generated_Image_qs4cuoqs4cuoqs4c.png";
import Photo4 from "./Photo/Gemini_Generated_Image_a0ou4pa0ou4pa0ou.png";
import Photo5 from "./Photo/Gemini_Generated_Image_9ydjmw9ydjmw9ydj.png";
import Photo6 from "./Photo/Gemini_Generated_Image_rxd43wrxd43wrxd4.png";
import { motion, scale } from "framer-motion";
import { div } from "framer-motion/client";
const AnimationContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      durction: 0.5,
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};
function Skil() {
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];
  return (
    <motion.div
      variants={AnimationContainer}
      initial="hidden"
      whileInView="visible"
      className="md:px-10 lg:px-15"
    >
      <div className="flex items-center text-gray-500 font-bold text-lg mt-15">
        <h2>Skill</h2>
      </div>
      <div className="flex gap-3">
        {photos.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, rotate: 2, scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-slate-700/20 hover:bg-slate-700/40 transition-colors rounded-xl p-4 cursor-pointer backdrop-blur-sm border border-slate-700/30 shadow-lg"
          >
            <img
              src={item}
              alt={`Skill icon ${index}`}
              className="h-24 w-24 rounded-full object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default Skil;
