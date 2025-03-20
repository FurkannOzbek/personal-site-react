import { Button } from "@mui/material";
export default function ExperienceButtons({ title }) {
  return (
    <Button
      sx={{
        textAlign: "left",
        textTransform: "none", // Disable MUI Default Upper Case for Button Text
        color: "#64FED9",
        position: "relative",
        display: "inline-block",
        pl: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "#49515A",
        },
      }}
    >
      {title}
    </Button>
  );
}
