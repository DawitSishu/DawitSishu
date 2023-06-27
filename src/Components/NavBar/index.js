import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Menu,
  Switch,
  styled,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import MenuIcon from "@mui/icons-material/Menu";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../../Assets/Images/logo192.png";
import "./style.css";
import Particle from "../Particles";
import NavLinks from "./NavLinks";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";


const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: "20px",
    height: "20px",
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  },
  "& .MuiSwitch-track": {
    backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
  },
}));

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008080",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#008080", 
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768, // Custom breakpoint value for 'sm'
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  },
});


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#008080",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768, // Custom breakpoint value for 'sm'
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const hoverStyle = {
    "&:hover": {
      transform: "scale(1.1)",
      borderBottom: "5px solid #008080",
      elevation: "0",
    },
  };
  // rgba(128, 128, 128, 0.6)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <Particle />
        <AppBar
          // position="fixed"
          className={navColour ? "sticky" : "navbar"}
          sx={{
            boxShadow: "none",
            backgroundColor: "rgba(128, 128, 128, 0.4)",
            color:`${darkMode ? 'white' : 'rgba(51, 51, 51, 1)'}`,
            boxShadow: '0px 3px 3px 0px rgba(9, 5, 29, 0.171)',
            elevation: 5,
            
          }}
        >
          <Toolbar
            sx={{
              "@media (max-width: 767px)": {
                display: "flex",
                justifyContent: "space-between",
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
            <Container
              sx={{
                marginLeft: "35%",
                "@media (max-width: 767px)": {
                  display: "none",
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
                  component={Link}
                  to="/contact"
                  color="inherit"
                  startIcon={<AiOutlineMail style={{ marginBottom: "2px" }} />}
                >
                  Contact
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
            <CustomSwitch
              checked={darkMode}
              onChange={handleDarkModeToggle}
              color="default"
              icon={<Brightness7 sx={{color:'rgba(51, 51, 51, 0.8)'}}/>}
              checkedIcon={<Brightness4 />}
              sx={{
                "& .MuiSwitch-thumb": {
                  borderRadius: "50%",
                },
              }}
            />
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
                "@media (max-width: 767px)": {
                  display: "block",
                },
              }}
            >
              {!anchorEl ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              sx={{
                backgroundColor: "transparent",
                display: "none",
                "@media (max-width: 767px)": {
                  display: "block",
                },
                zIndex: 1,
              }}
            >
              <NavLinks />
            </Menu>
          </Toolbar>
        </AppBar>
        {/* <div style={{marginTop:'75px'}}> */}
          <Outlet />
        {/* </div>   */}
    </ThemeProvider>
  );
}

export default NavBar;
