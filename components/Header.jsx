"use client";
import { AppBar, Link } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true); // For header visibility
  const [shadow, setShadow] = useState(false); // For header shadow state for not causing re-renders over and over again
  const lastScroll = useRef(0); // For tracking last scroll position
  const headerItems = ["About Me", "Experience", "Skills", "Contact"];
  const headerButtons = ["Resume", "Vurdering", "Soft Skills"];

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

  return (
    <AppBar
      sx={{
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: shadow ? "rgba(var(--background), 0.5)" : "var(--background)",
        backdropFilter: shadow ? "blur(5px)" : "none",
        padding: "25px",
        position: "fixed",
        top: isVisible ? "0" : "-80px", // Hide the header when scrolling down
        left: 0,
        right: 0,
        transition:
          "top 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        boxShadow: shadow ? "0 10px 30px -10px #020c1bb3" : "none", // Apply shadow based on scroll position
      }}
    >
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
      {headerButtons.map((item, index) => (
        <CustomButton name={item} marginR={"15px"} key={item} />
      ))}
    </AppBar>
  );
}
