import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Particle from './Components/Particles';
import About from './Components/About';
import Projects from './Components/Project';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import {useState} from 'react';
import { Element } from 'react-scroll';




const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008080",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768, 
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
      sm: 768, 
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Particle />
      <div>
      <NavBar  modeHandler = {handleDarkModeToggle}/>
      <Element name="hero">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Element name="contact">
        <Contact />
      </Element>
      </div>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
