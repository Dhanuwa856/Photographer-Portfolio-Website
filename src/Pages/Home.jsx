import React from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Portfolio from "../Components/Portfolio/Portfolio";
import Faq from "../Components/Faq/Faq";
import Testimonials from "../Components/Testimonials/Testimonials";
import Logo from "../Components/Logo/Logo";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Faq />
      <Testimonials />
      <Logo />
      <Footer />
    </>
  );
};

export default Home;
