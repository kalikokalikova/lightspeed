import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

// https://dashboard.mailerlite.com/forms/embedded
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const accountId = "2191353";
    const formId = "181956624113469204";
    const MAILERLITE_ACTION_URL = `https://assets.mailerlite.com/jsonp/${accountId}/forms/${formId}/subscribe`;

    try {
      const formData = new FormData();
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("ajax", "1");

      // We use 'no-cors' for simple form submissions to external domains
      await fetch(MAILERLITE_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Signup error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        bgcolor: "#ffffff9c",
        borderRadius: 2,
        boxShadow: 1,
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: "black", textTransform: "uppercase", textAlign: "center", letterSpacing: "2px" }}>
        kaliko.kalikova newsletter
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
        People have asked for it! So here it is. Sign up to get potential
        sporadic updates! I may never write a single update. But you never know.
        No spam tho.
      </Typography>

      {status === "success" ? (
        <Alert severity="success">Check your inbox to confirm!</Alert>
      ) : (
        <>
          <TextField
            fullWidth
            type="email"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            sx={{ mb: 2, backgroundColor: "white" }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              height: "48px",
              bgcolor: "#832222", // Matching the red from your CSS
              "&:hover": { bgcolor: "#333333" },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Subscribe"
            )}
          </Button>

          {status === "error" && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Something went wrong. Try again?
            </Alert>
          )}
        </>
      )}
    </Box>
  );
};

export default Newsletter;
