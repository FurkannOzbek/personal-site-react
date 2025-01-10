import React from "react";
import Box from "@mui/material/Box";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const FadeInSection = ({ children }) => {
  const sectionRef = useFadeInOnScroll();

  return (
    <Box
      ref={sectionRef}
      sx={{
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        margin: "50px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection;
