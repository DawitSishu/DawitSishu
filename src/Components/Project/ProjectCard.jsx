import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Tilt } from "react-tilt";

const defaultOptions = {
  axis: null,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  max: 25,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  reset: true,
};

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card
      sx={{
        maxWidth: 450,
        borderRadius: 5,
        backdropFilter: "blur(55px)",
        backgroundColor: "transparent",
        elevation: 3,
        boxShadow: "0 0 10px #008080",
      }}
    >
      <Tilt options={defaultOptions}>
        <CardMedia
          component="img"
          height="200"
          image={imgPath}
          alt="card-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {description}
          </Typography>
          {ghLink ? (
            <Button variant="contained" href={ghLink} target="_blank">
              <GitHubIcon sx={{ marginRight: "0.5rem" }} />
              GitHub
            </Button>
          ) : null}
          {demoLink ? (
            <Button
              variant="contained"
              href={demoLink}
              target="_blank"
              sx={{ marginLeft: "0.5rem" }}
            >
              <LanguageIcon sx={{ marginRight: "0.5rem" }} />
              Demo
            </Button>
          ) : null}
        </CardContent>
      </Tilt>
    </Card>
  );
}
export default ProjectCard;
