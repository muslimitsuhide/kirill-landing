import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroPage/Hero";
import WhatYouGet from "./components/WhatYouGetPage/WhatYouGet";
import Results from "./components/ResultsPage/Results";
import Cooperation from "./components/CooperationPage/Cooperation";
import Cases from "./components/CasesPage/Cases";
import FAQ from "./components/FAQPage/FAQ";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/ReviewsPage/Reviews";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatYouGet />
      <Results />
      <Cooperation />
      <Cases />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
