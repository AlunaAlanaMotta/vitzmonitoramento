import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import RevealProvider from "@/components/RevealProvider/RevealProvider";
import About from "@/components/About/About";
import MVV from "@/components/Mvv/Mvv";
import Services from "@/components/Services/Services";
import Differentials from "@/components/Differentials/Differentials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { MenuProvider } from "@/hooks/MenuContext";

export default function Home() {
  return (
    <>
      <MenuProvider>
        <RevealProvider />
        <Navbar />
        <Hero />
        <About />
        <MVV />
        <Services />
        <Differentials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </MenuProvider>
    </>
  );
}
