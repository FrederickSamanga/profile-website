import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import AchievementsSection from "@/components/AchievementsSection";
import ThreeScene from "@/components/ThreeScene";
import Bubble from "@/components/Bubble";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-800/5">
    
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Bubble/>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Blog />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}