import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "@/components/LandingPage";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <SocialLinks />
      <AboutMe />
      <WorkExperience />
    </>
  );
}
