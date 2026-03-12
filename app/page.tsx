import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="grain">
      <Cursor />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Process />
      <Contact />
    </main>
  );
}
