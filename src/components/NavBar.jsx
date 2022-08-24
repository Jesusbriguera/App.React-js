import React, {useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';



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
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            
            <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CandyShop
        </Typography>
        {/* <Button color="inherit">Menú</Button> */}
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