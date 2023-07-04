import React from "react";
import { Button,MenuItem } from "@mui/material";
import { Link } from "react-scroll";
import { CgGitFork } from "react-icons/cg"; 
import {
  AiOutlineMail,  
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
           <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                <Button
                  sx={hoverStyle}
                  color="inherit"
                  startIcon={<AiOutlineHome style={{ marginBottom: "2px" }} />}
                >
                  Home
                </Button>
                </Link>
         </MenuItem>
         <MenuItem>
            <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                <Button
                  sx={hoverStyle}
                  color="inherit"
                  startIcon={<AiOutlineUser style={{ marginBottom: "2px" }} />}
                >
                  About
                </Button>
                </Link>
        </MenuItem>
        <MenuItem>
            <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                <Button
                  sx={hoverStyle}
                  color="inherit"
                  startIcon={
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                  }
                >
                  Projects
                </Button>
                </Link>
        </MenuItem>
        <MenuItem>
            <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                <Button
                  sx={hoverStyle}
                  color="inherit"
                  startIcon={<AiOutlineMail style={{ marginBottom: "2px" }} />}
                >
                  Contact
                </Button>
                </Link>
        </MenuItem>
        <MenuItem>
              <Button
                sx={hoverStyle}
                href="https://github.com/DawitSishu/DawitSishu"
                target="_blank"
                rel="noreferrer"
                color="inherit"
                startIcon={<CgGitFork style={{ fontSize: "1.2em" }} />}
              >
                Fork 
              </Button>
        </MenuItem>
    </>
  )
}

export default NavLinks
