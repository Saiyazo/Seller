import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "../services/Auth";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const auth = getAuth();
  if (!auth) return <Navigate to="/" replace />;
  if (allowedRoles.length && !allowedRoles.includes(auth.role)) return <Navigate to="/" replace />;
  return children;
}