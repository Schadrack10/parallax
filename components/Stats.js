import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Stats() {
  function StatsBlock({number , text}) {
    return (
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            minHeight: "150px",
            color:'white',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">{number}</Typography>
            <Typography variant="h6"> {text}</Typography>
          </Stack>
        </Box>
      </Grid>
    );
  }
  return (
    <Box
      sx={{
        minHeight: "150px",
        background: "grey",
        // marginBottom:'16px',
      }}
    >
      <Grid container>
          <StatsBlock number={"14+"} text={"Partners"} /> 
          <StatsBlock number={"55+"} text={"Projects"} /> 
          <StatsBlock number={"89+"} text={"Happy Clients"} /> 
          <StatsBlock number={"150+"} text={"Meetings"} /> 
      </Grid>
    </Box>
  );
}
