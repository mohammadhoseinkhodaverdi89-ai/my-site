import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("Token", input);
    navigate("/detail");
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default About;