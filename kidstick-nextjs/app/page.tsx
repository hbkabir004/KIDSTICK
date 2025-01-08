import ActivitiesCarousel from "./components/ActivityCarousel";
import BlogSection from "./components/Blog";
import ChoseForKids from "./components/ChoseForKids";
import ContactUs from "./components/ContactUs";
import EventSection from "./components/Event";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import GallerySection from "./components/Gallery";
import Hero from "./components/Hero";
import JoinKidstick from "./components/JoinKidstick";
import MakeChildrenLife from "./components/MakeChildrenLife";
import NavBar from "./components/NavBar";
import PricingSection from "./components/Offer";
import OurApproach from "./components/OurApproach";
import Services from "./components/Services";
import ShopSection from "./components/Shop";
import StatsSection from "./components/Statistics";
import Teachers from "./components/Teacher";
import TestimonialList from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <ActivitiesCarousel/>
      <imgCollage/>
      <OurApproach/>
      {/* <StatsBanner/> */}
      <StatsSection/>
      <Services/>
      <ChoseForKids/>
      <EventSection/>
      <JoinKidstick/>
      <TestimonialList />
      <FAQSection/>
      <Teachers/>
      <MakeChildrenLife/>
      <PricingSection/>
      <GallerySection/>
      <ShopSection/>
      <BlogSection/>
      <ContactUs/>
      <Footer />
    </main>
  );
}
