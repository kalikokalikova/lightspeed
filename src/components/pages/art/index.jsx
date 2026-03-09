import { useEffect, useState } from "react";
import gorgonBackground from "../../../assets/gorgon.png";
import sirenBackground from "../../../assets/siren-face-stars.png";
import danceBackground from "../../../assets/siren.jpg";
import upcomingBackground from "../../../assets/betterdays.jpg";
import { Box, Typography, Container } from "@mui/material";
import NavDrawer from "../../NavDrawer";
import SirenContent from "./sirens/SirenContent";
import GorgonContent from "./gorgon/GorgonContent";
import Dance from "./dance/Dance";
import Upcoming from "./Upcoming";
import Resources from "./Resources";

export default function Art() {
  const [activeLink, setActiveLink] = useState("gorgon");
  const [backgroundImage, setBackgroundImage] = useState(gorgonBackground);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundColor: "aliceblue",
  };

  const links = {
    upcoming: {
      label: "upcoming",
      imageUrl: upcomingBackground,
      element: <Upcoming />,
    },
    gorgon: {
      label: "Gorgon",
      imageUrl: gorgonBackground,
      element: <GorgonContent />,
    },
    sirens: {
      label: "The Midnight Sirens",
      imageUrl: sirenBackground,
      element: <SirenContent />,
    },
    dance: {
      label: "dance",
      imageUrl: danceBackground,
      element: <Dance />,
    },
    resources: {
      label: "resources",
      imageUrl: "foo",
      element: <Resources />,
    },
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setBackgroundImage(links[activeLink]["imageUrl"]);
  }, [activeLink]);

  return (
    <Box sx={backgroundStyle}>
      <NavDrawer />
      <Typography
        variant="h1"
        sx={{
          color: "darkred",
          letterSpacing: "10px",
          whiteSpace: "nowrap",
          fontSize: { xs: "13rem", md: "18rem" },
          textAlign: "end",
        }}
      >
        art
      </Typography>

      <Box>
        <Typography>About my art. Some more text</Typography>
        <Box>Subscribe to newslettor</Box>

        <Box
          sx={{
            backgroundColor: "#00000087",
            margin: "1.5rem 0",
            display: { xs: "initial", md: "flex" },
            justifyContent: { xs: "initial", md: "space-evenly" },
          }}
        >
          {Object.entries(links).map(([key, value], index) => (
            <Box
              key={index}
              onClick={() => handleLinkClick(key)}
              sx={{ padding: { xs: "3px 20px", md: "3px 0 "}, marginBottom: { xs: "8px", md: "initial" }, cursor: "pointer", backgroundColor: { xs: "#00000087", md: "initial"} }}
            >
              <Typography
                sx={{
                  fontSize: "1.7rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {value.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box>{links[activeLink].element}</Box>
      </Box>
    </Box>
  );
}
