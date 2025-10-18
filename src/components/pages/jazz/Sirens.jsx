import sirenImage from "../../../assets/sirens-header.png";
import { Box, Typography } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import CanvaEmbed from "./CanvaEmbed";

const textStyles = {
  fontSize: "1.2rem",
  lineHeight: "1.7",
};
const starStyles = {
  margin: "0 8px",
};

export default function Sirens() {
  return (
    <Box sx={{ backgroundColor: "#cbccff", padding: "80px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}
      >
        <img src={sirenImage} alt="Siren face with stars" />
      </Box>

      <Box>
        <Typography sx={textStyles}>
          The Midnight Sirens lept fully-formed from the helmet of drummer
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
            sx={{ textAlign: "center" }}
          >
            Septet Lineup
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              alignItems: "center",
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
