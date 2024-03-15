import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import LazyRoute from "./LazyRoute"
import PrivateRoute from "./PrivateRoute"
import React from "react"
import RoleBasedRoutes from "./RoleBasedRoutes"
import {useStore, useAuthStore} from "gstore/store";

//Layout
const LoggedInLayout = React.lazy(() => import("../layout/loggedin"))

//Non-Logged In Pages
const Login = React.lazy(() => import("../pages/login-page/index"))
//Logged In Pages
const CompaniesList = React.lazy(() => import("../pages/companies/list"))
const CompaniesAdd = React.lazy(() => import("../pages/companies/add"))
const ModulesList = React.lazy(() => import("../pages/modules/list"))
const GChargeModule = React.lazy(() => import("../pages/modules/gcharge"))
const GCRModule = React.lazy(() => import("../pages/modules/gcrm"))


const RouterConfig = () => {
  const { isAuthenticated } = useAuthStore();
  // const isAuthenticated = true;
  
  return (
    <Routes>
      <Route path={"/"}>
        <Route
          index
          element={
            <LazyRoute
              element={
                <Navigate to={isAuthenticated ? "/gcloud/companies" : "/auth/login"} />
              }
            />
          }
        />
        <Route path={"/auth/login"} element={<LazyRoute element={<Login />} />} />
      </Route>
      <Route
        element={<LazyRoute element={<PrivateRoute element={<Outlet />} />} />}
      >
        <Route path={"/gcloud/:companyName/login"} element={<LazyRoute element={<Login />} />} />
        <Route
          path={"/gcloud"}
          element={<LazyRoute element={<LoggedInLayout />} />}
        >
          {/* <Route path={"/dashboard/analytics"} element={<LazyRoute element={<Login />} />}></Route> */}
          <Route path={"/gcloud/companies"} element={<LazyRoute element={<CompaniesList />} />}></Route>
          <Route path={"/gcloud/companies/add"} element={<LazyRoute element={<CompaniesAdd />} />}></Route>
          <Route path={"/gcloud/companies/edit/:companyId"} element={<LazyRoute element={<CompaniesAdd />} />}></Route>
          <Route path={"/gcloud/:companyName/home"} element={<LazyRoute element={<ModulesList />} />}></Route>
          
          <Route path={"/gcloud/:companyName/gcrm"} element={<LazyRoute element={<GCRModule />} />}></Route>
          <Route path={"/gcloud/:companyName/gcharge"} element={<LazyRoute element={<GChargeModule />} />}></Route>
        </Route>
        {/* <Route
          path={"/module"}
          element={<LazyRoute element={<LoggedInLayout />} />}
        >
          <Route path={"/module/gcharge/init"} element={<LazyRoute element={<GChargeModule />} />}></Route>
          <Route path={"/module/gcrm/init"} element={<LazyRoute element={<GCRModule />} />}></Route>
        </Route> */}

      </Route>
    </Routes>
  )
}

export default RouterConfig