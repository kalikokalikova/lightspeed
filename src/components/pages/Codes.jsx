import { Box, Typography } from "@mui/material"
import backgroundImage from "../../assets/code.jpg"
import NavDrawer from "../NavDrawer"

export default function Codes() {
  const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    };

  return (
    <Box sx={backgroundStyle}>
      <NavDrawer/>
      <Typography>Code</Typography>
    </Box>
  )
}
