import Bio from "@/components/Bio";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <Hero />
        <Bio />
        <Projects />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
}
