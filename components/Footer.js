import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "grey",
      }}
    >
      <Button
        disableElevation
        variant="contained"
        sx={{ background: "white", color: "black" }}
        startIcon={<ArrowUpwardIcon />}
      >
        Back to Top
      </Button>
      <Box
        sx={{
          display: "flex",
          marginTop: "16px",
          marginBottom: "16px",
        }}
      >
        <FacebookIcon />
        <InstagramIcon />
        <PinterestIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </Box>
      <Typography
        variant="p"
        sx={{
          color: "white",
          letterSpacing: "1",
        }}
      >
        Powered by w3.css
      </Typography>
    </div>
  );
}
