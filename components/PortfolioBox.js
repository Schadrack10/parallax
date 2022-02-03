import Typography from "@mui/material/Typography";

export default function PortfolioBox() {
  return (
    <div
      style={{
        minHeight: "70vh",
        background: "url(https://www.w3schools.com/w3images/parallax2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Typography variant="h2" sx={{
            color:'white',
            letterSpacing:'1.5rem'
        }}>PORTFOLIO</Typography>
    </div>
  );
}
