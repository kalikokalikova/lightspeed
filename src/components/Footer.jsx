import { Box, Avatar, Typography } from "@mui/material";
import EggAltIcon from "@mui/icons-material/EggAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutline from "@mui/icons-material/MailOutline";
import gorgonImage from "../assets/gorgon.png";
import commodeImage from "../assets/commode.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

    const iconStyle = {
    width: "40px",
    height: "40px",
    marginLeft: "20px",
    fontSize: '4rem'
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0f0b18",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px",
      }}
    >
      <Typography>©{currentYear}, Calico Seders.</Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <a
            href="https://www.instagram.com/gorgon_songs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              src={gorgonImage}
              sx={iconStyle}
            />
          </a>
        </Box>
        <Box>
          <a
            href="https://www.instagram.com/explore/search/keyword/?q=%23commodesihaveknown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              src={commodeImage}
              sx={{...iconStyle,
                backgroundColor: "aquamarine"}}
            />
          </a>
        </Box>
        <Box>
          <a
            href="https://github.com/kalikokalikova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{...iconStyle,
                color: "mediumpurple"}}

            />
          </a>
        </Box>
        <Box>
          <a
            href="https://www.instagram.com/itstimeforstooooonedcooking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EggAltIcon
              sx={{
              ...iconStyle, color: "white"
              }}
            />
          </a>
        </Box>
        <Box>
          <a
            href="mailto:calico.seders@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutline
              sx={{
                ...iconStyle,
                color: "lightblue",
              }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
