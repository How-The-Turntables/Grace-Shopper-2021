import React from 'react';
import { Link } from 'react-router-dom';

//STYLES
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';


export const NavItems = () => {
  return (
    <div>
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
