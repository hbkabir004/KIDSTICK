import BlogSection from "./components/Blog";
import ChoseForKids from "./components/ChoseForKids";
import ContactUs from "./components/ContactUs";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import { Header } from "./components/Header/Header";
import ImageCollage from "./components/ImageCollage";
import JoinKidstick from "./components/JoinKidstick";
import MakeChildrenLife from "./components/MakeChildrenLife";
import OurApproach from "./components/OurApproach";
import StatsBanner from "./components/StatBanner";
import TestimonialList from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      {/* <ActivityCarousel/> */}
      <ImageCollage/>
      <OurApproach/>
      <StatsBanner/>
      <ChoseForKids/>
      <TestimonialList />
      <JoinKidstick/>
      <FAQSection/>
      <MakeChildrenLife/>
      <BlogSection/>
      <ContactUs/>
      <Footer />
    </div>
  );
}
