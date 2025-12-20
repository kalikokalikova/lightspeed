import backgroundImage from "../../../assets/gorgon.png";
import { Box, Typography } from "@mui/material";
import NavDrawer from "../../NavDrawer";

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingBottom: "100px",
  };

const bannerStyle = {
color: "#00000099",
    backgroundColor: "#ffffff94",
    marginTop: "147px",
    // fontWeight: "700",
    textAlign: "center",
    whiteSpace: "nowrap",
    fontSize: { xs: "18rem", md: "7rem" },
}

export default function Gorgon() {
    return (
        <Box sx={backgroundStyle}>
            <NavDrawer/>
            <Typography variant="h1" sx={bannerStyle}>Gorgon was here</Typography>
            <Typography>Secrets are coming...</Typography>
        </Box>
    )
}