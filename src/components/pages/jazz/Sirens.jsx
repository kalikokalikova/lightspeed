import backgroundImage from "../../../assets/siren-face-stars.svg";
import { Box, Typography } from "@mui/material";
import NavDrawer from "../../NavDrawer";
import StarBorder from "@mui/icons-material/StarBorder";
import CanvaEmbed from "./CanvaEmbed";

const textStyles = {
  fontSize: "1.2rem",
  lineHeight: "1.7",
};
const starStyles = {
  margin: "0 8px",
};

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

export default function Sirens() {
  return (
    <Box sx={{ ...backgroundStyle, padding: "20px", backgroundColor: "#5b6293" }}>
      <NavDrawer />
      <Box sx={{ marginTop: "125px"}}>
        <Typography sx={textStyles}>
          <span className="herculanum">The Midnight Sirens</span> lept fully-formed from the helmet of drummer
          Courtney H., who dreamt of leading an all ladies jazz band. Spinning
          off from Jazz Night School, the band began to coalesce at the
          beginning of 2025 and continued to accrete members. The Midnight
          Sirens specialize in swinging jazz, bringing a bright and playful
          energy to classic tunes.
        </Typography>

        <Box sx={{ marginTop: "30px" }}>
          <Typography
            variant="h4"
            className="herculanum"
            sx={{ textAlign: "center", lineHeight: 1 }}
          >
            Septet Lineup
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography sx={textStyles}>Drums</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Piano</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Bass</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Saxophone</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Flute</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Banjo</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Vocals</Typography>
          </Box>
          <br></br>

          <Typography
            variant="h4"
            className="herculanum"
            sx={{ textAlign: "center" }}
          >
            Quartet Lineup
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography sx={textStyles}>Drums</Typography>
            <StarBorder sx={starStyles} />

            <Typography sx={textStyles}>Bass</Typography>
            <StarBorder sx={starStyles} />
            <Typography sx={textStyles}>Saxophone</Typography>
            <StarBorder sx={starStyles} />

            <Typography sx={textStyles}>Banjo</Typography>
          </Box>
          <Box>
            <CanvaEmbed />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
