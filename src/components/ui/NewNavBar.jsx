import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Dashboard } from '@mui/icons-material';
import TestMenuIcon from './IconMenu';

export default function ButtonAppBar() {
  const navbarStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };
  return (
    <Box style={navbarStyle} sx={{ flexGrow: 1, navbarStyle }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <TestMenuIcon />
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
