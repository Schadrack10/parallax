import PersonIcon from "@mui/icons-material/Person";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LaptopIcon from '@mui/icons-material/Laptop';
import ImageIcon from '@mui/icons-material/Image';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "150vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "gray",
        paddingLeft: "120px",
        paddingRight: "120px",
      }}
    >
      <Typography variant="h4">ABOUT ME</Typography>
      <Typography variant="P">I LOVE PHOTOGRAPHY</Typography>

      <Typography
        variant="p"
        sx={{
          // width:'',
          fontSize: "16px",
          lineHeight: "1.5rem",
        }}
      >
        We have created a fictional "personal" website/blog, and our fictional
        character is a hobby photographer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PersonIcon />
              <Typography variant="h6">My Name</Typography>
            </Box>
            <img
              src="https://www.w3schools.com/w3images/avatar_hat.jpg"
              alt=""
              style={{
                height: "250px",
                width: "350px",
                objectFit: "contain",
                opacity: "0.9",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                width: "80%",
                fontSize: "16px",
                lineHeight: "1.5rem",
                padding: "16px",
              }}
            >
              Welcome to my website. I am lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          minHeight: "50vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">I`m Really Good At</Typography>
        </Box>

        <Stack sx={{
            marginTop:'8px',
            marginBottom:'8px',
            background:'#eee'
        }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            >
            <CameraAltIcon />
            <Typography variant="h6" sx={{
                marginLeft:'16px'
            }}>P H O T O G R A P H Y</Typography>
          </Box>
          <Box
            sx={{
              background: "gray",
              width: "90%",
              height: "30px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            90%
          </Box>
        </Stack>

        <Stack sx={{
            marginTop:'8px',
            marginBottom:'8px',
            background:'#eee'
        }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LaptopIcon />
            <Typography variant="h6" sx={{
                marginLeft:'16px'
            }}>W E B  D E S I G N</Typography>
          </Box>
          <Box
            sx={{
              background: "gray",
              width: "80%",
              height: "30px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            80%
          </Box>
        </Stack>

        <Stack sx={{
            marginTop:'8px',
            marginBottom:'8px',
            background:'#eee'
        }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ImageIcon />
            <Typography variant="h6" sx={{
                marginLeft:'16px'
            }}>P H O T O S H O P</Typography>
          </Box>
          <Box
            sx={{
              background: "gray",
              width: "75%",
              height: "30px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            75%
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
