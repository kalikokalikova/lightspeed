import { Box, Avatar, Typography } from "@mui/material";
import gorgonImage from "../assets/footerIcons/gorgon-8bit.jpg";
import commodeImage from "../assets/footerIcons/toilet-8bit.jpg";
import emailImage from "../assets/footerIcons/email-8bit.jpg";
import stonedCookingImage from "../assets/footerIcons/fried-egg-8bit.jpg";
import githubImage from "../assets/footerIcons/github-8bit.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconStyle = {
    width: "40px",
    height: "40px",
    margin: "15px 15px 0 0",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0f0b18",
        padding: "25px",
      }}
    >
      <Box>
        <Typography>©{currentYear}, Calico Seders.</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap"}}>
        <Box>
          <a
            href="https://www.instagram.com/gorgon_songs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar src={gorgonImage} sx={iconStyle} />
          </a>
        </Box>
        <Box>
          <a
            href="https://www.instagram.com/explore/search/keyword/?q=%23commodesihaveknown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar src={commodeImage} sx={iconStyle} />
          </a>
        </Box>
        <Box>
          <a
            href="https://github.com/kalikokalikova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar src={githubImage} sx={iconStyle} />
          </a>
        </Box>
        <Box>
          <a
            href="https://www.instagram.com/itstimeforstooooonedcooking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar src={stonedCookingImage} sx={iconStyle} />
          </a>
        </Box>
        <Box>
          <a
            href="mailto:calico.seders@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar src={emailImage} sx={iconStyle} />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
