import backgroundImage from "../../assets/darkwater.jpg";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    padding: "10px 20px"
  };

  return (
    <Box sx={backgroundStyle}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textTransform: "uppercase" }}>
        <Typography
          variant="h1"
          className="rubik"
        >
          Calico Seders
        </Typography>
        <Typography variant="h4" className="ubuntu-sans-mono-regular">
          hacker | artist | activist | nerd
        </Typography>
      </Box>

      <Box>Home</Box>
    </Box>
  );
}
