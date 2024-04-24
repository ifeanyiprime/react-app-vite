import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customer";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="404" element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path="/definition/:search/:partOfSpeech" element={<Definition />} /> */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
