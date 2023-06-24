import React from "react";
import { Button,MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


const NavLinks = () => {

    const hoverStyle = {
        '&:hover': {
          transform: 'scale(1.1)',
          borderBottom: '5px solid #008080',
          elevation: '0',
        },
      };

  return (
    <>
        <MenuItem>
            <Button 
                sx={hoverStyle}
                component={Link}
                to="/"
                color="inherit"
                startIcon={<AiOutlineHome style={{ marginBottom: "2px" }} />}
              >
                Home
              </Button>
         </MenuItem>
         <MenuItem>
              <Button
                sx={hoverStyle}
                component={Link}
                to="/about"
                color="inherit"
                startIcon={<AiOutlineUser style={{ marginBottom: "2px" }} />}
              >
                About
              </Button>
        </MenuItem>
        <MenuItem>
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
        </MenuItem>
        <MenuItem>
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
        </MenuItem>
    </>
  )
}

export default NavLinks