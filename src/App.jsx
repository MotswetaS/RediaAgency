import React from "react";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import { Home, Services, About, Contact, Case } from "./Components/pages";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<Case />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
