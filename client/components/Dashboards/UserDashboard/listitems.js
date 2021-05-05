import React from 'react';
import Link from '@material-ui/core/Link';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';


export const sidebarData = [
  {
    title: 'Orders',
    path: '/orderhistory/:id',
    icon: <DashboardIcon/>
  },
  {
    title: 'Personal Information',
    path: '/account/:id',
    icon: <PeopleIcon/>
  }
];

function preventDefault(event) {
  event.preventDefault();
};

export const NavItems = (
  <Typography >
   {sidebarData.map((item, index) => {
        return (
          <ListItem key={index}
            onClick={preventDefault}
            // replace
            button>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <Link to={item.path}>
                <ListItemText primary={item.title} />
              </Link>
          </ListItem>
        )
      })}
  </Typography>
);
