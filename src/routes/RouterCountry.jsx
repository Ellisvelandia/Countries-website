import React from "react";
import { Route, Routes } from "react-router-dom";
import { CountryDetail, Home } from "../pages";

const RouterCountry = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:code" element={<CountryDetail />} />
    </Routes>
  );
};

export default RouterCountry;
