"use client";
import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import { StaggeredSlide } from "./StaggeredSlide";
import { useStaggeredAnimation } from "@/hooks/useStaggeredAnimation";
import { useTheme, useMediaQuery } from "@mui/material";

export default function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const typographyVisibility = isMobile
    ? useStaggeredAnimation(5, 200, 500)
    : useStaggeredAnimation(5, 200, 2500);
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          ml: { lg: "20%", md: "15%", sm: "0" },
          alignItems: {
            xs: "center",
            sm: "normal",
            md: "normal",
            lg: "normal",
          },
          justifyContent: "center",
        }}
      >
        <StaggeredSlide visibleStates={typographyVisibility} timeout={700}>
          <Typography
            sx={{
              fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
              color: "#64ffda",
              fontSize: { xl: "16px", lg: "15px", md: "12px" },
            }}
          >
            Hi, my name is
          </Typography>
          <Typography
            sx={{
              color: "#ccd6f6",
              fontSize: { xl: "60px", lg: "60px", md: "50px", sm: "60px", xs: "50px" },
              fontFamily:
                "Calibre, Inter, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif",
              fontWeight: "500",
            }}
          >
            Furkan Özbek
          </Typography>
          <Typography
            sx={{
              color: "#ccd6f6",
              fontSize: { xl: "25px", lg: "20px", md: "15px", sm: "20px", xs: "20px" },
            }}
          >
            I love build websites
          </Typography>
          <Typography
            sx={{
              color: "#8892b0",
              justifyContent: "center",
              mt: { lg: "2rem", xs: "1rem" },
              mb: "2rem",
              fontSize: { xl: "15px", lg: "12px", md: "12px", sm: "15px", xs: "12px" },
              width: { lg: "35%", md: "60%", sm: "70%", xs: "80%" },
              textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
            }}
          >
            I am a frontend developer with desire to design. Currently I am looking for a job, if
            you would like to contact please hit the button!
          </Typography>
          {/*Contact Button*/}
          <CustomButton
            name={"Contact Me"}
            width={{ xs: "100%", sm: "25%", md: "15%", lg: "15%" }}
            fontSize={{ xl: "15px" }}
          />
        </StaggeredSlide>
      </Box>
    </>
  );
}
