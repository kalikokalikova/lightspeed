import { useEffect, useState } from "react";
import gorgonBackground from "../../assets/gorgon.png";
import sirenBackground from "../../assets/siren-face-stars.svg";
import { Box, Typography, Container } from "@mui/material";
import NavDrawer from "../NavDrawer";
import { Media as GorgonMedia } from "./art/gorgon/Media";
import { Upcoming as GorgonUpcoming } from "./art/gorgon/Upcoming";
import { Media as SirenMedia } from "./art/sirens/Media";
import { Upcoming as SirenUpcoming } from "./art/sirens/Upcoming";

export default function Art() {
  const [activeLink, setActiveLink] = useState("gorgon");
  const [activeSublink, setActiveSublink] = useState("upcoming");
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
    gorgon: {
      label: "Gorgon",
      imageUrl: gorgonBackground,
      subLinks: [
        { id: "upcoming", label: "Upcoming", element: <GorgonUpcoming /> },
        { id: "media", label: "Media", element: <GorgonMedia /> },
      ],
    },
    sirens: {
      label: "The Midnight Sirens",
      imageUrl: sirenBackground,
      subLinks: [
        { id: "upcoming", label: "Upcoming", element: <SirenUpcoming /> },
        { id: "media", label: "Media", element: <SirenMedia /> },
      ],
    },
  };

  const sublinkData = links[activeLink]["subLinks"].find(
    (sub) => sub.id === activeSublink,
  );

  const handleLinkClick = (link) => {
    console.log(link);
    setActiveLink(link);
  };

  const handleSublinkClick = (sublink) => {
    console.log(sublink);
    setActiveSublink(sublink);
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

      <Box sx={{ margin: "0 20px" }}>
        <Typography>About my art. Some more text</Typography>
        <Box>Subscribe to newslettor</Box>

        <Box sx={{ margin: "1.5rem 0" }}>
          {Object.entries(links).map(([key, value], index) => (
            <Box key={index} onClick={() => handleLinkClick(key)}>
              <Typography sx={{ fontSize: "1.5rem", textTransform: "uppercase"}}>{value.label}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around", margin: "1.5rem 0"}}>
          {links[activeLink].subLinks.map((sublink) => (
            <Box onClick={() => handleSublinkClick(sublink.id)}>
              <Typography>{sublink.label}</Typography>
            </Box>
          ))}
        </Box>

        <Box>{sublinkData.element}</Box>
      </Box>
    </Box>
  );
}
