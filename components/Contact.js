import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "70vh",
        background: "url(https://www.w3schools.com/w3images/parallax3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity:'0.5'
      }}
    >
        <Typography variant="h2" sx={{
            color:'white',
            letterSpacing:'1.5rem'
        }}>CONTACT</Typography>
    </div>
  );
}
