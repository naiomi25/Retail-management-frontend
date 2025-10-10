import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Entradas", path: "/entries" },
  { label: "Modificar Entrada", path: "/edit-entry" },
];

const PrivateLayout = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    // Aquí borras JWT del localStorage o Context
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi App
          </Typography>

          {/* Menú desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={NavLink}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>

          {/* Menú móvil */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              onClick={handleOpenNavMenu}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={NavLink}
                  to={item.path}
                  onClick={handleCloseNavMenu}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Contenedor principal */}
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default PrivateLayout;
