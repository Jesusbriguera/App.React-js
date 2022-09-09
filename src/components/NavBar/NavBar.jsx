import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  const pages = [
    { enlace: "/categoria/chocolates", nombre: "Chocolates" },
    { enlace: "/categoria/alfajores", nombre: "Alfajores" },
    { enlace: "/categoria/bombones", nombre: "Bombones" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink
              className="navbar"
              variant="h6"
              component="div"
              to="/"
              sx={{ flexGrow: 1 }}
            >
              CandyShop
            </NavLink>
            {/* <Button color="inherit">Menú</Button> */}
            <CartWidget counter={7} />
            <div>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
              ></Button>
              <NavLink className="navbar" to="/categoria/chocolates">
                Chocolates
              </NavLink>
              <NavLink className="navbar" to="/categoria/alfajores">
                Alfajores
              </NavLink>
              <NavLink className="navbar" to="/categoria/bombones">
                Bombones
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
