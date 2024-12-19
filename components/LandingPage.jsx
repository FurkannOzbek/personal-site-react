import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

export default function LandingPage() {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          ml: { lg: "20%", md: "15%", sm: "15%" },
          alignItems: {
            xs: "center",
            sm: "normal",
            md: "normal",
            lg: "normal",
          },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            color: "#64ffda",
            fontSize: "15px",
          }}
        >
          Hi, my name is
        </Typography>
        <Typography
          sx={{
            color: "#ccd6f6",
            fontSize: { lg: "80px", md: "70px", sm: "60px", xs: "50px" },
            fontFamily:
              "Calibre, Inter, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif",
            fontWeight: "500",
          }}
        >
          Furkan Özbek
        </Typography>
        <Typography sx={{ color: "#ccd6f6", fontSize: "22px" }}>I love build websites</Typography>
        <Typography
          sx={{
            color: "#8892b0",
            mt: { lg: "2rem", xs: "1rem" },
            mb: "2rem",
            fontSize: "15px",
            width: { lg: "35%", md: "60%", sm: "70%", xs: "80%" },
            textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
          }}
        >
          I am a frontend developer with desire to design. Currently I am looking for a job, if you
          would like to contact please hit the button!
        </Typography>
        {/*Contact Button*/}
        <CustomButton name={"Contact Me"} width={{ xs: "40%", sm: "30%", md: "15%", lg: "10%" }} />
      </Box>
    </>
  );
}
