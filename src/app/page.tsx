import { Header, Footer } from "@/components/layout";
import { Hero, Services, Pricing, Work, About, Contact } from "@/components/sections";
import { LoadingScreen } from "@/components/ui";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
