import * as React from "react"

import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

interface IModulesListProps { }

const ModulesList: React.FunctionComponent<IModulesListProps> = () => {
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
                <Link to={"/olcer/gcrm"}>
                  <Button size="small">Select</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ModulesList