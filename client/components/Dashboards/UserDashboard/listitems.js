import React from 'react';
import Link from '@material-ui/core/Link';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';



function preventDefault(event) {
  event.preventDefault();
};

export const NavItems = () => {
  return (
    <div>
          <ListItem onClick={preventDefault} button>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <Link to='/orderhistory/:id'>
                <ListItemText>Orders</ListItemText>
              </Link>
          </ListItem>


          <ListItem onClick={preventDefault} button>
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <Link to='/account/:id'>
                <ListItemText>Users</ListItemText>
                </Link>
          </ListItem>
    </div>
  )
};



// export const sidebarData = [
//   {
//     title: 'Orders',
//     path: '/orderhistory/:id',
//     icon: <DashboardIcon/>
//   },
//   {
//     title: 'Personal Information',
//     path: '/account/:id',
//     icon: <PeopleIcon/>
//   }
// ];
