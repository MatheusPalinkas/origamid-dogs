import React from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

// import { Container } from './styles';

function ProtectedRoute(props) {
  const { login } = React.useContext(UserContext);

  if (login) return <Route {...props} />;

  return <Navigate to="/login" />;
}

export default ProtectedRoute;
