import React from "react";
import { Navigate } from "react-router-dom";


const PublicRoute = ({children, redirecTo = '/'}) => {
  const authetificated = false; // useSelector(selectAuthetification);

  return authetificated ? <Navigate to={redirecTo} /> : children;
}

export default PublicRoute;
