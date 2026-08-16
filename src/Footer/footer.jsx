import useBackGroundChange from "../Handler-bg/Handler";
import { CiLocationOn } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import { motion } from 'framer-motion'
function footer() {
  const isdark = useBackGroundChange((state) => state.isdark);
  return (
    <div
      className={`flex flex-row justify-between items-center md:px-10 lg:px-15 mt-16 bg-slate-700/20 p-7 rounded-3xl ${isdark ? "text-white" : "text-black"}`}
    >
      <motion.section
      initial={{opacity : 0 , x : -50}}
      whileInView={{opacity : 1 , x : 0}}
      transition={{duration : 0.3}}
      >
        <div className="flex flex-col">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-purple-500">
            Get in touch
          </p>
          <h1 className="font-bold text-4xl mb-3">Contect Me</h1>
          <p className="mb-9 text-gray-500 max-w-lg">
            if you have project question , or just want to say hello, feel free
            to contact me. i will be happy to hear from you
          </p>
          <div className="flex items-center gap-5 mb-2">
            <span className="bg-purple-500/20 p-3 rounded-2xl text-purple-500">
              <IoMdLocate />
            </span>
            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-bold">Tehran, iran</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="bg-purple-500/20 p-3 rounded-2xl text-purple-500">
              <CiLocationOn />
            </span>
            <div>
              <p className="text-gray-500">Country</p>
              <p className="font-bold">Irant</p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
      initial={{opacity : 0 , x : 50}}
      whileInView={{opacity : 1 , x : 0}}
      transition={{duration : 0.3}}
      className="w-full max-w-md p-5 md:p-7">
        <div className="flex flex-col items-center gap-3 justify-center  ">
          <input
            type="text"
            className="border w-full px-4 py-2 rounded-2xl outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <input
            type="text"
            className="border w-full px-4 py-2 rounded-2xl outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <textarea
            rows="5"
            placeholder="Your message"
            className="resize-none rounded-xl border border-gray-500/20 bg-slate-800/30 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 w-full"
          />
          <button className="bg-purple-500 w-full rounded-2xl font-medium py-2.5 hover:bg-purple-500/70 hover:scale-105 transition-all duration-300 active:scale-95">Send message</button>
        </div>
      </motion.section>
    </div>
  );
}
export default footer;
