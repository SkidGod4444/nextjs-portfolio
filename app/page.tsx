import Bio from "@/components/Bio";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { NavItems } from "@/db/fake.data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={NavItems} />
      <Hero />
      <Bio />
      <Projects />
      <Reviews />
      <Footer />
    </div>
   </main>
  );
}
