import { Navigate, useLocation } from "react-router-dom"

import React from "react"
// import RouteNames from "./routeNames"
// import { authSelectors } from "@/redux/selectors"
// import { useAppSelector } from "@/redux"

type PrivateRouteProps = {
  element: React.ReactNode
}

/**
 * @param {React.ReactNode} element the component to be privated
 * @example `<Route path="path" element={<PrivateRoute element={<HomePage />} />} />`
 */
const RoleBasedRoutes: React.FC<PrivateRouteProps> = ({ element }) => {
  // const { home } = RouteNames

  // Get the location of current page and redirect to it after login
  const location = useLocation()

  // const user = useAppSelector(authSelectors.userSelector)


  /**
   * This function will return Route element based on user Authorization.
   * @returns Element our redirect to login page
   */

  return Boolean(false) ? (
    <>{element}</>
  ) : (
    <Navigate to={{ pathname: '/home' }} state={{ from: location }} />
  )
}

export default RoleBasedRoutes
