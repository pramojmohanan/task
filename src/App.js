import React from "react";
import { Routes, Route } from "react-router";

import Box from "@mui/material/Box";
import Layout from "./Common/Layout/Layout";
import Home from "./Common/Components/Home";
import About from "./Common/Components/About";
import Service from "./Common/Components/Service";
import Contact from "./Common/Components/Contact";


function App() {
  return (
    <Box m={0}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
