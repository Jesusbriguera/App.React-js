import React, {useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import CartWidget from "./CartWidget";


export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
return <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
    
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CandyShop
        </Typography>
        {/* <Button color="inherit">Menú</Button> */}
    <CartWidget counter={7}/>
        <div>
    <Button 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
    >
        Menú
    </Button>
    
        <Menu
        id="fade-menu"
        MenuListProps={{
        'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
    >
        <MenuItem onClick={handleClose}>Chocolates</MenuItem>
        <MenuItem onClick={handleClose}>Caramelos</MenuItem>
        <MenuItem onClick={handleClose}>Chupetin</MenuItem>
        <MenuItem onClick={handleClose}>Alfajores</MenuItem>
    </Menu>
    
    </div>
        </Toolbar>
    </AppBar>
    </Box>
    </div>;
}