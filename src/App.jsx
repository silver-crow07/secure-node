import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import CareerDetails from "./pages/CareerDetails/CareerDetails";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Solutions from "./pages/Solutions/Solutions";
import SolutionDetails from "./pages/SolutionDetails/SolutionDetails";
import Industries from "./pages/Industries/Industries";
import IndustryDetails from "./pages/IndustryDetails/IndustryDetails"; // ✅ added import
import Blog from "./pages/Blog/Blog";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Terms from "./pages/TermsCondition/Terms";
import Pricing from "./pages/Pricing/Pricing";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:id" element={<SolutionDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<IndustryDetails />} /> {/* ✅ added route */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
