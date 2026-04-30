import React from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home, Services, About, Contact, Case } from "./Components/pages";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<Case />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
