import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Edit from "../Layouts/Edit/Edit";
import Add from "../Layouts/Add/Add";

const Path = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
};

export default Path;
