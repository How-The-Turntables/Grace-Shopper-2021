import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Orders, Users } from '../index';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';


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
]
const NavBar = () => {
  return (
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

    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
      </ListItem>



  </div>
  )
};

export default NavBar;
