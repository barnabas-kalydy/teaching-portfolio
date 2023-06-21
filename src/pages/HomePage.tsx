import { styled } from "@mui/material/styles";
import AboutMeSection from "../sections/AboutMeSection";
import ContactSection from "../sections/ContactSection";
import OffersSection from "../sections/OffersSection";
import StudentFeedbackSection from "../sections/StudentFeedbackSection";
import StudentProjectsSection from "../sections/StudentProjectsSection";

const StyledContainer = styled("div")({
  padding: "2rem",
  backgroundColor: " #15ab1f",
});

export default function HomePage() {
  return (
    <StyledContainer>
      <AboutMeSection />
      <StudentFeedbackSection />
      <StudentProjectsSection />
      <OffersSection />
      <ContactSection />
    </StyledContainer>
  );
}
