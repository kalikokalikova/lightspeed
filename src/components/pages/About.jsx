import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/about.jpg";
import NavDrawer from "../NavDrawer";

export default function About() {
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

  const paragraphStyle = {
    marginTop: "20px",
    lineHeight: "1.6",
  };

  return (
    <>
      <Box sx={backgroundStyle}>
        <NavDrawer />
        <Box
          sx={{
            width: "500px",
            color: "gray",
            backgroundColor: "#eeeeee85",
            borderRadius: "10px",
            margin: "10px",
            padding: "20px",
            mt: "250px",
          }}
        >
          <Typography
            variant="h4"
            className="major-mono"
            sx={{ textTransform: "uppercase" }}
          >
            About
          </Typography>
          <Typography sx={paragraphStyle}>
            Calico Seders is a true renaissance woman and a hacker at heart, who
            has spent her entire life flying in the face of conventional wisdom.
            Her checkered past includes a stint in the U.S. Navy,
            bagel-slinging, spice-mongering, and many years as a performer and
            dance teacher before becoming a software developer. She has a B.A.
            in Lingustics, which allows her to win every grammar argument on the
            internet. At parties she gets drunk and diagrams sentences. In 2019
            she took a detour from programming to go to law school, where she
            focused on civil rights, racial justice, and prison abolition. She
            graduated with a Masters in Jurisprudence from the University of
            Washington with top honors.
          </Typography>
          <Typography sx={paragraphStyle}>
            At the ripe age of 42, with no musical background whatsoever, she
            decided to become a musician and chose to play the double bass,
            because it's the coolest instrument. This has turned out to be one
            of the best decisions she ever made. By day she builds digital tools
            for labor organizing, and by night she plays in a seven-piece all
            ladies jazz band (The Midnight Sirens), the quartet offshoot of
            same, and at least one secret band.
          </Typography>
          <Typography sx={paragraphStyle}>
            Inspired by the music of lindy hop, traditional Guinean drumming, and
            protest punk brass bands, she is eternally grateful for the
            community of jazz weirdos and music nerds who have embraced her.
          </Typography>
          <Typography sx={paragraphStyle}>
            Calico lives in Seattle, and can never leave the Pacific Northwest
            because she is a rare species of mushroom.
          </Typography>
          <Typography sx={paragraphStyle}>
            She loves both coffee and tea but if she had to choose, she'd choose
            tea.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
