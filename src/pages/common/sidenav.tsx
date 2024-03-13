import * as React from "react"

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Theme,
  Typography,
  useTheme
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';
import ListIcon from '@mui/icons-material/List';
import {useStore} from "gstore/store";

interface ISideNavigationProps { }

const SideNavigation: React.FunctionComponent<ISideNavigationProps> = () => {
  const theme = useTheme<Theme>()
  const navigate = useNavigate()
  const store = useStore();
  
  console.log("Store ==>", store);

  const navigationConfig = [
    {
      id: 'parentcompany',
      title: 'Platform Şirketleri',
      translate: 'PLATFORM_COMPANY',
      type: 'collapse', // 'collapse', 'group', 'item'
      icon: <BusinessIcon />,
      children: [
        {
          id: 'parentcompany.company',
          title: 'Şirketler',
          type: 'item',
          icon: <ListIcon />,
          url: '/dashboard/companies'
        },
        {
          id: 'parentcompany.license',
          title: 'Lisanslar',
          type: 'item',
          icon: <ListIcon />,
          url: '/dashboard/companies/add'
        },
      ]
    }
  ];

  const GCloudListItem = ({ navItem }: any) => {
    return (
      <Link to={navItem.url}>
        <ListItemButton>
          <ListItemIcon>
            {navItem.icon}
          </ListItemIcon>
          <ListItemText primary={navItem.title} />
        </ListItemButton>
      </Link>
    )
  }

  return (
    <Box className="gcloud-navigation">
      <List>
        {navigationConfig.map((navItem, index) => (
          <>
            <GCloudListItem navItem={navItem} />
            {
              navItem.children.length > 0 && (
                <List sx={{ paddingLeft: 3 }}>
                  {navItem.children.map((navChildItem, index) => (
                    <GCloudListItem navItem={navChildItem} />
                  ))}
                </List>
              )
            }
          </>
        ))}
      </List>
    </Box>
  )
}

export default SideNavigation
