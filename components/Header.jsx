"use client";
import { AppBar, Link, useTheme, useMediaQuery, IconButton } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import DrawerMenu from "./DrawerMenu";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true); // For header visibility
  const [shadow, setShadow] = useState(false); // For header shadow state for not causing re-renders over and over again
  const lastScroll = useRef(0); // For tracking last scroll position
  const headerItems = ["About Me", "Experience", "Skills", "Contact"];
  const headerButtons = ["Resume", "Vurdering", "Soft Skills"];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false); // State for controlling drawer open/close

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev); // Toggle drawer state
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }

      if (currentScroll > lastScroll.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return !isMobile ? (
    <AppBar
      sx={{
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: shadow ? "rgba(var(--background), 0.5)" : "var(--background)",
        backdropFilter: shadow ? "blur(5px)" : "none",
        padding: "25px",
        position: "fixed",
        top: isVisible ? "0" : "-100px", // Hide the header when scrolling down
        left: 0,
        right: 0,
        transition:
          "top 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        boxShadow: shadow ? "0 10px 30px -10px #020c1bb3" : "none", // Apply shadow based on scroll position
      }}
    >
      {/* Header Items*/}
      {headerItems.map((item, index) => (
        <Link
          href="#"
          key={item}
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            mr: "30px",
            color: "white",
            fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              color: "#64ffda",
            }}
          >
            {`0${index + 1}.`}
          </span>
          {item}
        </Link>
      ))}

      {/* Header Buttons */}
      {headerButtons.map((item, index) => (
        <CustomButton
          name={item}
          marginR={"15px"}
          key={item}
          fontSize={{ lg: "13px", md: "13px", sm: "9px", xs: "13px" }}
        />
      ))}
    </AppBar>
  ) : (
    <>
      {/* Mobile View Hamburger Menu Icon */}
      <IconButton
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: "white",
        }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer Menu */}
      <DrawerMenu
        headerButtons={headerButtons}
        headerItems={headerItems}
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
      />
    </>
  );
}
