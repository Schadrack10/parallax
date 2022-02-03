import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import { Button } from "@mui/material";
import Button from "@mui/material/Button";


const Location = () => {
  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={5}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              background: `url(map.jpg)`,
              backgroundSize: "cover",
              height: "203px",
              width: "283px",
              borderRadius: "10px",
              margin: "0 30px",
            }}
          >
          </Box>
        </Grid>
        <Grid item md={7} sx={{}}>
          <Box
            sx={{
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: " #777;",
                margin: "10px 0",
                fontSize: "25px",
                fontFamily: "Lato",
              }}
            >
              Where i work
            </Typography>
            <Typography variant="p" sx={{ color: " #777" }}>
              <i>I'd love your feed Back</i>
            </Typography>
          </Box>
          <Box
            sx={{ height: "400px", display: "flex", flexDirection: "column" }}
          >
            <Typography variant="p" sx={{ color: " #777", margin: "10px 0" }}>
              <i>Chicago, US</i>
            </Typography>
            <Typography variant="p" sx={{ color: " #777", margin: "10px 0" }}>
              <i> Phone: +00 151515</i>
            </Typography>
            <Typography variant="p" sx={{ color: " #777", margin: "10px 0" }}>
              <i>Email: mail@mail.com</i>
            </Typography>

            <Typography variant="p" sx={{ color: " #777", margin: "20px 0" }}>
              Swing by for a cup of , or leave me a note:
            </Typography>
            <form
              action="process.php"
              method="post"
              style={{ margin: "10px 0" }}
            >
              <input
                type="text"
                placeholder="Name"
                name=""
                id=""
                style={{
                  width: "200px",
                  height: "40px",
                  border: "1px solid #777",
                  padding:"10px"
                }}
              />{" "}
              <input
                type="text"
                placeholder="Email"
                style={{
                  width: "200px",
                  height: "40px",
                  border: "1px solid #777",
                  padding: "10px",
                }}
              />
              <Box sx={{ margin: "10px 0" }}>
                <textarea
                  placeholder="message"
                  style={{
                    width: "400px",
                    border: "1px solid #777",
                    padding: "10px",
                  }}
                ></textarea>
              </Box>
              <Button type="submit" variant="contained" sx={{background:"black", width:"100px", marginLeft:"auto"}}>SEND</Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
