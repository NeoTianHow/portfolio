import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ExperienceEducation } from "@/components/experience-education";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />

      <main
        id="home"
        className="mx-auto w-full max-w-[1120px] px-5 pb-10 pt-10 sm:px-8 lg:pt-14"
      >
        <HeroSection />
        <TechStackSection />
        <ExperienceEducation />
        <ProjectsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
