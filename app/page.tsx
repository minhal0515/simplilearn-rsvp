import Hero from "@/components/Hero";
import CTAForm from "@/components/CTAForm";
import WhyAttend from "@/components/WhyAttend";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <CTAForm />
      <Explore />
      <Speakers />
      <WhyAttend />
      <Agenda />
      <Footer />
    </main>
  );
}
