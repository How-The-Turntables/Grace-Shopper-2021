import React from 'react';
import Link from '@material-ui/core/Link';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';


export const sidebarData = [
  {
    title: 'Orders',
    path: '/admin/orders',
    icon: <DashboardIcon/>
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <PeopleIcon/>
  }
];

export const NavItems = (
  <div>
   {sidebarData.map((item, index) => {
        return (
          <ListItem key={index}
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
  </div>
);
