import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import {photos} from "./photos";

// import photos from "./photos";
// const photos = [
//   { src: "src/assets/wedding/image_1.jpg", width: 800 },
//   { src: "src/assets/wedding/image_2.jpg", width: 1600, height: 900 },
// ];

export default function Gallery() {
  return <RowsPhotoAlbum photos={photos} />;
}