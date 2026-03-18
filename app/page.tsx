import Header from "./components/Header";
import Customer from "./components/Customer";
import Partners from "./components/Partners";
import CashAdvance from "./components/CashAdvance";
import GetStarted from "./components/GetStarted";
import TrustSection from "./components/TrustSection";
import AppPromotion from "./components/AppPromotion";
import FinancialEducation from "./components/FinancialEducation";
import FAQ from "./components/FAQ";
import PeaceOfMind from "./components/PeaceOfMind";
import LegalDisclosures from "./components/LegalDisclosures";
import Footer from "./components/Footer";
import PeaceOfMindSection from "./components/PeaceOfMindSection";


export default function Home() {
  return (
    <div className="min-h-screen relative font-sans">
      <Header />
      <Customer />
      <TrustSection />
      <CashAdvance />
      <AppPromotion />
      {/* <GetStarted />
      <FinancialEducation />
      <FAQ />
      <Partners />
      <PeaceOfMindSection />
      <Footer /> */}
      {/* <LegalDisclosures /> */}
    </div>
  );
}
