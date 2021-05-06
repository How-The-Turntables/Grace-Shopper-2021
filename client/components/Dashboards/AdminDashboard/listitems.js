import React from 'react';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

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
              <Link to='/admin'>
                <ListItemText>Orders</ListItemText>
              </Link>
          </ListItem>


          <ListItem onClick={preventDefault} button>
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <Link to='/admin/users'>
                <ListItemText>Users</ListItemText>
                </Link>
          </ListItem>
    </div>
  )
}


// export const sidebarData = [
//   {
//     title: 'Orders',
//     path: '/admin',
//     icon: <DashboardIcon/>
//   },
//   {
//     title: 'Users',
//     path: '/admin/users',
//     icon: <PeopleIcon/>
//   }
// ];

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
