/* eslint-disable react/prop-types */
import { loadState } from "../redux/localStorage";
import { Navigate } from "react-router-dom";

const hasJWT = () => {
  const data = loadState();
  if (data) {
    return true;
  }
  return false;
};

function Protect({ children }) {
  if (!hasJWT()) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default Protect;
