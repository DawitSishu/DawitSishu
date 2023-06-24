import React, { useState } from "react";
import { AppBar, Toolbar, Container, Button, IconButton,Menu,MenuItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import MenuIcon from '@mui/icons-material/Menu';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "./logo192.png";
import './style.css';
import Particle from "../Particles";
import NavLinks from "./NavLinks";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const hoverStyle = {
    '&:hover': {
      transform: 'scale(1.1)',
      borderBottom: '5px solid #008080',
      elevation: '0',
    },
  };
  

  return (
    <div>
      <Particle />
    <AppBar
      position="fixed"
      className={navColour ? "sticky" : "navbar"}
      sx={{ 
        boxShadow: "none", 
        backgroundColor: "transparent", 
      }}
    >
        <Toolbar
          sx={{
            '@media (max-width: 767px)': {
              display: 'flex',
              justifyContent: 'space-between',
            },
          }}
        >
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={() => updateExpanded(false)}
          >
            <img src={logo} alt="brand" height="30" />
          </IconButton>
          <Container sx={{
            marginLeft: '35%',
            '@media (max-width: 767px)': {
              display:'none',
            },
          }}
            >
            <nav className="nav-items">
            <Button 
                sx={hoverStyle}
                component={Link}
                to="/"
                color="inherit"
                startIcon={<AiOutlineHome style={{ marginBottom: "2px" }} />}
              >
                Home
              </Button>
              <Button
                sx={hoverStyle}
                component={Link}
                to="/about"
                color="inherit"
                startIcon={<AiOutlineUser style={{ marginBottom: "2px" }} />}
              >
                About
              </Button>
              <Button
                sx={hoverStyle}
                component={Link}
                to="/project"
                color="inherit"
                startIcon={
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                }
              >
                Projects
              </Button>
              <Button
                sx={hoverStyle}
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                rel="noreferrer"
                color="inherit"
                startIcon={<CgGitFork style={{ fontSize: "1.2em" }} />}
              >
                Fork & Star
              </Button>
            </nav>
          </Container>
          <IconButton
            className="navbar-toggler"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={(event) => {
              updateExpanded(expand ? false : "expanded");
              !anchorEl ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
            }}
            sx={{
              display: "none",
              '@media (max-width: 767px)': {
                display:'block',
              },
            }}
          >
           {!anchorEl ? <MenuIcon />  : <CloseIcon />}
          </IconButton>
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            sx={{
              backgroundColor: 'transparent',
              display: "none",
              '@media (max-width: 767px)': {
                display:'block',
              },
              zIndex:1
            }}
            
          >
              <NavLinks />
          </Menu>
        </Toolbar> 
    </AppBar>
    <div style={{ marginTop: '72px' }}>
      <Outlet />
    </div>
    </div>
  );
}

export default NavBar;
