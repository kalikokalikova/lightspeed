import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/about.jpg";
import NavDrawer from "../NavDrawer";

export default function About() {
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
      <Box
        sx={{
          width: "500px",
          color: "gray",
          position: "fixed",
          top: "250px",
          paddingLeft: "20px",
        }}
      >
        <Typography className="major-mono" sx={{ textTransform: "uppercase"}}>About</Typography>
        <Typography>
          Calico Seders is a true renaissance woman and a hacker at heart, who
          has spent her entire life flying in the face of conventional wisdom.
          Her checkered past includes a stint in the U.S. Navy, bagel-slinging,
          spice-mongering, and many years as a performer and dance teacher
          before becoming a software developer. She has a B.A. in Lingustics,
          which allows her to win every grammar argument on the internet. At
          parties she gets drunk and diagrams sentences. In 2019 she took a
          detour from programming to go to law school, where she focused on
          civil rights, racial justice, and prison abolition. She graduated with
          a Masters in Jurisprudence from the University of Washington with top
          honors. Unable to quit hacking, she dusted off her chops and dove back
          into the world of tech with gusto. She currently volunteers as a
          developer at Clearviction. Calico lives in Seattle, and can never
          leave the Pacific Northwest because she is a rare species of mushroom.
          She drinks several cups of tea a day.
        </Typography>
      </Box>
    </Box>
  );
}
