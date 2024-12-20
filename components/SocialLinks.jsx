import { Box, Link } from "@mui/material";

import { socialIconsMap, socialLinks } from "@/constants/socialMedia";

export default function SocialLinks() {
  return (
    <Box
      component="div"
      sx={{
        bottom: "0px",
        position: "fixed",
        left: "40px",
        width: "40px",
        display: { lg: "block", md: "block", sm: "block", xs: "none" },
        zIndex: "1000",
        "&::after": {
          content: '""',
          display: "block",
          width: "1px",
          height: "90px",
          margin: "0 auto",
          backgroundColor: "#a8b2d1",
        },
      }}
    >
      {Object.keys(socialIconsMap).map((item) => (
        <Link
          target="_blank"
          key={item}
          sx={{
            display: "flex",
            height: "60px",
            color: "#fff4f6",
            justifyContent: "center",
            "&:hover": { color: "#64ffda", transform: "translateY(-5px)" },
            transition: "transform 0.2s ease, color 0.2s ease",
          }}
          href={socialLinks[item]}
        >
          {socialIconsMap[item]}
        </Link>
      ))}
    </Box>
  );
}
