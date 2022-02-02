import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Work = () => {
  return (
    <Box
      sx={{
        height: "auto",
        padding: "10px",
        width: "100%",
      }}
    >
      <Typography variant="h5" align="center" style={{ color: "grey" }}>
        MY WORK
      </Typography>
      <Typography
        variant="h6"
        align="center"
        style={{ color: "grey", textAlign: "center", fontSize: "14px" }}
      >
        Here are some of my latest lorem work ipsum tipsum. <br /> Click on the
        images to make them bigger
      </Typography>
      {/* grids */}
      <Grid container sx={{ padding: "10px 80px" }}>
        <Grid item md={3} sm={6} sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p1.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={3} sm={6}  sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p2.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={3} sm={6}  sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p3.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={3} sm={6}  sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p4.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      {/* grids */}
      <Grid container sx={{ padding: "0px 80px" }}>
        <Grid item md={3} sm={6}  sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p7.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={3} sm={6}  sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p6.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={3} sm={6} sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p1.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={3} sm={6} sx={{ height: "200px", padding: "10px" }}>
          <img
            src="p2.jpg"
            alt="image"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding:"10px"
        }}
      >
        <Button
          variant="contained"
          elevation ="none"
          sx={{ background: "lightgrey", color: "black" , margin: "0 auto" ,'&:hover':{
              background:"darkgrey"
          } }}
        >
          LOAD MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Work;
