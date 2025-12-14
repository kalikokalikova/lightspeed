// src/theme.js
import { createTheme } from '@mui/material/styles';

const tpTheme = createTheme({
  typography: {
    // 💡 This is the key step: Set your font family here
    fontFamily: [
      'ITC-AG-Gothic', // Your font name from the @font-face rule
      'Roboto',         // Fallback standard font (always good practice)
      'Arial',
      'sans-serif',
    ].join(','),

    // You can also apply your font to specific variants if needed
    h1: {
    //   fontFamily: 'ITC-AG-Gothic',
      fontWeight: 500,
      textTransform: "uppercase",
    },
    // body1: {
    //   fontFamily: 'My Custom Font',
    //   fontWeight: 400,
    // }
  },
  // Add other customizations (palette, components, etc.) here
});

export default tpTheme;