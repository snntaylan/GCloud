import * as React from "react"

import { Outlet, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import SideNavigation from "../pages/common/sidenav"
import { Box } from "@mui/material"

interface ILoggedInLayoutProps { }

const LoggedInLayout: React.FunctionComponent<ILoggedInLayoutProps> = (
  props
) => {


  return (
    <Box display={"flex"}>
      <SideNavigation />
      <Box className="gcloud-content" flex={"auto"}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default LoggedInLayout
