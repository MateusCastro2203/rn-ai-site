import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ExampleSection } from "@/components/example-section";
import { InstallationSection } from "@/components/installation-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ExampleSection />
      <InstallationSection />
      <Footer />
    </main>
  );
}
