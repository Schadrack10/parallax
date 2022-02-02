import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Location = () => {
  return (
    <Box>
      <Grid container sx={{ border: "1px solid red", height: "100vh" }}>
        <Grid item md={6} sx={{ border: "1px solid red", display: "flex",alignItems:"center",justifyContent:"center" }}>
          <Box
            sx={{
              background: `url(map.jpg)`,
              backgroundSize: "cover",
              height: "203px",
              width: "283px",
              borderRadius:"10px",
          
            }}
          ></Box>
        </Grid>
        <Grid item md={6} sx={{ border: "1px solid red" }}>
          <Box sx={{height:"100px"}>
          <Typography variant="h6"  >Where i work</Typography>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
