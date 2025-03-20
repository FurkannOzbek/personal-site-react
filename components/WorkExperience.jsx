"use client";
import FadeInSection from "./FadeInSection";
import SectionTitle from "./SectionTitle";
import { Box } from "@mui/material";

export default function WorkExperience() {
  return (
    <FadeInSection>
      <Box
        component="section"
        sx={{
          display: "flex",
          ml: { lg: "30%", md: "15%", sm: "5%", xs: "1%" },
          mr: { lg: "20%", md: "15%", sm: "5%", xs: "1%" },
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "50px",
          color: "#ccd6f6",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        {/* Title */}
        <SectionTitle title={"Work Experience"} />
      </Box>
    </FadeInSection>
  );
}
