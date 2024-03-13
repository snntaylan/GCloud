import { Navigate, useLocation } from "react-router-dom"

import React from "react"
// import RouteNames from "./routeNames"
// import { authSelectors } from "@/redux/selectors"
// import { useAppSelector } from "@/redux"
import {useStore, useAuthStore} from "gstore/store";

type PrivateRouteProps = {
  element: React.ReactNode
}

/**
 * @param {React.ReactNode} element the component to be privated
 * @example `<Route path="path" element={<PrivateRoute element={<HomePage />} />} />`
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuthStore();
  // const { login } = RouteNames

  // Get the location of current page and redirect to it after login
  const location = useLocation()

  // const isAuthenticated = true; //useAppSelector(authSelectors.isAuthSelector)

  /**
   * This function will return Route element based on user Authorization.
   * @returns Element our redirect to login page
   */

  return Boolean(isAuthenticated) ? (
    <>{element}</>
  ) : (
    <Navigate to={{ pathname: '/auth/login' }} state={{ from: location }} />
  )
}

export default PrivateRoute
