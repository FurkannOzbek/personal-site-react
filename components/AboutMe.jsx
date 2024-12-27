import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle"; // Bullet point icon

export default function AboutMe() {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Vue.js",
    "HTML5",
    "CSS3 (Flexbox, Grid)",
    "Node.js & Express",
    "Git & GitHub",
    "RESTful APIs",
    "Responsive Web Design",
  ];
  return (
    <>
      {/* Container for About Me section and Image side by side */}
      <Box
        component="section"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          ml: "20%",
          padding: "100px",
          color: "#ccd6f6",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        {/* About Me Content Box */}
        <Box
          component="div"
          sx={{
            flex: 1,
            marginRight: "20px",
          }}
        >
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
                width: "300px",
                height: "1px",
                backgroundColor: "#66ffdb21",
                ml: "20px",
              },
            }}
          >
            About Me
          </Typography>

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
            {" "}
            Here are some methods I am familiar with:
          </Typography>
          {/* Grid Layout for Skills */}
          {/* Grid Layout for Skills with Bullet Points */}
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

        {/* Image Box */}
        <Box
          component="div"
          sx={{
            flex: 1,
            height: "400px",
            backgroundImage: "url('/path/to/your/image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        />
      </Box>
    </>
  );
}
