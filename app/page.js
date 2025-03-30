import Companies from "@/components/Companies";
import Hero from "../components/Hero";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <>
    <Hero/>
    <Companies/>
    <Solutions/>
    <Features/>
    <Plans/>
    <CTA/>
    <Footer/>
    </>
  );
}
