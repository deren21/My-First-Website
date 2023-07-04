import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Profile from "../components/ProfileSection";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkills />
      <SectionProjects />
      <ContactSection />
      <Footer />
    </>
  );
}
