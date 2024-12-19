import { Button } from "@mui/material";

export default function CustomButton({ name, width, marginR }) {
  return (
    <Button
      variant="outlined"
      sx={{
        mr: marginR,
        width: width,
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
      {name}
    </Button>
  );
}
