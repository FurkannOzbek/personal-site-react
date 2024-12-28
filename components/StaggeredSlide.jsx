"use client";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

const slideInFromTop = keyframes`
0% {
top: -200px;
opacity:0;
visibility:hidden;
}
100% {
top:0;
opacity:1;
visibility:visible;
}
`;

export const StaggeredSlide = ({ children, visibleStates }) => {
  return React.Children.map(children, (child, index) => {
    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xl: "flex-start",
            lg: "flex-start",
            md: "flex-start",
            sm: "center",
            xs: "center",
          },
          position: "relative",
          top: "-200px",
          opacity: 0,
          visibility: "hidden",
          animation: visibleStates[index] ? `${slideInFromTop} 1s ease` : "none",
          animationFillMode: "forwards",
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {child}
      </Box>
    );
  });
};
