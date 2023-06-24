import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Link } from 'react-router-dom';


  



const Navbar = () => {
    


    
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar  position="static" color='secondary'>
            <Toolbar>
               {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              > 
                <MenuIcon />
              </IconButton>  */}
              <Typography variant="h6" component="div" style={{fontFamily:'unset'}} sx={{ flexGrow: 1 }}>
                Movie Mangement App
              </Typography>
              <Button style={{textTransform:'none',color:'white',fontFamily:'unset',fontSize:'18px'}}><Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
              <Button  style={{textTransform:'none',color:'white',fontFamily:'unset',fontSize:'18px'}}><Link to='/add' style={{textDecoration:'none',color:'white'}}> Add Movie </Link></Button>
              <Button  style={{textTransform:'none',color:'white',fontFamily:'unset',fontSize:'18px'}}><Link to='/contact' style={{textDecoration:'none',color:'white'}} >Contact Us</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar