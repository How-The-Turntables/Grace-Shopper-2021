import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';




// function preventDefault(event) {
//   event.preventDefault();
// };

export const NavItems = () => {
  return (
    <div style={{
      //backgroundColor: '#F2F1E7'
    }}>
      <Link to='/user/orders' style={{
                textDecoration: 'none',
              }}>
          <ListItem button>
              <ListItemIcon>
                <DashboardIcon style={{ color: '#F2F1E7' }}/>
              </ListItemIcon>
                <ListItemText style={{ color: '#F2F1E7' }}>Orders</ListItemText>
          </ListItem>
      </Link>

      <Link to='/user/account' style={{
                textDecoration: 'none',
              }}>
          <ListItem button>
              <ListItemIcon>
                <PeopleIcon style={{ color: '#F2F1E7' }}/>
              </ListItemIcon>
                <ListItemText style={{ color: '#F2F1E7' }}>Account Info</ListItemText>
          </ListItem>
      </Link>
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
