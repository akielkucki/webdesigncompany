import { Header, Footer } from "@/components/layout";
import { Hero, Services, Work, About, Contact } from "@/components/sections";
import { LoadingScreen } from "@/components/ui";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
