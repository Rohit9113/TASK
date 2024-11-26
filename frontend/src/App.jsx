import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactUs/ContactForm";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
