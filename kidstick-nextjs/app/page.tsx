import ActivitiesCarousel from "./components/ActivityCarousel";
import BlogSection from "./components/Blog";
import ChoseForKids from "./components/ChoseForKids";
import ContactUs from "./components/ContactUs";
import EventSection from "./components/Event";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import GallerySection from "./components/Gallery";
import Header from "./components/Header/Header";
import ImageCollage from "./components/ImageCollage";
import JoinKidstick from "./components/JoinKidstick";
import MakeChildrenLife from "./components/MakeChildrenLife";
import PricingSection from "./components/Offer";
import OurApproach from "./components/OurApproach";
import StatsBanner from "./components/StatBanner";
import Teachers from "./components/Teacher";
import TestimonialList from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <ActivitiesCarousel/>
      <ImageCollage/>
      <OurApproach/>
      <StatsBanner/>
      <ChoseForKids/>
      <EventSection/>
      <JoinKidstick/>
      <TestimonialList />
      <FAQSection/>
      <Teachers/>
      <MakeChildrenLife/>
      <PricingSection/>
      <GallerySection/>
      <BlogSection/>
      <ContactUs/>
      <Footer />
    </div>
  );
}
