import * as React from "react"

import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import GCRM from 'gcrm/GCRM';

interface IModulesListProps { }

const ModulesList: React.FunctionComponent<IModulesListProps> = () => {
  const navigate = useNavigate()


  return (
    <>
    <GCRM></GCRM>
    </>
  )
}

export default ModulesList