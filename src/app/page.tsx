import Discover from "@/components/Discover";
import Journey from "@/components/Journey";
import PopularTourBar from "@/components/PopularTourBar";
import Hero2 from "@/components/Hero2";
import ContactBar from "@/components/ContactBar";
import CompanyAbout from "@/components/CompanyAbout";
import Hero3 from "@/components/Hero3";

export default function Home() {
  return (
      <main className="selection:bg-pri-brown selection:text-white overflow-x-hidden">
        <Hero3 />
        <Journey />
        <ContactBar />
        <PopularTourBar />
        <CompanyAbout />
      </main>
  );
}
