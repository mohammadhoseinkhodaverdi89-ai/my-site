import Header from "./Header/Header";
import useBackGroundChange from "./Handler-bg/Handler";
import Sections from "./Sections/Section";
import About from './About/About'
function App() {
  const isdark = useBackGroundChange((state) => state.isdark)
return(
  <div className={`min-h-screen ${isdark ? "bg-slate-900" : "bg-white"} px-3 py-2 md:px-6 md:py-4 lg:px-8 lg:py:5`}>
    <Header />
    <Sections />
    <About />
  </div>
)
}
export default App