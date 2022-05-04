import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import Officiant from "./components/pages/Officiant";
import Virtual from "./components/pages/Virtual";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage> /</HomePage>} />
        <Route path="/officiant" element={<Officiant></Officiant>} />{" "}
        <Route path="/virtual" element={<Virtual></Virtual>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
