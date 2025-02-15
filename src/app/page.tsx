import BlogSection from "@/components/BlogSection";
import Carousel from "@/components/Carousel";
import Faqs from "@/components/Faqs";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhoWeAre from "@/components/WhoWeAre";
import BackToTop from "@/components/BackToTop";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Carousel />
      <WhoWeAre />
      <Pricing />
      <Reviews />
      <Faqs />
      <BlogSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
