// import Header from "../components/Header";
import Work from "../components/Work";
import Location from "../components/Location";
import Header from "../components/Header";
import About from "../components/About";
import Stats from "../components/Stats";
import PortfolioBox from "../components/PortfolioBox";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Stats />
      <PortfolioBox />
      <Work />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}
