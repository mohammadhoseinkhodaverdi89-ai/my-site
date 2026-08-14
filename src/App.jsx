import Header from "./Header/Header";
import useBackGroundChange from "./Handler-bg/Handler";
import Sections from "./Sections/Section";
import About from './About/About'
import Skill from './Skils/Skil'
import Project from "./My-project/Project";
function App() {
  const isdark = useBackGroundChange((state) => state.isdark)
return(
  <div className={`min-h-screen ${isdark ? "bg-slate-900" : "bg-white"} px-3 py-2 md:px-10 lg:px-15 lg:py:5`}>
    <Header />
    <Sections />
    <About />
    <Skill />
    <Project />
  </div>
)
}
export default App