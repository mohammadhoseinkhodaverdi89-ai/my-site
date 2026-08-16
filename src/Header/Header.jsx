import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { TiAdjustBrightness } from "react-icons/ti";
import useBackGroundChange from '../Handler-bg/Handler'
function Header() {
    const toggle = useBackGroundChange((state) => state.toggle)
    const isdark = useBackGroundChange((state) => state.isdark)
    return (
<header className="fixed top-3 left-1/2 -translate-x-1/2 w-[100%] max-w-5xl z-50">
  <nav>
    <div
      className={`
        flex justify-between items-center
        sm:text-sm
        border border-gray-600
        rounded-2xl
        px-3 py-2
        shadow-[0_1px_10px_rgba(99,102,241,0.35)]
        backdrop-blur-2xl
        ${isdark ? "bg-slate-900/20 text-slate-100" : "bg-blue-100/20 text-slate-900"}
      `}
    >
      <div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">
          HM
        </h2>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-3 font-medium">
          <li className="cursor-pointer transition-all duration-300 hover:text-indigo-400">
            Home
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-indigo-400">
            Context
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-indigo-400">
            About
          </li>

          <li className="cursor-pointer">
            <button onClick={toggle}>
              {isdark ? <FaMoon /> : <TiAdjustBrightness />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    )
}
export default Header