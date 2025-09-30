import { Box, Typography } from "@mui/material"
import backgroundImage from "../../../assets/siren.jpg";
import NavDrawer from "../../NavDrawer"


export default function Jazz() {
  const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      // backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      // display: "flex",
      // flexDirection: "column",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundAttachment: "fixed",
      // paddingBottom: "100px",
      width: "50%",
    };

  return (
    <Box sx={{ display: "flex" }}>
      <NavDrawer/>
      <Box sx={backgroundStyle}>Panel 1</Box>
      <Box>Panel 2</Box>
    </Box>
  )
}
