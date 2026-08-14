import { useEffect, useState } from "react";
import Photo1 from "./Photos/mohammad.png";
import useBackGroundChange from "../Handler-bg/Handler";
function Sections() {
    const isdark = useBackGroundChange((state) => state.isdark)
    const text =
        "I build modern, responsive, and user-friendly websites with React and modern web technologies.";

    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let timer;

        if (!deleting && index < text.length) {
            timer = setTimeout(() => {
                setDisplayText(text.slice(0, index + 1));
                setIndex(index + 1);
            }, 50);
        }

        else if (!deleting && index === text.length) {
            timer = setTimeout(() => {
                setDeleting(true);
            }, 3000);
        }

        else if (deleting && index > 0) {
            timer = setTimeout(() => {
                setDisplayText(text.slice(0, index - 1));
                setIndex(index - 1);
            }, 25);
        }

        else if (deleting && index === 0) {
            timer = setTimeout(() => {
                setDeleting(false);
            }, 500);
        }

        return () => clearTimeout(timer);
    }, [index, deleting, text]);

    return (
        <div className={`flex flex-row justify-between items-center relative top-10 lg:mx-5 md:mx-10 md:px-5 lg:px-10 rounded-2xl bg-slate-700/20 border border-slate-700/30`}>

            <section className={`flex flex-col max-w-xl text-left ${isdark ? 'text-white' : 'text-black'}`}>

                <h3 className="text-2xl">
                    Hello, I'm
                </h3>

                <h1 className="text-4xl font-bold">
                    Mohammad{" "}
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Hossein
                    </span>
                </h1>

                <p className="text-gray-400 mt-3">
                    Frontend Developer
                </p>
                <p className=" max-w-xl mt-2 min-h-[48px]">
                    {displayText}
                    <span className="text-indigo-400 animate-pulse">
                        |
                    </span>
                </p>

                <div className="flex flex-row gap-3 mt-4">

                    <button
                        className="
                            px-6 py-3
                            rounded-xl
                            bg-gradient-to-r
                            from-indigo-500
                            to-purple-500
                            text-white
                            font-medium
                            shadow-lg
                            shadow-indigo-500/25
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-indigo-500/40
                            active:scale-95
                        "
                    >
                        View My Work
                    </button>

                    <button
                        className={`
                            px-6 py-3
                            rounded-xl
                            border
                            ${isdark ? "border-white text-white" : "border-black text-black"}
                            font-medium
                            transition-all
                            duration-300
                            hover:border-indigo-500
                            hover:text-indigo-400
                            hover:bg-indigo-500/10
                            active:scale-95
                        `}
                    >
                        Contact Me
                    </button>
                </div>
            </section>
            <section>
                <div className="
                    p-0.5
                    bg-gradient-to-r
                    from-indigo-500
                    to-purple-500
                    rounded-full
                    shadow-[0_0_35px_rgba(139,92,246,0.4)]
                ">
                    <img
                        src={Photo1}
                        alt="Mohammad Photo"
                        className="rounded-full w-64 h-64 object-cover"
                    />
                </div>
            </section>
        </div>
    );
}

export default Sections;