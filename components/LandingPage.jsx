import { Box, Typography, Button } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <Box
        component="section"
        sx={{
          justifyContent: "center",
          minHeight: "100vh",
          margin: "20% 25% 0 25%",
        }}
      >
        <Typography
          sx={{ fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace", color: "#64ffda" }}
        >
          Hi, my name is
        </Typography>
        <Typography
          sx={{
            color: "#ccd6f6",
            fontSize: "clamp(40px, 8vw, 80px)",
            fontFamily:
              "Calibre, Inter, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif",
            fontWeight: "500",
          }}
        >
          Furkan Özbek
        </Typography>
        <Typography sx={{ color: "#ccd6f6", fontSize: "22px" }}>I love build websites</Typography>
        <Typography
          sx={{ color: "#8892b0", mt: "2rem", mb: "2rem", fontSize: "15px", width: "75%" }}
        >
          I am a frontend developer with desire to design. Currently I am looking for a job, if you
          would like to contact please hit the button!
        </Typography>
        {/*Contact Button*/}
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: "13px",
            fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            color: "white",
            borderColor: "#64ffda",
            "&:hover": {
              backgroundColor: "#64ffda",
              color: "black",
            },
          }}
        >
          Contact Me
        </Button>
      </Box>
    </>
  );
}
