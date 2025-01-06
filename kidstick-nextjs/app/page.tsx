import ContactUs from "./components/ContactUs";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import { Header } from "./components/Header/Header";
import OurApproach from "./components/OurApproach";
import TestimonialList from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <OurApproach/>
      <TestimonialList />
      <FAQSection/>
      <ContactUs/>
      <Footer />
    </div>
  );
}
