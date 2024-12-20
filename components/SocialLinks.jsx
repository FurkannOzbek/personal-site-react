import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialLinks() {
  const socialIconsMap = {
    Github: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    Instagram: <InstagramIcon />,
  };
  const socialLinks = {
    Github: "https://github.com/FurkannOzbek",
    LinkedIn: "https://www.linkedin.com/in/fuozbek/",
    Instagram: "https://www.instagram.com/fu.ozbek/",
  };

  return (
    <Box
      component="div"
      sx={{
        bottom: "0px",
        position: "fixed",
        left: "40px",
        width: "40px",
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
