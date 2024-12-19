import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "./CustomButton";

export default function DrawerMenu({ headerItems, headerButtons, setDrawerOpen, drawerOpen }) {
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev); // Toggle the drawer state when the close button or an item is clicked
  };

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          color: "white",
          backgroundColor: "var(--background)",
        },
      }}
    >
      <div style={{ padding: "20px", display: "flex", position: "relative" }}>
        {/* Close Drawer Button */}
        <IconButton onClick={toggleDrawer} sx={{ position: "absolute", top: 10, right: 10 }}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>

        <List
          sx={{
            width: 250,
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "30px",
            height: "100vh",
          }}
        >
          {/* Header Items Section */}
          <div style={{ marginBottom: "20px", width: "100%" }}>
            {headerItems.map((item, index) => (
              <ListItem
                button
                key={item}
                onClick={toggleDrawer}
                sx={{
                  display: "flex",
                  padding: "10px 0",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "#64ffda",
                    color: "white",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    textAlign: "center",
                  }}
                >
                  {item}
                </ListItemText>
              </ListItem>
            ))}
          </div>

          <Divider sx={{ margin: "10px 0" }} />

          {/* Header Buttons Section */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {headerButtons.map((item) => (
              <div key={item} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <CustomButton
                  name={item}
                  width="70%"
                  marginT="20px"
                  marginR="0"
                  fontSize="13px"
                  onClick={toggleDrawer}
                />
              </div>
            ))}
          </div>
        </List>
      </div>
    </Drawer>
  );
}
