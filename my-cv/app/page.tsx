import Hero from "@/components/main/Hero";;
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Footer /> 
      </div>
    </main>
  );
}