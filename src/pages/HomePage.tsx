import AboutMeSection from "../sections/AboutMeSection";
import ContactSection from "../sections/ContactSection";
import PackagesSection from "../sections/PackagesSection";
import StudentFeedbackSection from "../sections/StudentFeedbackSection";
import StudentProjectsSection from "../sections/StudentProjectsSection";

export default function HomePage() {
  return (
    <>
      <AboutMeSection />
      <StudentFeedbackSection />
      <StudentProjectsSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
