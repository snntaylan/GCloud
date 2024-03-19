import * as React from "react"

import {
  Avatar,
  Box, Icon, IconButton, Tooltip, Typography
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore, useLayoutStore } from "gstore/store";
// import { Business, List, Person } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

interface IGCRMHeaderProps { }

const GCRMHeader: React.FunctionComponent<IGCRMHeaderProps> = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/olcer/home");
  }

  return (
    <Box className="gcloud-header">
      <Box>
        <Link to={"/olcer/home"}>
          <IconButton>
            <HomeIcon></HomeIcon>
          </IconButton>
        </Link>
      </Box>

      <Box>
        <Link to={"/olcer/home"}>
          <div className="username">
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Typography>Sinan Taylan</Typography>
          </div>
        </Link>
      </Box>

    </Box>
  )
}

export default GCRMHeader