import ActivitiesCarousel from "../components/ActivityCarousel";
import BlogSection from "../components/Blog";
import ChoseForKids from "../components/ChoseForKids";
import ContactUs from "../components/ContactUs";
import EventSection from "../components/Event";
import FAQSection from "../components/FAQ";
import GallerySection from "../components/Gallery";
import Hero from "../components/Hero";
import ImageCollage from "../components/ImageCollage";
import JoinKidstick from "../components/JoinKidstick";
import MakeChildrenLife from "../components/MakeChildrenLife";
import PricingSection from "../components/Offer";
import OurApproach from "../components/OurApproach";
import Services from "../components/Services";
import ShopSection from "../components/Shop";
import StatsSection from "../components/Statistics";
import Teachers from "../components/Teacher";
import TestimonialList from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero/>
      <ActivitiesCarousel/>
      <ImageCollage/>
      <OurApproach/>
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
    </>
  );
}
