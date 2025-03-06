import Footer from "../Footer";
import Header from "../Header";
import HeroSection from "./HeroSection";
import PartnersSection from "./PartnersSection";

const Home = () => {
  return (
    <div className="font-sans flex w-full flex-col justify-between">
      <Header />
      <HeroSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Home;
