import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import backgroundImage from "../../../assets/siren.jpg";
import sirenLogo from "../../../assets/siren logo.png";
import NavDrawer from "../../NavDrawer";
import Sirens from "./Sirens";
import Gorgon from "./Gorgon";
import DanceImages from "./DanceImages";
import DanceVideos from "./DanceVideos";

// transform: rotate(22deg);

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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Jazz() {
  const [danceOpen, setDanceOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [view, setView] = useState("sirens");

  const handleDanceClick = () => {
    setDanceOpen(!danceOpen);
  };

  const handleMusicClick = () => {
    setMusicOpen(!musicOpen);
  };

  const Panel = ({view}) => {
    if (view === "gorgon") {
      return <Gorgon />;
    } else if (view === "danceImages") {
      return <DanceImages />;
    } else if (view === "danceVideos") {
      return <DanceVideos />;
    } else {
      return <Sirens />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavDrawer />
      <Box sx={backgroundStyle}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "#ffffffcf",
            borderRadius: "8px",
            color: "blue",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleMusicClick}>
            <ListItemText primary="Music" />
            {musicOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={musicOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setView("sirens")}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="The Midnight Sirens" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setView("gorgon")}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Gorgon" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleDanceClick}>
            <ListItemText primary="Dance" />
            {danceOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={danceOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setView("danceImages")}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Images" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setView("danceVideos")}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Videos" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Panel view={view} />
      </Box>
    </Box>
  );
}
