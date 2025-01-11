import { Typography } from "@mui/material";
export default function SectionTitle({ title }) {
  return (
    <Typography
      variant="h4"
      component="h4"
      sx={{
        display: "flex",
        fontWeight: "500",
        alignItems: "center",
        fontSize: { xl: "35px", md: "25px" },
        mb: "50px",
        "&::before": {
          display: "flex",
          fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
          counterIncrement: "section",
          content: '"0"counter(section)"."',
          padding: "10px 10px 0 0 ",
          color: "#64ffda",
          fontWeight: "400",
          fontSize: "clamp(16px,3vw,20px)",
        },
        "&::after": {
          display: "flex",
          content: '""',
          width: { lg: "300px", sm: "200px" },
          height: "1px",
          backgroundColor: "#66ffdb21",
          ml: "20px",
        },
      }}
    >
      {title}
    </Typography>
  );
}
