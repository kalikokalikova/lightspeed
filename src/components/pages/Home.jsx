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
    backgroundRepeat: "repeat",
    minHeight: "100vh",
  };

  const linkStyle = {
    width: 250,
    height: 250,
    border: "1px chartreuse solid",
    marginBottom: "30px",
  };

  return (
    <Box sx={backgroundStyle}>
      <NavDrawer />

      {/* HEADER TEXT */}
      <Box
        // sx={{
        //   backgroundColor: {
        //     md: "blue",
        //   },
        // }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              letterSpacing: "15px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              textAlign: { md: "end" },
            }}
          >
            hacker | artist | activist | nerd
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "darkred",
              letterSpacing: "10px",
              whiteSpace: "nowrap",
              fontSize: { xs: "18rem", md: "7rem" },
              textAlign: "end",
            }}
          >
            Calico Seders
          </Typography>
        </Box>
      </Box>

      {/* LINKS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          marginTop: {xs: "-120px"},
          alignItems: "center",
          justifyContent: { xs: "space-evenly", md: "row"},
          transform: {md: "translate(0%, 106%)"}
        }}
      >
        <Link to="/about">
          <Avatar sx={linkStyle} alt="about" src={aboutImage} />
        </Link>
        <Link to="/code">
          <Avatar sx={linkStyle} alt="code" src={codeImage} />
        </Link>
        <Link to="/jazz">
          <Avatar sx={linkStyle} alt="jazz" src={jazzImage} />
        </Link>
        <Link to="/love">
          <Avatar sx={linkStyle} alt="code" src={loveImage} />
        </Link>
      </Box>
    </Box>
  );
}
