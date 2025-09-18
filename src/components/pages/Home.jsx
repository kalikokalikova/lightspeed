import backgroundImage from "../../assets/darkwater.jpg";
import jazzImage from "../../assets/siren.jpg";
import codeImage from "../../assets/codes.jpg";
import aboutImage from "../../assets/about.jpg";
import { Box, Typography, Avatar } from "@mui/material";
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
          <Typography variant="h1" className="major-mono">
            Calico Seders
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="jazz" src={aboutImage} /></Box>
        <Box><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="jazz" src={jazzImage} /></Box>
        <Box><Avatar sx={{ width: 250, height: 250, border: "18px red dotted" }} alt="jazz" src={codeImage} /></Box>
      </Box>
    </Box>
  );
}
