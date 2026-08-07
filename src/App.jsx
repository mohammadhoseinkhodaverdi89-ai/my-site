import About from "./About";
import Details from "./Details";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />

      <Route
        path="/detail"
        element={
          <Details>
            <Home />
          </Details>
        }
      />
    </Routes>
  );
}

export default App;