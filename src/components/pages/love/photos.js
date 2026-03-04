const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

function imageLink(path, width, height, size, extension) {
  return `https://images.react-photo-album.com/hiking/${path}.${width}x${height}.${size}w.${extension}`
}

export const photos = [
  { src: "src/assets/wedding/image_1.jpg", alt: "Hiking boots" },
  {
    src: "src/assets/wedding/image_2.jpg",
    alt: "Purple petaled flowers near a mountain"
  }
]

