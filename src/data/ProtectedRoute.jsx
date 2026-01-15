import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "./Auth.jsx";

export default function ProtectedRoute({ children, allowedRoles }) {
  const auth = getAuth();
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
