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
      <Grid container spacing={2}>
        {["gCRM", "gHR", "gCharge", "gCloud"].map((x) => (
          <Grid item xs={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" color="text.secondary" gutterBottom>
                  {x}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default GCharge
