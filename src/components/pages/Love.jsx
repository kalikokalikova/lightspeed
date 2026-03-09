import backgroundImage from "../../assets/pnwtrees.jpg";
import NavDrawer from "../NavDrawer";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

export default function Love() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <Box sx={backgroundStyle}>
      <NavDrawer />
      <Typography className="main-header">Love</Typography>
      <Box>
        On November 20, 2021, a humble party of humans drove several hours and
        trekked into the rainforest. There, on a big flat rock behind the roots
        of a fallen tree, sheltered by the forest canopy and witnessed by a
        handful of close friends, Evan Bucy and Calico Goodrich were married.{" "}
      </Box>
      <Box>
        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Box>
    </Box>
  );
}
