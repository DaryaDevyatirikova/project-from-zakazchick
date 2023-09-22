import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TestMenuIcon from './IconMenu';

export default function NewNavbar() {
  const navbarStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };
  return (
    <Box style={navbarStyle} sx={{ flexGrow: 1, navbarStyle }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <TestMenuIcon />
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
