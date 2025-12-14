import backgroundImage from "../../assets/magnolia.jpg";
import jazzImage from "../../assets/siren.jpg";
import codeImage from "../../assets/code.jpg";
import aboutImage from "../../assets/mugshot.jpg";
import loveImage from "../../assets/love.jpg";
import { Box, Typography, Avatar } from "@mui/material";
import { Link } from "react-router";
import NavDrawer from "../NavDrawer";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const linkStyle = {
    width: 250, height: 250, border: "1px chartreuse solid", marginBottom: "30px"
  }

  return (
    <Box sx={backgroundStyle}>
      <NavDrawer />

      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            margin: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ letterSpacing: "15px", textTransform: "uppercase" }}
          >
            hacker | artist | activist | nerd
          </Typography>
          <Typography
            variant="h1"
          sx={{ color: "darkred", letterSpacing: "10px", marginTop: { xs: "100px", md: "0"} }}
          >
            Calico Seders
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: { xs: "60px", md: "170px" },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: {
            md: "space-evenly",
          },
          alignItems: { xs: "center" }
        }}
      >
        <Link to="/about">
          <Avatar
            sx={linkStyle}
            alt="about"
            src={aboutImage}
          />
        </Link>
        <Link to="/code">
          <Avatar
            sx={linkStyle}
            alt="code"
            src={codeImage}
          />
        </Link>
        <Link to="/jazz">
          <Avatar
            sx={linkStyle}
            alt="jazz"
            src={jazzImage}
          />
        </Link>
        <Link to="/love">
          <Avatar
            sx={linkStyle}
            alt="code"
            src={loveImage}
          />
        </Link>
      </Box>
    </Box>
  );
}
