"use client";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle"; // Bullet point icon
import { skills } from "@/constants/skills";

export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        ml: { lg: "20%", md: "15%", sm: "5%", xs: "1%" },
        mr: { lg: "20%", sm: "5%", xs: "1%" },
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
      <Typography
        variant="h4"
        component="h4"
        sx={{
          display: "flex",
          fontWeight: "500",
          alignItems: "center",
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
        About Me
      </Typography>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: "40px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Description Box */}
        <Box
          sx={{
            flex: 3,
            marginRight: { md: "20px" },
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: "400", lineHeight: 1.6, fontSize: "15px" }}
          >
            Hello, my name is Furkan, and I have a passion for designing websites. My journey in web
            development began in 2014 when I created a few websites for people close to me. At that
            time, I primarily used WordPress ready themes and customized them with CSS to achieve
            unique designs.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: "400", lineHeight: 1.6, mt: "30px", fontSize: "15px" }}
          >
            Eventually, I discovered JavaScript and Vue.js, which inspired me to start coding my
            websites from scratch, allowing for greater creativity and functionality.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: "400",
              lineHeight: 1.6,
              mt: "30px",
              color: "#64FED9",
              fontSize: "15px",
            }}
          >
            Currently, I am about to complete an 8-month web development bootcamp at HackYourFuture,
            where I have honed my skills and deepened my understanding of modern web technologies.
            I'm excited to continue exploring the world of web development and creating innovative
            online experiences!
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: "400", lineHeight: 1.6, mt: "30px", fontSize: "15px" }}
          >
            Here are some methods I am familiar with:
          </Typography>

          {/* Skills Grid */}
          <Grid container spacing={0} sx={{ marginTop: "20px" }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <CircleIcon sx={{ fontSize: 8, color: "#64ffda" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: "14px", color: "rgba(235, 235, 235, .64)" }}>
                          {skill}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Image section */}
        {!isMobile && (
          <Box
            sx={{
              flex: 1,
              height: "100%",
              minHeight: "300px",
              minWidth: "150px",
              backgroundImage: "url('/pp.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
