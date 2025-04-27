import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import ArticleDetails from "./ArticleDetails";

function MainPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:articleId" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default MainPage;
