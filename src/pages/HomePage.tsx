import { styled } from "@mui/material/styles";
import AboutMeSection from "../sections/AboutMeSection";
import ContactSection from "../sections/ContactSection";
import OffersSection from "../sections/OffersSection";
import StudentFeedbackSection from "../sections/StudentFeedbackSection";
import StudentProjectsSection from "../sections/StudentProjectsSection";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        backgroundColor: " #15ab1f",
        padding: "3rem",
      }}
    >
      <AboutMeSection />
      <StudentFeedbackSection />
      <StudentProjectsSection />
      <OffersSection />
      <ContactSection />
    </div>
  );
}
