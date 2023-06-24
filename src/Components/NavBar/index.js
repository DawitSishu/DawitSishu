import React, { useState } from "react";
import { AppBar, Toolbar, Container, Button, IconButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "./logo192.png";
import './style.css';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div>
    <AppBar
      position="fixed"
      className={navColour ? "sticky" : "navbar"}
      sx={{ boxShadow: "none", backgroundColor: "transparent" }}
    >
        <Toolbar>
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
              marginLeft: '0',
            },
          }}
            >
            <nav className="nav-items">
              <Button
                component={Link}
                to="/"
                color="inherit"
                onClick={() => updateExpanded(false)}
                startIcon={<AiOutlineHome style={{ marginBottom: "2px" }} />}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                onClick={() => updateExpanded(false)}
                startIcon={<AiOutlineUser style={{ marginBottom: "2px" }} />}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/project"
                color="inherit"
                onClick={() => updateExpanded(false)}
                startIcon={
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                }
              >
                Projects
              </Button>
              <Button
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
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            sx={{ marginLeft: "auto" }}
          >
            <span></span>
            <span></span>
          </IconButton>
        </Toolbar> 
    </AppBar>
    <div style={{ marginTop: '70px' }}>
      <Outlet />
    </div>
    </div>
  );
}

export default NavBar;
