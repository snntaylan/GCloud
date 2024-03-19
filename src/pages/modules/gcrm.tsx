import * as React from "react"

import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import GCRM from 'gcrm/GCRM';
import GCRMHeader from "components/common/header";

interface IGCRMMainProps { }

const GCRMMain: React.FunctionComponent<IGCRMMainProps> = () => {
  const navigate = useNavigate()


  return (
    <>
    <GCRM></GCRM>
    </>
  )
}

export default GCRMMain