import { Navigate } from "react-router-dom";

function Details({ children }) {
  const token = localStorage.getItem("Token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default Details;