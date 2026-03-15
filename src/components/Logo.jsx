import { Box } from "@mui/material";

const Logo = ({ width, height, size = 40, color = "#832222", ...props }) => {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={width || size || 80} // Defaults to size, or 80 if nothing is passed
      height={height || size || 40}
      viewBox="38 72 21 8"
      fill="none"
      {...props}
    >
        <title>Kaliko Kalikova</title>
      <path
        d="m50.542 81.087c1.6002 0 2.4384-0.7493 2.5273-2.2606 0.8636 1.27 2.5908 2.2606 5.5372 2.2606v-2.1971c-2.2098 0-3.7211-1.1811-3.9116-2.8194 2.5273-0.3683 3.9116-1.3589 3.9116-3.6068h-3.937c0 1.3716-0.2032 2.159-1.5875 2.4384v-2.4384h-3.937v5.6642c0 0.508-0.254 0.762-0.762 0.762h-0.1397v2.1971z"
        fill={color}
      />
      <path
        d="m46.847 81.087c-1.6002 0-2.4384-0.7493-2.5273-2.2606-0.8636 1.27-2.5908 2.2606-5.5372 2.2606v-2.1971c2.2098 0 3.7211-1.1811 3.9116-2.8194-2.5273-0.3683-3.9116-1.3589-3.9116-3.6068h3.937c0 1.3716 0.2032 2.159 1.5875 2.4384v-2.4384h3.937v5.6642c0 0.508 0.254 0.762 0.762 0.762h0.1397v2.1971z"
        fill={color}
      />
    </Box>
  );
};

export default Logo;
