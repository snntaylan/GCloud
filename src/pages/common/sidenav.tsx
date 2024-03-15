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
import {useStore, useLayoutStore} from "gstore/store";

interface ISideNavigationProps { }

const SideNavigation: React.FunctionComponent<ISideNavigationProps> = () => {
  // const [navigationConfig, setNavConfig] = React.useState([]);
  const theme = useTheme<Theme>()
  const navigate = useNavigate()
  const store = useStore();
  const { navItems } = useLayoutStore();
  
  console.log("Store ==>", store, navItems);

  const navList = [
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
          url: '/gcloud/companies'
        },
        {
          id: 'parentcompany.license',
          title: 'Lisanslar',
          type: 'item',
          icon: <ListIcon />,
          url: '/gcloud/companies/add'
        },
      ]
    }
  ];

  const navigationConfig = React.useMemo(() => {
    return navItems.length ? navItems : navList;
  }, [navItems])

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
        {navigationConfig.map((navItem: any, index: any) => (
          <>
            <GCloudListItem navItem={navItem} />
            {
              navItem.children.length > 0 && (
                <List sx={{ paddingLeft: 3 }}>
                  {navItem.children.map((navChildItem: any, index: any) => (
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