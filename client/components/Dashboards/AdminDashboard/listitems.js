import React from 'react';
// import Users from './Users.js';
// import Orders from './Orders.js';

// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';


export const sidebarData = [
  {
    title: 'Orders',
    path: '/admin',
    icon: <DashboardIcon/>
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <PeopleIcon/>
  }
];

function preventDefault(event) {
  event.preventDefault();
};

export const NavItems = () => {
  return (
    <div>
      <Link to='/admin'>
          <ListItem onClick={preventDefault} button>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
                <ListItemText>Orders</ListItemText>
          </ListItem>
      </Link>

      <Link to='/admin/users'>
          <ListItem onClick={preventDefault} button>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
                <ListItemText>Users</ListItemText>
          </ListItem>
      </Link>
    </div>
  )
}



// {sidebarData.map((item, index) => {
//   return (
//     <Link to={item.path}>
//       < ListItem
//         key={index}
//         onClick={preventDefault}
//         // replace
//         button>
//           <ListItemIcon>
//             {item.icon}
//           </ListItemIcon>

//             <ListItemText primary={item.title} />

//       </ListItem>

//       </Link>
//   )
// })}
