import OfferingCards from "@/app/components/OfferingCards/OfferingCards";
import PastWorkSection from "@/app/components/PastWorkSection/PastWorkSection";
import Components from "@/app/components/Components/Components";
import FAQs from "@/app/components/FAQ/FAQs";
import Contact from "@/app/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <div className="wrapper-div px-2 max-w-screen-2xl mx-auto flex flex-col w-full">
        <Components />
        <OfferingCards />
        <PastWorkSection />
        <FAQs />
        <Contact />
      </div>
    </>
  );
}
