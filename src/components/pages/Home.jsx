import backgroundImage from "../../assets/lightripples.jpg";
import jazzImage from "../../assets/siren.jpg";
import codeImage from "../../assets/code.jpg";
import aboutImage from "../../assets/about.jpg";
import loveImage from "../../assets/love.jpg";
import { Box, Typography, Avatar } from "@mui/material";
import { Link } from 'react-router';
import NavDrawer from "../NavDrawer";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <Box sx={backgroundStyle}>
      <NavDrawer />

      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h4"
            sx={{ letterSpacing: "15px", textTransform: "uppercase" }}
          >
            hacker | artist | activist | nerd
          </Typography>
          <Typography variant="h1" className="major-mono" sx={{ letterSpacing: "10px"}}>
            Calico Seders
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly", marginTop: "170px" }}>
        <Link to="/about"><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="about" src={aboutImage} /></Link>
        <Link to="/code"><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="code" src={codeImage} /></Link>
        <Link to="/jazz"><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="jazz" src={jazzImage} /></Link>
        <Link to="/love"><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="code" src={loveImage} /></Link>
      </Box>
    </Box>
  );
}
