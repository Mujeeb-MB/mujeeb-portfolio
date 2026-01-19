import { Layout } from './components/layout';
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  CertificationsSection,
  AboutSection,
  ContactSection,
} from './sections';

function App() {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;