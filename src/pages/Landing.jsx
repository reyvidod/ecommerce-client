import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Card } from "../components/Card";
import ArticleCarousel from "../components/ArticleCarousel";
import ProductCarousel from "../components/ProductCarousel";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCarousel />
      <ArticleCarousel />
      <Footer />
    </>
  );
};

export default Landing;
