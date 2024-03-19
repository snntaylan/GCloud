import * as React from "react"

import { Outlet, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import SideNavigation from "../pages/common/sidenav"
import { Box } from "@mui/material"
import GCRMHeader from "components/common/header"

interface IModuleLayoutProps { }

const ModuleLayout: React.FunctionComponent<IModuleLayoutProps> = (
  props
) => {


  return (
    <Box display={"flex"}>
      <SideNavigation />
      <Box className="gcloud-content" flex={"auto"}>
        <GCRMHeader />
        <Outlet />
      </Box>
    </Box>
  )
}

export default ModuleLayout