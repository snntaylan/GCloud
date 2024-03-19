import * as React from "react"

import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"

interface IGChargeProps { }

const GCharge: React.FunctionComponent<IGChargeProps> = () => {
  const navigate = useNavigate()


  return (
    <Box>
      GCharge Module Loaded
    </Box>
  )
}

export default GCharge