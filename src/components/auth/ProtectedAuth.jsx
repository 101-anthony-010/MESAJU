import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedAuth = () => {
  const login = "admin"
  if (login === "admin") {
    return <Outlet/>
  } else {
    return <Navigate to="/login"/>
  }
}

export default ProtectedAuth