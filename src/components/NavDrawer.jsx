import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import navIcon from "../assets/underpantsrat.jpg";
import { Height } from "@mui/icons-material";
import { Typography } from "@mui/material";

const navIconStyle = {
  backgroundImage: `url(${navIcon})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "130px",
  width: "170px",
  cursor: "pointer",
};

export default function NavDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navLinks = [
    { name: "home", url: "" },
    { name: "about", url: "" },
    { name: "jazz", url: "" },
    { name: "code", url: "" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((element, index) => (
          <ListItem key={element.name} disablePadding>
            <ListItemButton>
              <Typography
                className="major-mono"
                sx={{ textTransform: "uppercase" }}
              >
                {element.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "fixed", left: 0, top: "50px" }}>
      <Box onClick={toggleDrawer(true)} sx={navIconStyle}></Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
