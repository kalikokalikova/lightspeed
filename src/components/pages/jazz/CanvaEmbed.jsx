import { Box } from "@mui/material";

export default function CanvaEmbed() {
  return (
      <iframe
        loading="lazy"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          marginTop: "30px",
        }}
        src="https://www.canva.com/design/DAG0rQBkg_c/cvacbbyqss9Ne_KgDBkENw/view?embed"
        allowfullscreen="allowfullscreen"
        allow="fullscreen"
      ></iframe>
  );
};
