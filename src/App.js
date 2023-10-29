import React from "react";
import Home from './pages/home_page'
import Blog from "./pages/blog_page"
import ContactPage from "./pages/contact_page";
import { Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/blog/:post_id" exact Component={Blog} />
        <Route path="/contact" exact Component={ContactPage} />
      </Routes>
    </>
  );
}

export default App;
