import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/garbo-8bit.jpg";
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
    fontSize: "1.2rem",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  return (
    <>
      <Box sx={backgroundStyle}>
        <Typography
            className="main-header"
          >
            About
          </Typography>
        <NavDrawer />
        <Box
          sx={{
            color: "white",
            backgroundColor: "#000000ba",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <Typography sx={paragraphStyle}>
            Calico Seders is a true renaissance woman and a hacker at heart, who
            has spent her entire life flying in the face of conventional wisdom.
            Her checkered past includes a stint in the U.S. Navy,
            bagel-slinging, spice-mongering, and many years as a performer and
            dance teacher before becoming a software developer. She has a B.A.
            in Lingustics, which allows her to win every grammar argument on the
            internet. At parties she gets drunk and diagrams sentences.
          </Typography>

            <Typography sx={paragraphStyle}>In 2019
            she took a detour from programming to go to law school, where she
            focused on civil rights, racial justice, and prison abolition. She
            graduated with a Masters in Jurisprudence from the University of
            Washington with top honors.</Typography>

          <Typography sx={paragraphStyle}>
            After more than 20 years of devotion to lindy hop and other vintage
            vernacular African American dances, she decided to become a musician
            and picked up the double bass. Her main musical inspiration is
            swinging jazz of the 1930s, but she is also influenced by the
            pre-swing New Orleans trad sound, the traditional rhythms and dances
            of Guinea, and protest punk brass bands.
          </Typography>

          <Typography sx={paragraphStyle}>
            By day she builds digital
            tools for labor organizing, and by night she plays in a seven-piece
            all ladies jazz band (The Midnight Sirens), the quartet offshoot of
            same, and at least one secret band. She is eternally grateful for
            the community of jazz weirdos and music nerds who have embraced her.
          </Typography>

          <Typography sx={paragraphStyle}>
            Calico currently lives in Seattle, and can never leave the Pacific
            Northwest because she is a rare species of mushroom.
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
