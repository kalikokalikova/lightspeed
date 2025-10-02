import sirenImage from "../../../assets/siren-face-stars.png";
import { Box, Typography } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";

export default function Sirens() {
  return (
    <Box sx={{ backgroundColor: "#cbccff", padding: "40px" }}>
      <img src={sirenImage} alt="Siren face with stars" />
      <Box sx={{ marginBottom: "20px"}}>

        <Typography variant="h2" className="herculanum" sx={{ color: "#250288", textAlign: "center" }}>
          The Midnight Sirens
        </Typography>
        <Box>
          <Typography variant="h4" className="herculanum" sx={{ color: "#250288", textAlign: "center" }}>
            All Ladies Jazz Band <StarBorder /> Seattle, WA
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography>
          The Midnight Sirens lept fully-formed from the helmut of drummer
          Courtney H., who dreamt of leading an all ladies jazz band. Spinning
          off from Jazz Night School, the band began to coalesce at the
          beginning of 2025 and continued to accrete members. The Midnight
          Sirens specialize in swinging jazz, bringing a bright and playful
          energy to classic tunes.
        </Typography>

        <Box sx={{ marginTop: "20px"}}>
          <Typography variant="h5" className="herculanum" sx={{ textAlign: "center" }}>Septet Lineup</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>Drums</Typography>
            <StarBorder />
            <Typography>Piano</Typography>
            <StarBorder />
            <Typography>Bass</Typography>
            <StarBorder />
            <Typography>Saxophone</Typography>
            <StarBorder />
            <Typography>Flute</Typography>
            <StarBorder />
            <Typography>Banjo</Typography>
            <StarBorder />
            <Typography>Vocals</Typography>
          </Box>
          <br></br>

          <Typography variant="h5" className="herculanum" sx={{ textAlign: "center" }}>Quartet Lineup</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>Drums</Typography>
            <StarBorder />

            <Typography>Bass</Typography>
            <StarBorder />
            <Typography>Saxophone</Typography>
            <StarBorder />

            <Typography>Banjo</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
