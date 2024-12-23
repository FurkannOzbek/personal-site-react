"use client";
import { AppBar, Link, useTheme, useMediaQuery, IconButton } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import DrawerMenu from "./DrawerMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { headerItems, headerButtons } from "@/constants/header";
import { StaggeredSlide } from "./StaggeredSlide";
import { useStaggeredAnimation } from "@/hooks/useStaggeredAnimation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [shadow, setShadow] = useState(false);
  const lastScroll = useRef(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const totalLengthForVisibility = headerItems.length + headerButtons.length;
  const headerVisibility = useStaggeredAnimation(totalLengthForVisibility, 150, 0);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  // Detect when component is mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Once mounted, allow the component to render

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

  if (!mounted) return null;

  // If it's mobile, render mobile layout with DrawerMenu
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
      <StaggeredSlide visibleStates={headerVisibility}>
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
              fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace",
              fontSize: "13px",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#64ffda",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "-3px",
                left: "0",
                backgroundColor: "#64ffda",
                transform: "scaleX(0)",
                transformOrigin: "bottom left",
                transition: "transform 0.25s ease-out",
              },
              "&:hover:after": {
                transform: "scaleX(1)",
              },
              "&:not(:hover):after": {
                transform: "scaleX(0)",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-in",
              },
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
      </StaggeredSlide>
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
