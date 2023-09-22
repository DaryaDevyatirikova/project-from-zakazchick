import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import axios from 'axios';
import TestMenuIcon from './IconMenu';

export default function NewNavbar({ user }) {
  const navbarStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };
  return (
    <Box style={navbarStyle} sx={{ flexGrow: 1, navbarStyle }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <TestMenuIcon />
          {user && (
            <>
            <Button color="inherit" href="/favourite" >Favorites</Button>
            <Button color="inherit" href="/logout" onClick={(e) => {
                e.preventDefault();
                axios('/api/auth/logout')
                  .then(() => (window.location.href = '/'))
                  .catch(console.log);
              }} >Logout</Button>
            </>
          )}
          {!user &&(
            <>
            <Button color="inherit" href="/login">Login</Button>
            <Button color="inherit" href="/signup">Sign up</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
